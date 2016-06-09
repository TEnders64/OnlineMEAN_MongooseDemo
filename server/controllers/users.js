var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  index: function(req, res){
    User.find({})
      .populate('cards')
      .exec(function(err, users){
        res.render('index', {users: users})
      });
  },
  create: function(req, res){
    var newUser = new User(req.body);
    newUser.save(function(err){
      if (err){
        console.log(err);
      }else{
        res.redirect('/');
      }
    });
  },
  show: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      if (err){
        console.log(err);
      }else{
        res.render('show', {user: user});
      }
    });
  },
  destroy: function(req, res){
    User.findByIdAndRemove(req.params.id, function(err, user){
      if (err){
        console.log(err);
      }else{
        console.log('removed this user:', user);
        res.redirect('/');
      }
    });
  },
  addCard: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      var card = new Card(req.body);
      card._user = user._id;
      // console.log(card);
      card.save(function(err){
        if(err){
          console.log(err);
        }else{
          user.cards.push(card);
          console.log(user.cards);
          user.save(function(err){
            if(err){
              console.log(err);
            }else{
              res.redirect('/');
            }
          })
        }
      })
    })
  }
}
