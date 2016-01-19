import template from './error.html';
import controller from './error.controller';
import './error.scss';

let ErrorComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    params:{errors:{value:''}}
  };
};

export default ErrorComponent;
