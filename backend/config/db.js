const { MongoClient } = require('mongodb');
require("dotenv").config();
//Assign MongoDB connection string to Uri and declare options settings
const uri = "mongodb+srv://kuguapp:" + process.env.CLUSTER_KEY + "@kugu.9hsn3.mongodb.net/kuguappdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;