import angular from 'angular';
import formInputComponent from './form-input.component';

let forInputModule = angular.module('form-input', [])

  .directive('formInput', formInputComponent);

export default forInputModule;
