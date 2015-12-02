import angular from 'angular'

class formInputController {
  constructor($scope, $element, $attrs, $transclude) {
    this.transcluded = false;
    console.log(angular.element('input'))
    Object.keys(this.messages || {}).forEach((attr) => {
      angular.element('input').attr(attr,attr);
    });
    this.name = Math.random().toString(36).substring(7);
    this.form = $scope.$parent[$scope.$parent.vm.name];
    $transclude((clone) => {
      this.transcluded = !!clone.length;
      if(this.transcluded){
        clone.each((i,element) => {
          if(element.getAttribute){
            this.name = element.getAttribute('name')
          }
        });
        return;
      }

    });
  }
}

export default formInputController;
