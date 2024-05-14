'use strict';

const events = require('../eventPool.js');

function handlePackageReadyForPickup(payload){
  console.log(`DRIVER SAYS: I picked up order ${payload.orderId}`)
  events.emit('in-transit', payload);
  console.log(`DRIVER SAYS: I delivered order ${payload.orderId}`)
  events.emit('delivered', payload);
}

module.exports = handlePackageReadyForPickup;