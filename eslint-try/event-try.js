const Events = require('events');

const eventEmitter = new Events.EventEmitter();

console.log("Start events");

eventEmitter.on('event1', () => {
	console.log("Event 1 is called");
});

eventEmitter.on('event2', () => {
	console.log("Event 2 is called");
});

setImmediate(() => {
	console.log("setImmediate is called");
});

setImmediate(() => {
	console.log("setImmediate 2 is called");
});

setTimeout(() => {
	console.log("setTimeout is called");
}, 0);

process.nextTick(() => {
	console.log("nextTick is called");
});
 
eventEmitter.emit('event1');
eventEmitter.emit('event2');

console.log("End events");