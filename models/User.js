const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true }, 
  encryptedPassword: {type: String, required: true },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group"
    }
  ],
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject"
    }
  ]
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
