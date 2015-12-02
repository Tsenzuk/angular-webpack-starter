import template from './form-input.html';
import controller from './form-input.controller';

let forInputComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      label:'@',
      placeholder:'@',
      value:'=',
      messages:'='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default forInputComponent;
