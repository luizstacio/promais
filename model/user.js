'use strict';
var validation = require('../public/js/validation/validations').validation;

exports.users = {
  name: { type: String, default: '', validate: validation.name.fn, required: true },
  authentication: {
    ps: { type: String, default: '' },
    fb: { type: String, default: '' },
    tw: { type: String, default: '' },
  },
  contact: {
    phone: [{ type: String, default: '', validate: validation.phone.fn }],
    email: { type: String, default: '', validate: validation.email.fn, index: { unique: true } }
  },
  years: { type: Number, default: 0 },
  birthday: { type: String },
  address: {
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    street: { type: String, default: '' },
    complement: { type: String, default: '' },
    zipCode: { type: String, default: '' },
    ibgeCode: { type: String, default: '' }
  },
  geolocation: {
    lat: { type: Number, default: 0 },
    long: { type: Number, default: 0 }
  },
  apps: {},
};
