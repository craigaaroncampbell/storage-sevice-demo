const angular = require('angular');
const serviceTestApp = angular.module('serviceTestApp', []);

serviceTestApp.factory('storageService', [ function() {
  return {
    count: 0,
    addCount: function() {
      this.count++;
    }
  };
}]);

serviceTestApp.controller('CraigController', ['storageService', function(storageService) {
  this.counter = storageService;
  this.add = storageService.addCount.bind(storageService);
  this.count = 0;
  this.addCount = function(){
    this.count++;
  };
}]);

serviceTestApp.controller('OtherController', [ function() {
  this.count = 0;
  this.addCount = function(){
    this.count++;
  };
}]);
