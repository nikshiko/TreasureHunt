;(function(){
'use strict';
angular
  .module('treasureHuntApp')
  .controller('LoginCtrl', LoginCtrl);
  
  /* @ngInject */
  function LoginCtrl($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth
          .login({
            email: $scope.user.email,
            password: $scope.user.password
          })
          .then(function() {
            // Logged in, redirect to home
            $location.path('/');
          })
          .catch(function(err) {
            $scope.errors.other = err.message;
          });
      }
    };
  
  }

}).call(this);