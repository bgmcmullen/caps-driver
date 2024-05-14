'use strict';

const io = require('socket.io-client');

const URL = process.env.URL;

const hubConnection = io.connect(URL);

function handlePackageReadyForPickup(payload){
  console.log('----------------------');
  console.log(`DRIVER SAYS: I picked up order ${payload.orderId}`)
  hubConnection.emit('in-transit', payload);
  console.log(`DRIVER SAYS: I delivered order ${payload.orderId}`)
  hubConnection.emit('delivered', payload);
}

module.exports = handlePackageReadyForPickup;