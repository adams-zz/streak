/**
 * Module dependencies.
 */

var express = require('express')
  , app = module.exports = express()
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , datalog = require('./globals');

var app = express();

var body = "";

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.post('/post', express.bodyParser(), function(req, res){
    req.setEncoding();
    console.log("POST!");
    body = req.body.items;
    datalog.dataLog = body;
 });


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

exports.body = body;
