var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.port || 3000);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


app.route("/sign")

    .get(function(req, res){
        var token = "client_id=YmYxMmEzOGFiMWQwODczM2NkMzI1MGQ2Mjk1NzcyYTNl";
        var redirect = "redirect_uri=http://localhost:3000/client";
        var response = "response_type=code";
        var scope = "scope=global";
        var state = "state=app";
        var url = "http://sandbox.delivery.com/third_party/authorize?" + token + "&" + redirect + "&" + response + "&" + scope + "&" + state;

        request(url, function(err, res, body){
            console.log(url);
        });
        res.send("hello world");
    });


// This route collects the Oauth access token, then uses that token to search for a user's location
// Using that user's location we then search for the merchant locations and send them to the FE as JSON
/*app.route("/search")
    .get(function(req, res){
        var token = req.query.code;
        console.log(token);
        var options = {
            url : 'http://sandbox.delivery.com/customer/location/',
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        }
        request(options, function(err, res, loc){
            console.log(loc);

            var data = JSON.parse(loc);
            var street = data.locations[0].street;
            var state = data.locations[0].state;
            var city = data.locations[0].city;
            var zip = data.locations[0].zip_code;

            var mechOpts = {
                url : 'http://sandbox.delivery.com/merchant/search/address?' + street + ',' + city + ',' + state,
                headers : {
                    'Authorization' : token
                }
            }

            request(mechOpts, function(err, res, merch){
                console.log(merch)

                var gotMerch = JSON.parse(merch);
            });
        });
        res.send(gotMerch);
    });*/

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = app.listen(3000, function(){
    console.log(server.address().port + ' is where the magic happens');
});

module.exports = app;
