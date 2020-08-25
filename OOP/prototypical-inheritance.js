function Shape() {}

Shape.prototype.duplicate = function() {
	console.log("duplicate");
}


function Circle(radius) {
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
	console.log("Draw");
}

const S = new Shape();
const C = new Circle(1);