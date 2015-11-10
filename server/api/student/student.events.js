/**
 * Student model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Student = require('./student.model');
var StudentEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
StudentEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Student.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    StudentEvents.emit(event + ':' + doc._id, doc);
    StudentEvents.emit(event, doc);
  }
}

module.exports = StudentEvents;
