
let AuthFactory = function() {
  let _user;

  return {
    setUser(user) {
      _user = user;
    },

    getUser() {
      return _user;
    },

    isSignedIn() {
      return _user && _user.isSignedIn;
    }
  };
};

export default AuthFactory;
