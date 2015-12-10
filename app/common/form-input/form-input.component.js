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
      name: '@model',
      model: '=',
      messages: '='
    },
    template,
    require: '^form',
    link: function (scope, element, attr, form, transclude) {
      if (!scope.name) {
        throw new Error('Form input should contain "model" attribute contains ngModel name');
      }

      let id = _randomName();

      transclude((clone) => {
        let input;
        if (!!clone.length) {
          input = angular.element(element).find('ng-transclude').find('input').first();
          scope.name = input.attr('name') || scope.name;
          scope.id = input.attr('id') || id;
        } else {
          scope.name = scope.name.split('.').pop(); //to get only object field name
          input = angular.element("<input />").addClass("form-control").attr({
            'ng-model': 'model'
          });

          angular.forEach(attr.$attr, function (value, key) {
            if (!scope.hasOwnProperty(key) && !(key.indexOf("ng-") === 0)) {
              input.attr(value, attr[key]);
            }
          });

          element.find('ng-transclude').replaceWith(input);
        }

        id = scope.name + id;
        scope.id = scope.id || id;
        input.attr('id', scope.id);
        input.attr('name', scope.name);

        $compile(input)(scope);
      });
      scope.input = form[scope.name];
    }
  };
};

export default formInputComponent;
