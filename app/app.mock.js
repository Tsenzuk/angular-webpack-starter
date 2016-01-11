import angular from 'angular';
import 'angular-mocks';

function _randomString() {
  return Math.random().toString(36).substring(7);
}

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
  run: ['$httpBackend', function ($httpBackend) {

    let users = {'111': {password: '1'}, 'admin':{password: '1', role:'admin'}};
    let sessions = [];

    $httpBackend.whenPOST('/sign-up/').respond(function (method, path, body, headers) {
      let errors;
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

    $httpBackend.whenPOST('/sign-in/').respond(function (method, path, body, headers) {
      let errors;
      let code = 200;
      try {
        body = JSON.parse(body);
      } catch (e) {
        code = 400;
        return [code, {errors: ['Wrong request format, should be JSON']}]
      }
      if (!users[body.login]) {
        code = 401;
        errors = setError(errors, 'login', 'not found', '');
      } else if (users[body.login].password !== body.password) {
        code = 401;
        errors = setError(errors, 'password', 'wrong', '');
      }

      if (errors) {
        return [code, {errors}]
      }

      let sessionId = _randomString();
      sessions.push(sessionId);
      var expirationDate = new Date();
      expirationDate.setSeconds(expirationDate.getSeconds() + 60);
      setTimeout(function () {
        delete sessions[sessions.indexOf(sessionId)]
      }, 1000 * 60);

      //$cookies.put("SessionId", sessionId, {expires: expirationDate, path:'/'});
      //$cookies.SessionId =  sessionId;

      return [code, {
        message: 'user authenticated',
        user: users[body.login],
        sessionId
      //}];
      }, {'Set-Cookie': `SessionId=${sessionId};path=/;expires=${expirationDate.toUTCString()}`}]
    });

    $httpBackend.whenGET('/test-401/').respond(function (method, path, body, headers) {
      let code = 401;
      let errors = setError(errors, 'session', 'expired', '');
      return [code, {errors}]
    });

    $httpBackend.whenGET('/users',function(headers){
      console.log();
      return true
    }).respond(function (method, path, body, headers) {
      console.log(arguments) //TODO
      return [200, users]
    });
  }]
};
