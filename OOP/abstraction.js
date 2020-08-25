
const _radius = Symbol();
const _draw = Symbol();

class Circle {
	constructor(radius) {
		//this.radius = radius;
		this[_radius] = radius;
	}

	[_draw]() {
		console.log("Draw");
	}
}

const c = new Circle(1);