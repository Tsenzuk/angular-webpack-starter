import angular from 'angular';
import 'angular-translate';
import en from './en.json';
import ua from './ua.json';

var l18nModule = angular.module('l18n', ['pascalprecht.translate']);
l18nModule.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', en);
  $translateProvider.translations('ua', ua);


  $translateProvider.preferredLanguage('ua');
}]);


export default l18nModule;
