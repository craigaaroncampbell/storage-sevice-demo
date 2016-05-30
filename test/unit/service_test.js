var angular = require('angular');

describe('storageService', function() {
  var storageService;

  beforeEach(angular.mock.module('serviceTestApp'));

  beforeEach(angular.mock.inject((_storageService_) => {
    storageService = _storageService_;
  }));

  it('should return an object', () => {
    expect(typeof storageService).toBe('object');
  });

  it('should have a counter', () => {
    expect(typeof storageService.count).toBe('number');
  });

  it('should have a method to increase the counter', () => {
    expect(typeof storageService.addCount).toBe('function');
    expect(storageService.count).toBe(0);
    storageService.addCount();
    expect(storageService.count).toBe(1);
  });
});
