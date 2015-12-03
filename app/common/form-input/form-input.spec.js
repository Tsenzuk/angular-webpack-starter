import formInputModule from './form-input'
import formInputComponent from './form-input.component';
import formInputTemplate from './form-input.html';

describe('Hero', () => {
  let $rootScope, makeController;

  beforeEach(window.module(formInputModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(formInputTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = formInputComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(formInputTemplate);
      });
  });
});
