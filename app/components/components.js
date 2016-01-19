import angular from 'angular';
import Home from './home/home';
import Error from './error/error';
import SignUp from './sign-up/sign-up';
import SignIn from './sign-in/sign-in';
import UsersList from './users-list/users-list';

let componentModule = angular.module('app.components', [
  Home.name,
  Error.name,
  SignUp.name,
  SignIn.name,
  UsersList.name
]);

export default componentModule;
