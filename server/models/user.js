var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]
});

var User = mongoose.model('User', UserSchema);
