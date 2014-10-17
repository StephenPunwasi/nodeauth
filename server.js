var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(session({secret:'sessionsecret'})); //export into private file
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes/index.js')(app, passport);
require('./app/routes/admin.js')(app, passport);
require('./app/routes/user.js')(app, passport);



// 404 ERROR RESPONSE
app.use(function(req, res) {
 res.render('404.ejs', 404);
});

// 500 ERROR RESPONSE
app.use(function(error, req, res, next) {
   res.render('500.ejs', 500);
});

app.listen(port);
console.log('Server running on ' + port);
