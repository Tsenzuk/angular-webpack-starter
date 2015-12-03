import angular from 'angular'

class FormInputController {
  constructor($scope, $element, $transclude, $compile) {
    this.transcluded = false;
    this.name = Math.random().toString(36).substring(7);
    this.form = $scope.$parent[$scope.$parent.vm.name];

    $transclude((clone) => {
      this.transcluded = !!clone.length;
      let element = angular.element("<input />").addClass("form-control").attr({'name':this.name, 'placeholder':this.placeholder, 'ng-model':'vm.value'});
      if(this.transcluded){
        element.hide();
        clone.each((i,element) => {
          if(element.getAttribute){
            this.name = element.getAttribute('name') || this.name;
          }
        });
        return;
      }
      Object.keys(this.messages || {}).forEach((attr) => {
        element.attr(attr,attr);
      });
      $element.find('.input').append(element);
      $compile(element)($scope);
    });
  }
}

FormInputController.$inject = ['$scope', '$element', '$transclude', '$compile'];

export default FormInputController;
