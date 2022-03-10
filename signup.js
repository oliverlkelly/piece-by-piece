var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');

var routes = require('./routes/index');

var app = express();
const hbs = handlebars.create()
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
