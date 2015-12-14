let AuthFactory = function ($http) {
  let _user;

  return {
    createUser(user){
      return $http({
        method: 'POST',
        url: '/sign-up/',
        data: user
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
      }).then(function (data) {
        return data
      }, function (data) {
        throw data
      })
    },

    setUser(user) {
      return $http({
        method: 'POST',
        url: '/sign-in/',
        data: user
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
      }).then(function (data) {
        _user = user;
        user.isSignedIn = true;
        return data
      }, function (data) {
        _user = undefined;
        throw data
      })
    },

    getUser() {
      return _user;
    },

    isSignedIn() {
      return _user && _user.isSignedIn;
    }
  };
};

AuthFactory.$inject = ['$http'];

export default AuthFactory;
