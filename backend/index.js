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

// // config express-session
// const sess = {
//     secret: 'io3onfueinqw3krn',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
// };

// // if (app.get('env') === 'production') {
// //     // Use secure cookies in production (requires SSL/TLS)
// //     sess.cookie.secure = true;

// //     // Uncomment the line below if your application is behind a proxy (like on Heroku)
// //     // or if you're encountering the error message:
// //     // "Unable to verify authorization request state"
// //     // app.set('trust proxy', 1);
// // }
// app.use(session(sess));
// // Configure Passport to use Auth0
// const strategy = new Auth0Strategy(
//     {
//         domain: process.env.ISSUER_BASE_URL,
//         clientID: process.env.CLIENT_ID,
//         clientSecret: process.env.SECRET,
//         callbackURL:
//             process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
//     },
//     function (accessToken, refreshToken, extraParams, profile, done) {
//         // accessToken is the token to call Auth0 API (not needed in the most cases)
//         // extraParams.id_token has the JSON Web Token
//         // profile has all the information from the user
//         return done(null, profile);
//     }
// );

// passport.use(strategy);
// app.use(passport.initialize());
// app.use(passport.session());

app.use(cors(corsOptions));
// app.use(
//     auth({
//         issuerBaseURL: process.env.ISSUER_BASE_URL,
//         baseURL: process.env.BASE_URL,
//         clientID: process.env.CLIENT_ID,
//         secret: process.env.SECRET,
//         authRequired: false,
//         auth0Logout: true,
//     }),
// )

// routing apis

// app.get('/login', passport.authenticate('auth0', {
//     scope: 'openid email profile'}), function (req, res) {
//       res.redirect('/');
//     });

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/user', (req, res) => {
    User.find({})
        .then(user => {
            if (!user) {
                res.status(404).send();
            }
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

app.post('/orders', (req, res) => {
    Cart.find({})
        .then(items => {
            if (!items) {
                res.status(404).send();
            }
            res.send(items);
        }).catch((e) => {
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
    Order.find({ 'sellerID': req.params.userID })
        .then(cart => {
            if (!cart) {
                res.status(404).send();
            }
            res.send(cart);
        }).catch((e) => {
            res.status(400).send(e);
        });
});


app.get('/search/:param', (req, res) => {

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
