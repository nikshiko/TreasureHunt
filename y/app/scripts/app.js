angular.module('y', [
  
  'ngCookies',
  'ngAnimate',
  'y.templates',
  'y.config',
  'y.foo'
])
.config(function ($locationProvider, $httpProvider) {

}) 
.run(function($timeout, $rootScope, $location){
  alert('Your angular app is initialized.  Happy hacking!')
})

