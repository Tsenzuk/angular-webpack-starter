import template from './form-input.html';

function _randomName() {
  return Math.random().toString(36).substring(7);
}

let formInputComponent = function ($compile) {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      label: '@',
      model: '=',
      messages: '='
    },
    template,
    require: '^form',
    link: function (scope, element, attr, form, transclude) {
      scope.name = _randomName();

      transclude((clone) => {
        if (!!clone.length) {
          scope.name = clone.filter('input').attr('name');
          if (clone.filter('input').length && !scope.name) {
            throw new Error("Input provided for form-input should contain name attribute")
          }
          return;
        }

        let newInput = angular.element("<input />").addClass("form-control").attr({
          name: scope.name,
          id: scope.name,
          placeholder: scope.placeholder,
          'ng-model': 'model'
        });

        angular.forEach(attr.$attr,function(value, key){
          if(!scope.hasOwnProperty(key) && !(key.indexOf("ng-")===0)){
            newInput.attr(key, value);
          }
        });

        element.find('ng-transclude').replaceWith(newInput);

        $compile(newInput)(scope);
      });
      scope.input = form[scope.name];
    }
  };
};

export default formInputComponent;
