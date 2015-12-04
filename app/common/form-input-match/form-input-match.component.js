let formInputMatchComponent = function ($parse) {
  return {
    require: '^?form',
    restrict: 'A',
    scope: {
      formInputMatch: '@'
    },
    link: function (scope, elem, attrs, ctrl) {
      if (ctrl) {
        if(!attrs.name){
          throw new Error('Form inputs should have name attribute');
        }

        let matchInput = ctrl[scope.formInputMatch];
        let thisInput = ctrl[attrs.name];

        thisInput.$validators.formInputMatch = function(){
          return (matchInput.$viewValue === thisInput.$viewValue)
        };

        scope.$watch(getMatchValue, function(){
          matchInput.$$parseAndValidate();
          console.log(arguments)
        });

        function getMatchValue(){
          var match = matchInput;
          if(angular.isObject(match) && match.hasOwnProperty('$viewValue')){
            match = match.$viewValue;
          }
          return match;
        }
      }
    }
  };
};

export default formInputMatchComponent;
