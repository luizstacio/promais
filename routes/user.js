'use strict';

var 
    jwt = require('jsonwebtoken'),
    app = require('../app'),
    model = require('../model/user'),
    user  = require('../model/proxy')(model);

exports.authentication =function(req, res){
  var query = {
    'contact.email': req.body.contact.email,
    'authentication.ps': req.body.authentication.ps
  };
  user.findOne(query, function(err, data){
    if (data) {
      // , app.secret, { expiresInMinutes: 0.01 }
      var token = jwt.sign({ name: 'test' }, app.secret, { expiresInMinutes: 0.1 });
      res.json({ token: token });
    } else {
      res.json(401, { msg: 'Não autorizado' });
    }
  });
};

exports.read = function(req, res){
  res.json({ teste: 'testando' });
};

exports.create = function(req, res){
  var User = new user(req.body);
  User.save(function(err, data){
    res.json(err || data);
  })
};

exports.update = function(req, res){
};

exports.delete = function(req, res){
};