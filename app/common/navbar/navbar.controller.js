let Auth, $translate;

class NavbarController {
  constructor(_Auth_, _$translate_) {
    Auth = _Auth_;
    $translate = _$translate_;
  }

  isSignedIn() {
    return Auth.isSignedIn();
  }

  name() {
    let _name = Auth.getUser();
    return (_name.name || _name.login)
  }

  changeLang(lang) {
    lang = lang || 'en';
    $translate.use(lang)
  }
}

NavbarController.$inject = ['Auth', '$translate'];

export default NavbarController;
