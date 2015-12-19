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

let $state, $http, $scope, auth;

class SignUpController {
  constructor(_$state_, _$http_, _$scope_, _auth_) {
    this.name = 'signUpPage';
    $state = _$state_;
    $http = _$http_;
    $scope = _$scope_;
    auth = _auth_;
  }

  submit() {
    var element = angular.element('.after-submit').html('');
    auth.createUser($scope.user).then(function (data) {
      if (data.errors) {
        analyzeMessages('danger', $scope, element, data.errors);
        return;
      }
      analyzeMessages('success', $scope, element, {user: {'created': ''}});
      $state.go('sign-in');
    }, function (data) {
      if (data.data.errors) {
        analyzeMessages('danger', $scope, element, data.data.errors);
        return
      }
      analyzeMessages('danger', $scope, element, {'unexpected error': {[data.status]: ''}})
    });
  }
}

SignUpController.$inject = ['$state', '$http', '$scope', 'Auth'];

export default SignUpController;
