const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String, required: true },
  contacts: [{ type: Schema.Types.ObjectId, ref: 'Contact' }],
});

module.exports = mongoose.model('User', UserSchema);
