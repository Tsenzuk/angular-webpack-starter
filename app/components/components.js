import angular from 'angular';
import Home from './home/home';
import SignUp from './sign-up/sign-up';

let componentModule = angular.module('app.components', [
  Home.name,
  SignUp.name
]);

export default componentModule;
