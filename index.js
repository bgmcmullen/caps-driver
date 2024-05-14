'use strict';

const io = require('socket.io-client');

require('dotenv').config();

const URL = process.env.URL;

const hubConnection = io.connect(URL);

const handlePackageReadyForPickup = require('./handler.js');

hubConnection.on('package-ready-for-pickup', handlePackageReadyForPickup);
