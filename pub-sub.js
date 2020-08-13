const events = require('events');
const eventsEmitter = new events.EventEmitter();

let eventName = 'greeting';

class Publisher {
	constructor(){

	}

	publishMessage(message){
		//let message = 'Hey';
		eventsEmitter.emit(eventName, message);
	}
}

class Subscriber{
	constructor(){
		eventsEmitter.on(eventName, (greeting) => {
			console.log(`Someone waved by saying ${greeting}`);
		})
	}
}

const publisher = new Publisher();
const subscriber = new Subscriber();

publisher.publishMessage('Hey Babe!');