import angular from 'angular'

class FormInputController {
  constructor($scope, $element, $transclude, $compile, formCtrl) {
    this.transcluded = false;
    this.name = this._randomName();

    $transclude((clone) => {
      this.transcluded = !!clone.length;

      if (this.transcluded) {
        this.name = clone.filter('input').attr('name');
        if(clone.filter('input').length &&! this.name){
          throw new Error("Input provided for form-input should contain name attribute")
        }
        return;
      }

      let element = angular.element("<input />").addClass("form-control").attr({
        name: this.name,
        id: this.name,
        placeholder: this.placeholder,
        'ng-model': 'vm.value'
      });
      Object.keys(this.messages || {}).forEach((attr) => {
        element.attr(attr, attr);
      });
      $element.find('ng-transclude').replaceWith(element);
      $compile(element)($scope);
    });
  }

  _randomName() {
    return Math.random().toString(36).substring(7);
  }
}

FormInputController.$inject = ['$scope', '$element', '$transclude', '$compile'];

export default FormInputController;
