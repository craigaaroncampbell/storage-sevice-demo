var angular = require('angular');

describe('storageService', function() {

  beforeEach(angular.mock.module('serviceTestApp'));

  it('should return an object', angular.mock.inject((storageService) => {
    expect(typeof storageService).toBe('object');
  }));

  it('should have a counter', angular.mock.inject((storageService) => {
    expect(typeof storageService.count).toBe('number');
  }));

  it('should have a method to increase the counter', angular.mock.inject((storageService) => {
    expect(typeof storageService.addCount).toBe('function');

    expect(storageService.count).toBe(0);
    storageService.addCount();
    expect(storageService.count).toBe(1);
  }));
});
