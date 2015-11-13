'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
  name: String,
  code: String
});

module.exports = mongoose.model('Subject', SubjectSchema);
