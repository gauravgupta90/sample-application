'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: { type:String, required: true },
  mobile: { type:Number, required: true, unique: true },
  phone: { type:String, unique: true },
  address:{
  	line1: { type:String, required: true },
  	line2: { type:String },
  	city: { type:String, required: true },
  	state: { type:String, required: true },
  	pin: { type:Number, required: true },
  	email: { type:String, required: true }
  },
  marks: []

});

var constants = {
    eMailRegex : /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    phoneRegex : /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
    nameRegex : /^[a-zA-Z0-9\s]+$/,
    pinRegex: /^\d{6}$/
};



/**
 * Validations
 */

// Validate name
StudentSchema
  .path('name')
  .validate(function(name) {
  	return constants.nameRegex.test(name);
  }, 'Invalid name format');

// Validate phone number
StudentSchema
  .path('phone')
  .validate(function(phone) {
  	return constants.phoneRegex.test(phone);
  }, 'Invalid phone format');

module.exports = mongoose.model('Student', StudentSchema);
