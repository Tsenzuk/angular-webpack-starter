import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import L18n from './l18n/l18n';
import Cookies from 'angular-cookies';

import 'bootstrap';
import 'bootstrap/less/bootstrap.less';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    L18n.name,
    Cookies
  ])
  .directive('app', AppComponent)
  .config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.deferIntercept();
  }])
  .run(['$rootScope', '$urlRouter', '$state', 'Auth', 'auth-levels', function ($rootScope, $urlRouter, $state, Auth, AuthLevels) {
    let routes = $state.get();
    $rootScope.$on('$locationChangeSuccess', function(event, next){
      let route = routes.reduce(function (stateName, e){
          return (!!~next.indexOf(e.url)) ? e : stateName;
          },'');
      //if no auth required
      if(!route.signedInRequired) return;
      
      //any auth required
      event.preventDefault();
      
      //but not authenticated
      if(!Auth.isSignedIn()) {
        $state.go('sign-in');
        return;
      };  
      
      //optionally true can be used for any user type
      if(typeof route.signedInRequired === 'boolean'){
        route.signedInRequired = AuthLevels[1];
      }    
      
      let currentLevel = AuthLevels.indexOf(Auth.getUser().role) || 1; //if user doesn't have a role or have some wrong role - it have lowest auth level 
      let requiredLevel = AuthLevels.indexOf(route.signedInRequired);
      
      //if current level is less than required navigate to sign-in
      if(currentLevel < requiredLevel){
        $state.go('sign-in');
        return;
      }
      $urlRouter.sync();
    });
    $urlRouter.listen();
  }]);

import Mock from './app.mock';
angular
  .module('app')
  .config(Mock.config)
  .run(Mock.run);
