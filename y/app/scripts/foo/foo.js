angular.module('y.foo', [

])
.config(function ($locationProvider, $httpProvider) {

})

.controller('YController', function($scope) {
  $scope.foo;
  $scope.fooBar = function(){
    $scope.foo = 'bar';
  }
})  