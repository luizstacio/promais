'use strict';
/**
 * Porjeto desenvolvido por Luiz Estácio.
*/
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var apps = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var apps = require('./routes/apps');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var app = express();

var secret = fs.readFileSync('./key/publickey.pem').toString();
app.use('/api', expressJwt({ secret: secret }));
exports.secret = secret;

// // all environments
// app.use(function(err, req, res){
//   if (err.constructor.name === 'UnauthorizedError') {
//     res.send(401, 'Unauthorized');
//   }
// });

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(__dirname + '/bower_components'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*--------- VIEW --------*/
app.get('/', routes.index);

/*------ API USERS ------*/
app.get('/api/users', user.read);
app.post('/create/users', user.create);
app.put('/api/users/:id', user.update);
app.delete('/api/users/:id', user.delete);

/*------ APPS USERS ------*/
app.get('/api/apps', user.read);
app.post('/api/apps', user.create);
app.put('/api/apps/:id', user.update);
app.delete('/api/apps/:id', user.delete);

/*------ AUTHENTICATION --------*/
app.post('/user/authenticate', user.authentication);

// app.post('/user/authenticate', function (req, res) {
//   //TODO validate req.body.username and req.body.password
//   //if is invalid, return 401

//   var profile = {
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john@doe.com',
//     id: 123
//   };

//   // We are sending the profile inside the token
//   var token = jwt.sign(profile, secret, { expiresInMinutes: 0.1 });

//   res.json({ token: token });
// });

app.post('/apps/authenticate', apps.authentication);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
