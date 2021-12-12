const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
      type: String
    }
  });

module.exports = User = mongoose.model('users', user);
