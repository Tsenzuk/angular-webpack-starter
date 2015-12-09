import angular from 'angular';
import formInputMatchUnique from './form-input-unique.component.js';

let forInputMatchUnique = angular.module('form-input-unique', [])

  .directive('formInputUnique', formInputMatchUnique);

export default forInputMatchUnique;
