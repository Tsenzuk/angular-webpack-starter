import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'bootstrap';
import 'bootstrap/less/bootstrap.less';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])

  .directive('app', AppComponent);
