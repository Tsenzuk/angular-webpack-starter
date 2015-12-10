import angular from 'angular';
import 'angular-mocks';

function setError(errors, key, title, message) {
  if (!errors) {
    errors = {};
  }
  if (!errors[key]) {
    errors[key] = {};
  }
  errors[key][title] = message;
  return errors;
}

export default {
  config: ['$provide', function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  }],
  run: ['$httpBackend', function ($httpBackend/*, ServerDataModel*/) {

    let users = {};

    $httpBackend.whenPOST('/sign-up/').respond(function (method, path, body, headers) {
      console.log(arguments);
      let errors = undefined;
      try {
        body = JSON.parse(body);
      } catch (e) {
        return [400, {errors: ['Wrong request format, should be JSON']}]
      }

      if (users[body.login]) {
        errors = setError(errors, 'login', 'unique', 'this login is used already');
        errors = setError(errors, 'test', 'blah', 'Some random Message');
      }

      users[body.login] = body;

      if (errors) {
        return [400, {errors}]
      }
      return [200, {message: 'user created'}]
    });
  }]
};
