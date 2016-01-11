import angular from 'angular';

let AuthLevelsConstant = angular.module('auth-levels', []).constant('auth-levels', ['guest', 'user', 'admin']);

export default AuthLevelsConstant;
