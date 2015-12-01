import template from './forInput.html';
import controller from './forInput.controller';

let forInputComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      /*model:'=model',*/
      label:'=',
      input:'=',
      messages:'='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default forInputComponent;
