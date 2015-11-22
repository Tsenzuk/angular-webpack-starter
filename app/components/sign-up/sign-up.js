import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signUpComponent from './sign-up.component';

let signUpModule = angular.module('sign-up', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('sign-up', {
      url: '/sign-up',
      template: '<sign-up></sign-up>'
    });
})

.directive('sign-up', signUpComponent);

export default signUpModule;
