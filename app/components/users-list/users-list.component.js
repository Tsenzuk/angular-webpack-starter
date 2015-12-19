import template from './users-list.html';
import controller from './users-list.controller';
//import css from './users-list.scss';

let UsersListComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default UsersListComponent;
