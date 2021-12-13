// imports 
const express = require('express');
const app = express();
const apiPort = 8080;
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./config//db');
const mongoose = require('mongoose');
const multer = require('multer');
const { auth } = require('express-openid-connect');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// get models
const Order = require('./models/order');
const Cart = require('./models/cart');
const User = require('./models/user');
const Product = require('./models/product');
const Image = require('./models/image');

require('dotenv').config();

// open DB connection
connectDB();

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors(corsOptions));


// routing apis
app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/user', (req, res) => {
    User.find({})
        .then(user => {
            if (!user) {
                res.status(404).send();
            } state.sellerID
            res.send(user);
        }).catch((e) => {
            res.status(400).send(e);
        });
});

app.get('/items', (req, res) => {
    Product.find({})
        .then(items => {
            if (!items) {
                res.status(404).send();
            }
            res.send(items);
        }).catch((e) => {
            res.status(400).send(e);
        });
});

app.get('/item/:id', (req, res) => {
    Product.findById({ _id: req.params.id }, req.body)
        .then(item => {
            if (!item) {
                res.status(404).send();
            }
            res.send(item);
        }).catch((e) => {
            res.status(400).send(e);
        });
});

app.post('/item', (req, res) => {
    const newItem = new Product(
        {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            img: req.body.img,
            description: req.body.description,
            sellerID: req.body.sellerID,
            condition: req.body.condition,

        }
    );
    newItem.save().then(item => res.json(item)).catch((e) => {
        res.status(400).send(e);
    });
});

app.post('/order', (req, res) => {
    const newOrder = new Order(
        {
            _id: new mongoose.Types.ObjectId(),
            userID: req.body.name,
            items: req.body.category,
            bill: req.body.price,
        }
    );
    newOrder.save().then(item => res.json(item)).catch((e) => {
        res.status(400).send(e);
    });
});


app.get('/orders/:userID', (req, res) => {
    Order.find({ userID: new mongoose.Types.ObjectId(req.params.userID) })
        .then(item => {
            if (!item) {
                res.status(404).send();
            }
            res.send(item);
        }).catch((e) => {
            res.status(400).send(e);
        });
});

app.get('/cart/:userID', (req, res) => {
    Cart.find({ 'userID': req.params.userID })
        .then(cart => {
            if (!cart) {
                res.status(400);
            }
            res.send(cart);
        }).catch((e) => {
            res.status(400).send(e);
        });
});


app.post('/cart/:userID', (req, res) => {
    Cart.find({ 'userID': req.params.userID })
        .then(cart => {
            if (!cart) {
                const newCart = new Cart({
                    userId: req.body.userID,
                    items: [req.body.item],
                    bill: req.body.bill
                })
                newCart.save().then(item => res.json(item)).catch((e) => {
                    res.status(400).send(e);
                });


            }
            const updateCart = new Cart({
                userId: req.body.userID,
                items: cart.items.push(req.body.item),
                bill: (cart.bill + req.body.bill)
            })
            updateCart.save().then(item => res.json(item)).catch((e) => {
                res.status(400).send(e);
            });
            res.send(cart);
        }).catch((e) => {
            res.status(400).send(e);
        });
});

app.get('/search/:param', (req, res) => {
    Product.find(
        {
            'name': /req.params.param/
        }
    ).then(data => res.send(data));
})


app.post('/image', (req, res) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });

    const upload = multer({ storage: storage });
})

// serve app
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
