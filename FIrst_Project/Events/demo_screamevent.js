var event = require('events');

// All event properties and methods are instances of a EventEmitter object crate a object to access these properties and methods
var eventEmitter = new event.EventEmitter();

// create a event handler
var myEvent = function() {
    console.log("I hear a scream");
}

// assign eventHandler to an event

eventEmitter.on('scream', myEvent);

// fire the scream event using emit()

eventEmitter.emit('scream');

// Node.js has a built in event where you can create, fire, and listen t your own events;