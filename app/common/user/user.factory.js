let UserFactory = function ($resource) {
  return $resource('/users/:id', {id: '@id'});
};

UserFactory.$inject = ['$resource'];

export default UserFactory;
