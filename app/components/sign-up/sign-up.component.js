import template from './sign-up.html';
import controller from './sign-up.controller';

let signUpComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default signUpComponent;
