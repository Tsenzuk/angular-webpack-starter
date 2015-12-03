import template from './form-input.html';
import controller from './form-input.controller';

let forInputComponent = function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      label: '@',
      placeholder: '@',
      value: '=',
      messages: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    require: '^form',
    link: function($scope, $element, $attr, $form){
      $scope.vm.form = $form;
    }
  };
};

export default forInputComponent;
