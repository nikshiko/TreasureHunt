// ---SPECS-------------------------

describe('y', function () {
  var scope,
    controller;
  
  beforeEach(function () {
    module('y');
  });

  describe('YController', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('YController', {
        '$scope': scope
      });
    }));
        
    it('sets the name', function () {
      scope.fooBar();
      expect(scope.foo).toBe('bar');
    });
  });
    
});
