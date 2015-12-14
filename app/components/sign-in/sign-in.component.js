import template from './sign-in.html';
import controller from './sign-in.controller';

let SignInComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default SignInComponent;
