class HomeController {
  constructor(Auth) {
    this.name = 'home';
    this.user = Auth;
  }

  getUser() {
    return this.user.getUser();
  }
}

HomeController.$inject = ['Auth'];

export default HomeController;
