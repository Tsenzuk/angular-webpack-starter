
class NavbarController {
  constructor(Auth) {
    this.Auth = Auth;
  }

  isSignedIn() {
    return this.Auth.isSignedIn();
  }
}

NavbarController.$inject = ['Auth'];

export default NavbarController;
