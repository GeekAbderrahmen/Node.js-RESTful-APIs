// app.js
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./contact/ContactController');

app.use('/api', routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
