var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');

var routes = require('./routes');

var app = express();
const hbs = handlebars.create()
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);
app.listen(3001);


//helloworld