const express = require('express');
const app = express();
const apiPort = 8080;
const path = require('path');
const apiRouter =  require('./config/router');
const cors = require("cors");
require('dotenv').config();
const client = require('./config//db');

app.use(express.json());
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors(corsOptions));

app.get('/items', async (req, res) => {
    await client.connect();
    const items = await client.db().collection('products').find();
    res.send(items);
    client.close();
  });

app.get('/', cors(), apiRouter);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../client/public/index.html'));
});


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))