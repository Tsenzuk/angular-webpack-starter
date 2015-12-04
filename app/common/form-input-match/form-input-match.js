import angular from 'angular';
import formInputMatchComponent from './form-input-match.component';

let forInputMatchModule = angular.module('form-input-match', [])

  .directive('formInputMatch', formInputMatchComponent);

export default forInputMatchModule;
