import angular from 'angular';
import ngResource from 'angular-resource';
import UserFactory from './user.factory';

let UserModule = angular.module('user', ['ngResource'])

  .factory('User', UserFactory);

export default UserModule;
