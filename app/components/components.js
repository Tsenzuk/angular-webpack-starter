import angular from 'angular';
import Home from './home/home';
import SignUp from './sign-up/sign-up';
import SignIn from './sign-in/sign-in';

let componentModule = angular.module('app.components', [
  Home.name,
  SignUp.name,
  SignIn.name
]);

export default componentModule;
