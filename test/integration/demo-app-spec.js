describe('the basic counter function on the demo app for a storage service', function() {
  it('should change the service count when the service count button is clicked', () => {
    browser.get('http://localhost:5000');
    element(by.id('serviceCount')).getText().then((text) => {
      expect(text).toEqual('service counter: 0');
    });
    element(by.buttonText('change service count')).click();
    element(by.buttonText('change service count')).click();
    element(by.buttonText('change service count')).click();
    element(by.buttonText('change service count')).click();
    element(by.id('serviceCount')).getText().then((text) => {
      expect(text).toEqual('service counter: 4');
    });
  });
  it('should change the other count when the other count button is clicked', () => {
    browser.get('http://localhost:5000');
    element(by.id('otherCount')).getText().then((text) => {
      expect(text).toEqual('other controller counter: 0');
    });
    element(by.buttonText('change other controller count')).click();
    element(by.id('otherCount')).getText().then((text) => {
      expect(text).toEqual('other controller counter: 1');
    });
  });

  it('should change the controller count when the other count button is clicked', () => {
    browser.get('http://localhost:5000');
    element(by.id('controllerCount')).getText().then((text) => {
      expect(text).toEqual('this controller counter: 0 (this controller will stop being rendered when other counter is exactly 2)');
    });
    element(by.buttonText('change controller count')).click();
    element(by.id('controllerCount')).getText().then((text) => {
      expect(text).toEqual('this controller counter: 1 (this controller will stop being rendered when other counter is exactly 2)');
    });
  });
});

describe('removing the controller from the DOM and re-rendering it', function() {
  it('should be present when the other counter is less than 2', () => {
    browser.get('http://localhost:5000');
    element(by.id('controllerCount')).getText().then((text) => {
      expect(text).toEqual('this controller counter: 0 (this controller will stop being rendered when other counter is exactly 2)');
    });
    element(by.buttonText('change controller count')).click();
    element(by.id('controllerCount')).getText().then((text) => {
      expect(text).toEqual('this controller counter: 1 (this controller will stop being rendered when other counter is exactly 2)');
    });
  });

  it('should be removed from the DOM when the other counter is exactly 2', () => {
    element(by.buttonText('change service count')).click();
    element(by.buttonText('change service count')).click();
    element(by.id('serviceCount')).getText().then((text) => {
      expect(text).toEqual('service counter: 2');
    });
    element(by.id('otherCount')).getText().then((text) => {
      expect(text).toEqual('other controller counter: 0');
    });
    element(by.buttonText('change other controller count')).click();
    element(by.buttonText('change other controller count')).click();
    element(by.id('otherCount')).getText().then((text) => {
      expect(text).toEqual('other controller counter: 2');
    });
  });

  it('should be re-rendered when the other counter is more than 2 and its counter should be reset back to 0', () => {
    element(by.buttonText('change other controller count')).click();
    element(by.id('otherCount')).getText().then((text) => {
      expect(text).toEqual('other controller counter: 3');
    });
    element(by.id('controllerCount')).getText().then((text) => {
      expect(text).toEqual('this controller counter: 0 (this controller will stop being rendered when other counter is exactly 2)');
    });
  });

  it('the service controller should still have its original coutner value', () => {
    element(by.id('serviceCount')).getText().then((text) => {
      expect(text).toEqual('service counter: 2');
    });
  });
});
