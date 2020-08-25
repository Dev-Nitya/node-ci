
function Stopwatch(){
	let running = false, duration = 0, interval;
	// let incrementDuration = function () {
	// 	interval = setInterval(function(){
	// 		duration = duration % 360 + 1;
	// 	}, 1000);
	// }
	// this.start = function() {
	// 	if(running) throw new Error('Stopwatch already running!');
	// 	running = true;
	// 	incrementDuration();
	// }; 
	// this.stop = function() {
	// 	if(!running) throw new Error('Stopwatch not started yet!');
	// 	running = false;
	// 	clearInterval(interval);
	// };
	// this.reset = function() {
	// 	duration = 0;
	// };
	Object.defineProperty(this, 'duration', {
		get : function() {
			return duration;
		},
		set : function(duration) {
			duration = duration;
		}
	})
	Object.defineProperty(this, 'running', {
		get : function() {
			return running;
		},
		set : function(value) {
			if(typeof value == 'boolean') running = value;
		}
	})
	Object.defineProperty(this, 'interval', {
		get : function() {
			return interval;
		},
		set : function(interval) {
			interval = interval;
		}
	})
	Object.defineProperty(this, 'incrementDuration', {
		get : function() {
			interval = setInterval(function(){
				duration = duration % 360 + 1;
			}, 1000);
		}
	})
}

//prototype methods
Stopwatch.prototype.start = function() {
	if(this.running) throw new Error('Stopwatch already running!');
	this.running = true;
	this.incrementDuration;
}

Stopwatch.prototype.stop = function() {
	if(!this.running) throw new Error('Stopwatch not started yet!');
	this.running = false;
	clearInterval(this.interval);
}

Stopwatch.prototype.reset = function() {
	this.duration = 0;
}

const sw = new Stopwatch();