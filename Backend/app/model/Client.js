const { default: mongoose, Schema } = require('mongoose');
const UnifiedModel = require('./UnifiedModel');

const clientSchema = new Schema({
  role: {
    type: String,
    enum: ['admin', 'staff'],
    default: 'admin',
  },

  Email: String,
  Password: String,
  isActive: { type: Boolean, default: true },

}, { timestamps: true });

// const Client = mongoose.model('client', clientSchema);
const Client = new UnifiedModel('admin', clientSchema);

module.exports = Client;