import angular from 'angular';

function analyzeMessages(className, scope, element, messages) {
  angular.forEach(messages, function (value, key) {
    let messages = [];
    angular.forEach(value, function (message, name) {
      if (scope[scope.vm.name].hasOwnProperty(key)) {
        scope[scope.vm.name][key].values.push(scope.user[key]);
        scope[scope.vm.name][key].$validate();
        return;
      }
      messages.push(angular.element(`<div class="alert alert-${className}" role="alert"><strong>${key} ${name}</strong> ${message}</div>`))
    });
    angular.element('<div></div>').append(
      messages
    ).appendTo(element)
  });
}

class SignUpController {
  constructor($state, $http, $scope) {
    this.name = 'signUpPage';
    this.submit = function () {
      var element = angular.element('.after-submit').html('');
      $http({
        method: 'POST',
        url: '/sign-up/',
        data: $scope.user
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
      }).success(function (data) {
        if (data.errors) {
          analyzeMessages('danger', $scope, element, data.errors)
          return;
        }
        analyzeMessages('success', $scope, element, {user: {'created': ''}});
        $state.go('home');
      }).error(function (data, code) {
        if (data.errors) {
          analyzeMessages('danger', $scope, element, data.errors)
          return
        }
        analyzeMessages('danger', $scope, element, {'unexpected error': {[code]: ''}})
      });
    }
  }
}

SignUpController.$inject = ['$state', '$http', '$scope'];

export default SignUpController;
