let $http;

class HomeController {
  constructor(Auth, _$http_) {
    this.name = 'home';
    this.user = Auth;
    $http = _$http_;
  }

  check401() {
    $http.get('/test-401/')
  }

  getUser() {
    return this.user.getUser();
  }
}

HomeController.$inject = ['Auth', '$http'];

export default HomeController;
