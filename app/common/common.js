import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Auth from './auth/auth';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Auth.name
]);

export default commonModule;
