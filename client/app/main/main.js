;(function(){
'use strict';
angular
  .module('treasureHuntApp')
  .config(Configuration);

  /* @ngInject */
  function Configuration($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }
}).call(this);