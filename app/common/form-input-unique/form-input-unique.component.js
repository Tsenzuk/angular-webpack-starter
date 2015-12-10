let formInputMatchUnique = function () {
  return {
    require: '?ngModel',
    restrict: 'A',
    link: function (scope, elem, attrs, ctrl) {
      if (!ctrl) {
        return;
      }
      ctrl.values || (ctrl.values = []);

      ctrl.$validators.unique = function (modelValue, viewValue) {
        return !~ctrl.values.indexOf(viewValue)
      };

    }
  };
};

export default formInputMatchUnique;
