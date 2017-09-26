// Contact.js
var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String
});
mongoose.model('Contact', ContactSchema);

module.exports = mongoose.model('Contact');
