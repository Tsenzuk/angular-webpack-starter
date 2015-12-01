import angular from 'angular'

class formInputController {
  constructor($scope, $element, $attrs, $transclude) {
    //this.name = 'form-input';
    $transclude(function(clone, scope) {
      let str ="";
      $scope.vm.defaultInputShow = true;
      clone.each(function(i,e){str = str + (e.outerHTML||"")});
      if(!!(str.length)){
        $scope.vm.defaultInputShow = false;
      }
    });
  }
}

export default formInputController;
