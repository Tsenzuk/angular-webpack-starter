import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import signUpComponent from './sign-up.component';

let signUpModule = angular.module('sign-up', [
  'ngMessages',
  uiRouter
])

.config(($stateProvider) => {


  $stateProvider
    .state('sign-up', {
      url: '/sign-up',
      template: '<sign-up></sign-up>'
    });
})

.directive('signUp', signUpComponent);

export default signUpModule;
