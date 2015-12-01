import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formInputComponent from './form-input.component';

let forInputModule = angular.module('form-input', [
  uiRouter
])

.directive('forInput', formInputComponent);

export default forInputModule;
