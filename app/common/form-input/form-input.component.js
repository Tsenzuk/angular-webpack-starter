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
      modelName: '@model',
      model: '=',
      messages: '='
    },
    template,
    require: '^form',
    link: function (scope, element, attr, form, transclude) {
      scope.name = scope.modelName;
      let id = _randomName();

      transclude((clone) => {
        if (!!clone.length) {
          let inputs = angular.element(element).find('ng-transclude').find('input');
          if (inputs.length && !scope.name) {
            throw new Error('Input provided for form-input should contain "name" attribute.');
          }
          if (!scope.modelName) {
            throw new Error('Form input should contain "model" attribute contains ngModel name');
          }

          scope.name = inputs.attr('name');
          id = scope.name + id;

          if (!inputs.attr('id')) {
            inputs.attr('id', id)
          }
          scope.id = inputs.attr('id');

          $compile(inputs)(scope);
          return;
        }

        scope.name = scope.name.split('.').pop(); //to get only object field name
        scope.id = scope.name + id;
        let newInput = angular.element("<input />").addClass("form-control").attr({
          name: scope.name,
          id: scope.id,
          placeholder: scope.placeholder,
          'ng-model': 'model'
        });

        angular.forEach(attr.$attr, function (value, key) {
          if (!scope.hasOwnProperty(key) && !(key.indexOf("ng-") === 0)) {
            newInput.attr(value, attr[key]);
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
