import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UsersListComponent from './users-list.component';


let UsersListModule = angular.module('users-list', [

    uiRouter
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('users-list', {
        url: '/users-list',
        template: '<users-list></users-list>'
      });
  })
  .directive('usersList', UsersListComponent);

export default UsersListModule;
