const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(logger(process.env.DEBUG === true ? "dev" : "common"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    let accessKeyName = process.env.ACCESS_KEY_NAME || 'X-Token';
    if (process.env.DEBUG === true || process.env.ACCESS_KEY_VALUE === req.header(accessKeyName)) {
        next();
    } else {
        res.render('access-denied');
    }
});

app.use('/', require('./routes/index'));

module.exports = app;
