var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var transactionsschema = new Schema({
  member:String,
  days:Number,
  out_date:{
    type: Date,
    default: Date.now
  },
  due_date:{
    type: Date,
    default: Date.now
  },
  in_date:{
    type: Date,
    default: Date.now
  },
  fine:Number,
  createdAt:
  {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model('books',transactionsschema)
module.exports= Transaction
