/**
 * Main entry
 */

"use strict";

var log = require('debug')('SITE_NAME:main');
var express = require('express');
var app = module.exports.app = exports.app = express();

// set base root
app.set('root', __dirname);

// Configuration

// 
require('./config')(app);


// Routes
require('./routes')(app);


