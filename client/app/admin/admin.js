;(function(){
'use strict';
angular
  .module('treasureHuntApp')
  .config(Configuration);
  /* @ngInject */
  
  function Configuration($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  } 
}).call(this);