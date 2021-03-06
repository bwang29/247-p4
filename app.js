
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');
var app = express();
var server = app.listen(80);
global.socket = require('socket.io').listen(server);
global.socket.set('log level', 1);
var game = require('./routes/game'); 
 
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});
 
app.configure('development', function(){
  app.use(express.errorHandler());
});
 
app.get('/', routes.index);
app.get('/smoke',function(req,res){
  res.end("Smoke test");
});
 
 
console.log("Express server started");

