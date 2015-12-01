import angular from 'angular';
import Navbar from './navbar/navbar';
import forInput from './forInput/forInput';
import User from './user/user';
import Auth from './auth/auth';

let commonModule = angular.module('app.common', [
  Navbar.name,
  forInput.name,
  User.name,
  Auth.name
]);

export default commonModule;
