import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ErrorComponent from './error.component';

let ErrorModule = angular.module('error', [
    uiRouter
  ])
  
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('error', {
        url: '/error',
        template: '<error></error>',
        params:{
          errors:{'Error':'You see this message by mistake. Please go back and retry your action'}
        }
      });
  })
  
  .directive('error', ErrorComponent);

export default ErrorModule;
