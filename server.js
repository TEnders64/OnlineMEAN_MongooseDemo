var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/client/views');
app.set('view engine','ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(6789);
