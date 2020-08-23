
//Factory function
function createCircle(radius) {
	return {
		radius,
		draw : function() {
			console.log(`Drawing circle with ${radius} radius`);
		}
	};
}

const circle = createCircle(10);
//circle.draw();

//constructor
function Circle(radius){
	console.log('this', this);
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const another = new Circle(10);

