// MongoDB model that handles the guest/table information

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.Promise = Promise;
  mongoose.connect(require('./connection-string'), {
    useMongoClient: true
  });
}

var newSchema = new Schema({
  'table': { type: String, required: true },
  'guests': { type: Number, required: true },
  'server': { type: String, required: true },
  'items': { type: Array },
  'sub_total': { type: Number, default: 0.00 },
  'tax': { type: Number, default: 0.00  },
  'total': { type: Number, default: 0.00  },
  'paid': { type: Boolean, default: false  },
  'card': { 
      'number': { type: Number },
      'cardexp': { type: String },
      'cvc': { type: Number }
  },
  'paidTime': { type: Date },
  'paymentType':{ type: String },
  'amountTendered': { type: Number },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now },
});

newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now()} });
});

module.exports = mongoose.model('Receipts', newSchema);