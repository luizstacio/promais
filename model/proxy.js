'use strict';
module.exports = function(model){

  var mongoose = require('mongoose');
  var db = mongoose.connect('mongodb://desenv/doemais').connection;

  db.on('error', function(err){
    console.log('Error connect : ' + err);
  });
  db.once('open', function () {
    console.log('Open connect. Success!');
  });

  var nameModel = Object.keys(model)[0];
  var userSchema = new mongoose.Schema(model[nameModel]);
  var Model = mongoose.model(nameModel, userSchema);
  return Model;
};
// Model.prototype.createModel = function(req, res){
//   function recursiveModel(model[nameModel]) {
//     var newModel = {};
//     for (key in modelo) {
//       if ( !modelo[key].type ) {
//         if ( typeof (modelo[key].length) === 'number' ) {
//            newModel[key] = [];
//         } else {
//           newModel[key] = recursiveModel(modelo[key]);
//         }
//       } else if ( !modelo[key].default ) {
//         modelo[key].type == String ? newModel[key] = '' : 
//           modelo[key].type == Number ? newModel[key] = 0 :
//             modelo[key].type == Date ? newModel[key] = '' : null;
//       } else {
//         newModel[key] = modelo[key].default;
//       }
//     }
//     return newModel;
//   }
//   return recursiveModel(model[Object.keys(model)[0]]);
// };