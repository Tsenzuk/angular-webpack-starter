import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forInputComponent from './forInput.component';

let forInputModule = angular.module('forInput', [
  uiRouter
])

.directive('forInput', forInputComponent);

export default forInputModule;
