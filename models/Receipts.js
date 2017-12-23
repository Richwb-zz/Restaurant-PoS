var mongoose = require('mongoose');
var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.Promise = Promise;
  mongoose.connect(require('./connection-string'), {
    useMongoClient: true
  });
}

var newSchema = new Schema({
  'table': { type: Number },
  'guests': { type: Number },
  'server': { type: String },
  'items': { type: Array },
  'sub_total': { type: Number, Default: 0.00 },
  'tax': { type: Number, Default: 0.00  },
  'total': { type: Number, Default: 0.00  },
  'paid': { type: Boolean, Default: false  },
  'paidtime': { type: Date},
  'paymenttype':{ type: String},
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
  this.update({}, { $set: { updatedAt: Date.now() } });
});

module.exports = mongoose.model('Receipts', newSchema);