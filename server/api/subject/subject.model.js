'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
  subjectName: { type:String, required: true },
  subjectCode: { type:String, required: true },
  totalMarks: { type:Number , required: true}
});

module.exports = mongoose.model('Subject', SubjectSchema);
