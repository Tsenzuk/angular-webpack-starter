import template from './form-input.html';

function _randomName() {
  return Math.random().toString(36).substring(7);
}

let forInputComponent = function ($compile) {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      label: '@',
      placeholder: '@',
      value: '=',
      messages: '='
    },
    template,
    require: '^form',
    link: function (scope, element, attr, form, transclude) {
      scope.form = form;
      scope.name = _randomName();

      let transcluded = false;

      transclude((clone) => {
        transcluded = !!clone.length;

        if (transcluded) {
          scope.name = clone.filter('input').attr('name');
          if (clone.filter('input').length && !scope.name) {
            throw new Error("Input provided for form-input should contain name attribute")
          }
          return;
        }

        let input = angular.element("<input />").addClass("form-control").attr({
          name: scope.name,
          id: scope.name,
          placeholder: scope.placeholder,
          'ng-model': 'value'
        });
        Object.keys(scope.messages || {}).forEach((attr) => {
          input.attr(attr, attr);
        });
        element.find('ng-transclude').replaceWith(input);
        $compile(input)(scope);
      });
    }
  };
};

export default forInputComponent;
