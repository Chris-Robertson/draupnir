const mongoose = require('./init');
const shortid = require('shortid')

const clientSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  email: String,
  uniqId: {
    type: String,
    default: shortid.generate()
  },
  status: {
    quoteSent: {
      type: Boolean,
      default: false
    } ,
    quoteAccepted: {
      type: Boolean,
      default: false
    },
    depositCleared: {
      type: Boolean,
      default: false
    },
    idVerified: {
      type: Boolean,
      default: false
    }
  },
});


// reusable for x3 properties
clientSchema.statics.updateStatus = function(id, keyName, status) {
  const options = {new: true}
  const key = 'status.' + [keyName]
  console.log(id, keyName, status, key)
  
  return this.model('Client')
    .findOneAndUpdate(id, {$set: {[key]: status}}, options )
    .then(client => (client)) //returns promise with client
}

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
