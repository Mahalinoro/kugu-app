const mongoose = require('mongoose');

const user = new mongoose.Schema({
<<<<<<< HEAD
    name: {
      type: String
    }
  });

module.exports = User = mongoose.model('users', user);
=======
    firstName:{
        type:String, 
        required: true
    }, 
    lastName:{
        type:String,
        required: true
    }
})

module.exports = User = mongoose.model('user', user);
>>>>>>> 119e4bd8cb935c2358a86e8b69fce364f4fb37c4
