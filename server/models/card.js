var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CardSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  type: String,
  cc_num: Number
});

var Card = mongoose.model('Card', CardSchema);
