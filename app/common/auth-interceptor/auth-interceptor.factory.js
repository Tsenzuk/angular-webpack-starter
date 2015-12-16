let AuthInterceptorFactory = function ($injector, $q) {
  return {
    responseError: function responseError(rejection) {
      if (rejection.status === 401 && rejection.config.url !== '/sign-in/') {
        var $state = $injector.get('$state');
        $state.go('sign-in');
      }
      return $q.reject(rejection);
    }
  };
};

AuthInterceptorFactory.$inject = ['$injector', '$q'];

export default AuthInterceptorFactory;
