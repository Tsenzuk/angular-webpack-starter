import angular from 'angular';

function analyzeMessages(className, element, messages) {
  angular.forEach(messages, function (value, key) {
    let messages = [];
    angular.forEach(value, function (message, name) {
      messages.push(angular.element(`<div class="alert alert-${className}" role="alert"><strong>${key} ${name}</strong> ${message}</div>`))
    });
    angular.element('<div></div>').append(
      messages
    ).appendTo(element)
  });
}

let $state, $scope, auth;

class SignInController {
  constructor(_$state_, _$scope_, _auth_) {
    this.name = 'signIn';
    $state = _$state_;
    $scope = _$scope_;
    auth = _auth_;
  }

  submit() {
    var element = angular.element('.after-submit').html('');
    auth.setUser($scope.user).then(function (data) {
      if (data.errors) {
        analyzeMessages('danger', element, data.errors);
        return;
      }
      analyzeMessages('success', element, {user: {'created': ''}});
      $state.go('home');
    }, function (data) {
      if (data.data.errors) {
        analyzeMessages('danger', element, data.data.errors);
        return
      }
      analyzeMessages('danger', element, {'unexpected error': {[data.status]: ''}})
    });
  }
}

SignInController.$inject = ['$state', '$scope', 'Auth'];

export default SignInController;
