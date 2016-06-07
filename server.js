var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_db2');

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

var User = mongoose.model('User', UserSchema);

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/client/views');
app.set('view engine','ejs');

app.get('/', function(req, res){
  User.find({}, function(err, users){
    if (err){
      console.log(err);
    }else{
      res.render('index', {users: users});
    }
  });
});

app.post('/users', function(req, res){
  var newUser = new User(req.body);
  newUser.save(function(err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});

app.listen(6789);
