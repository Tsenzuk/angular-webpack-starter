class UsersListController {
  constructor($http, User) {
    this.name = 'UsersList';
    this.data = User.get()//[{login: "aa"}]
  }
}

UsersListController.$injector = ['$http', 'User'];

export default UsersListController;
