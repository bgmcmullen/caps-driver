'use strict'


// tests are chatgpt generated
const events = require('../eventPool.js');
const handlePackageReadyForPickup = require('./handler.js');

// Mocking the console.log function
console.log = jest.fn();

describe('handlePackageReadyForPickup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should emit "in-transit" and "delivered" events with correct payload', () => {
    // Mock events.emit
    events.emit = jest.fn();

    const payload = { orderId: 123 };

    // Call the function
    handlePackageReadyForPickup(payload);

    // Expect events.emit to be called twice with correct arguments
    expect(events.emit).toHaveBeenCalledTimes(2);
    expect(events.emit).toHaveBeenCalledWith('in-transit', payload);
    expect(events.emit).toHaveBeenCalledWith('delivered', payload);
  });

  it('should log messages to the console', () => {
    const payload = { orderId: 123 };

    // Call the function
    handlePackageReadyForPickup(payload);

    // Expect console.log to be called twice with correct messages
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, `DRIVER SAYS: I picked up order ${payload.orderId}`);
    expect(console.log).toHaveBeenNthCalledWith(2, `DRIVER SAYS: I delivered order ${payload.orderId}`);
  });
});