
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
	constructor(radius) {
		//this.radius = radius;
		_radius.set(this, radius);
		_move.set(this, function() {
			console.log("move", this);
		})
	}

	draw() {
		_move.get(this)();
		//console.log(_radius.get(this));
	}


}

const c = new Circle(1);