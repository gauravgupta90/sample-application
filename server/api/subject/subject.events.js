/**
 * Subject model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Subject = require('./subject.model');
var SubjectEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SubjectEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Subject.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SubjectEvents.emit(event + ':' + doc._id, doc);
    SubjectEvents.emit(event, doc);
  }
}

module.exports = SubjectEvents;
