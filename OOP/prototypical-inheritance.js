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

Circle.prototype.duplicate = function() {
	console.log("Circle duplicate");
}

function Sqaure(size) {
	this.size = size;
}

extend(Sqaure, Shape);

Sqaure.prototype.duplicate = function() {
	console.log("Sqaure duplicate");
}

const C = new Circle(10, 'red');
const S = new Sqaure(10);