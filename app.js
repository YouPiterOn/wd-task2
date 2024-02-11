const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./mongooseConnection');
const routes = require('./routes');

const whitelist = ['http://localhost:4000'];

function originFunction(origin, callback) {
    if (whitelist.includes(origin) || !origin) {
        callback(null, true);
    }
    else {
        callback(new Error('Not allowed by CORS'));
    }
}
const corsOptions = {
    origin:originFunction,
}

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', 'views');

mongoose.set('strictQuery', false);

const port = 4000;

app.use('/product', routes.productRoutes);
app.use('/cookie', routes.cookieRoutes);
app.use('/header', routes.headerRoutes);
app.use('/user', routes.userRoutes);

app.listen(port, () => {
    
})