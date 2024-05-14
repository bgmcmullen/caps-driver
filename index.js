'use strict';

const events = require('../eventPool.js');

const handlePackageReadyForPickup = require('./handler.js');

events.on('package-ready-for-pickup', handlePackageReadyForPickup);
