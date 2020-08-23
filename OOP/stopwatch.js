
function Stopwatch(){
	let running = false, duration = 0, interval;
	let incrementDuration = function () {
		interval = setInterval(function(){
			duration = duration % 360 + 1;
		}, 1000);
		console.log("duration", duration);
	}
	this.start = function() {
		if(running) throw new Error('Stopwatch already running!');
		running = true;
		incrementDuration();
	}; 
	this.stop = function() {
		if(!running) throw new Error('Stopwatch not started yet!');
		running = false;
		clearInterval(interval);
	};
	this.reset = function() {
		duration = 0;
	};
	Object.defineProperty(this, 'duration', {
		get : function() {
			return duration;
		}
	})
}

const sw = new Stopwatch();