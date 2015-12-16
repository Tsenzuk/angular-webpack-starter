let formInputMatchComponent = function () {
  return {
    require: '^?form',
    restrict: 'A',
    scope: {
      formInputMatch: '@'
    },
    link: function (scope, elem, attrs, ctrl) {
      if (!ctrl) {
        console.warn('Form input match should be used only in "form" directive!');
        return;
      }
      if (!attrs.name) {
        console.warn('Form inputs should have "name" attribute.');
        return;
      }
      if (!ctrl[attrs.name]) {
        console.warn('Current input should be used in form directive!');
        return;
      }

      let matchInput = ctrl[scope.formInputMatch];
      let thisInput = ctrl[attrs.name];

      thisInput.$validators.formInputMatch = function () {
        return (matchInput.$viewValue === thisInput.$viewValue)
      };

      scope.$watch(getMatchValue, function () {
        matchInput.$$parseAndValidate();
      });

      function getMatchValue() {
        var match = matchInput;
        if (angular.isObject(match) && match.hasOwnProperty('$viewValue')) {
          match = match.$viewValue;
        }
        return match;
      }
    }
  };
};

export default formInputMatchComponent;
