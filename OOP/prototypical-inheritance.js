function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function() {
	console.log("duplicate");
}


function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Circle(radius, color) {
	Shape.call(this, color);
	this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
	console.log("Draw");
}

function Sqaure(size) {
	this.size = size;
}

extend(Sqaure, Shape);

const S = new Shape();
const C = new Circle(1, 'red');