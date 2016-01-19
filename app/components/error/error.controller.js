class ErrorController {
  constructor($stateParams) {
    this.name = 'error';
    this.errors = $stateParams;
  }
}

ErrorController.$inject = ['$stateParams'];

export default ErrorController;
