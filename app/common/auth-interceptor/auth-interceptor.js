import angular from 'angular';
import AuthInterceptorFactory from './auth-interceptor.factory.js';

let AuthInterceptorModule = angular.module('auth-interceptor', [])
  .factory('AuthInterceptor', AuthInterceptorFactory);

angular.module('auth-interceptor').config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});

export default AuthInterceptorModule;
