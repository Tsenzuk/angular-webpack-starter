import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= upCaseName %>Component from './<%= name %>.component';

let <%= upCaseName %>Module = angular.module('<%= name %>', [
  uiRouter
])

.directive('<%= name %>', <%= upCaseName %>Component);

export default <%= upCaseName %>Module;
