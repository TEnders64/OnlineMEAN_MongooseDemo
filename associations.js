var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
	cards: [{type: Schema.Types.ObjectId, ref: ‘Card’}]
});

var CardSchema = new Mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: ‘User’},
	number: Number
});

var User = mongoose.model('User', UserSchema);
var Card = mongoose.model('Card', CardSchema);

User.findOne({_id: req.params.id}, function(err, user){
  var card = new Card(req.body);
  card._user = user._id;
  card.save(function(err){
    if(err){
      console.log(err);
    }else{
      user.cards.push(card);
      user.save(function(err){
        if(err){
          console.log(err);
        }else{
          res.redirect('/');
        }
    })
  })
})

User.findOne({_id: req.params.id})
  .populate('cards')
  .exec(function(err, user){
    res.render('show', {user: user})
  })
