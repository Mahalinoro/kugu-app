const mongoose = require('mongoose');
require("dotenv").config();
//Assign MongoDB connection string to Uri and declare options settings
const uri = "mongodb+srv://kuguapp:" + process.env.CLUSTER_KEY + "@kugu.9hsn3.mongodb.net/kuguappdb?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('db connected..!');
  };
  
module.exports = connectDB;
