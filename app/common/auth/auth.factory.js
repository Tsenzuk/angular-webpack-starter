import angular from 'angular';

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
      }).then(function (ret) {
        _user = angular.extend(user, ret.data.user);
        user.isSignedIn = true;
        return ret
      }, function (data) {
        _user = undefined;
        throw data
      });
    },
    
    unsetUser(){
      return $http({
        method: 'DELETE',
        url: '/sign-in/',
        data: _user
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
      }).then(function (ret) {
        _user = undefined;
        return ret
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
