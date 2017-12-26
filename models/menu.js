var mongoose = require('mongoose');
var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.Promise = Promise;
  mongoose.connect(require('./connection-string'), {
    useMongoClient: true
  });
}

var newSchema = new Schema({
  
  'name': { type: String },
  'description': { type: String },
  'cost': { type: Number },
  'category': { type: String },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
},
{ collection: 'menu'}
);

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

module.exports = mongoose.model('Menu', newSchema);