function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.draw = function() {
	console.log("Draw");
}

Circle.prototype.duplicate = function() {
	console.log("Duplicate");
}