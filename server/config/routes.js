//routes point to controller/methods
var users = require('./../controllers/users.js');

module.exports = function(app){
  app.get('/', function(req, res){
    users.index(req, res);
  });

  app.post('/users', function(req, res){
    users.create(req, res);
  });

  app.get('/users/:id', function(req, res){
    users.show(req, res);
  });

  app.get('/users/:id/delete', function(req, res){
    users.destroy(req, res);
  });

  app.post('/users/:id/addCard', function(req, res){
    users.addCard(req, res);
  });
}
