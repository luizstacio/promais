var jwt = require('jsonwebtoken');

exports.authentication =function(res, req){
  var token = jwt.sign(profile, secret);
  res.json({ token: token });
}

exports.read = function(res, req){
};

exports.create = function(res, req){
};

exports.update = function(res, req){
};

exports.delete = function(res, req){
};