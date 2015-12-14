import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SignInComponent from './sign-in.component';

let SignInModule = angular.module('sign-in', [
    uiRouter
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('sign-in', {
        url: '/sign-in',
        template: '<sign-in></sign-in>'
      });
  })
  .directive('signIn', SignInComponent);

export default SignInModule;
