class NavbarController {
  constructor(Auth) {
    this.Auth = Auth;
  }

  isSignedIn() {
    return this.Auth.isSignedIn();
  }

  name() {
    let _name = this.Auth.getUser();
    return (_name.name || _name.login)
  }
}

NavbarController.$inject = ['Auth'];

export default NavbarController;
