import angular from 'angular';
import Navbar from './navbar/navbar';
import formInput from './form-input/form-input';
import formInputMatch from './form-input-match/form-input-match';
import formInputUnique from './form-input-unique/form-input-unique';
import User from './user/user';
import Auth from './auth/auth';
import AuthLevels from './auth-levels/auth-levels';
import AuthInterceptor from './auth-interceptor/auth-interceptor';

let commonModule = angular.module('app.common', [
  Navbar.name,
  formInput.name,
  formInputMatch.name,
  formInputUnique.name,
  User.name,
  Auth.name,
  AuthLevels.name,
  AuthInterceptor.name
]);

export default commonModule;
