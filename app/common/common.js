import angular from 'angular';
import Navbar from './navbar/navbar';
import formInput from './form-input/form-input';
import User from './user/user';
import Auth from './auth/auth';

let commonModule = angular.module('app.common', [
  Navbar.name,
  formInput.name,
  User.name,
  Auth.name
]);

export default commonModule;
