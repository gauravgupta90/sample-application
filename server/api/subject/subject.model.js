'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
  name: { type:String, required: true },
  code: { type:String, required: true }
});

module.exports = mongoose.model('Subject', SubjectSchema);
