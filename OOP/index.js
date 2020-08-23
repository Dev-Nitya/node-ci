
//Factory function
// function createCircle(radius) {
// 	return {
// 		radius,
// 		draw : function() {
// 			console.log(`Drawing circle with ${radius} radius`);
// 		}
// 	};
// }

// const circle = createCircle(10);
//circle.draw();

//constructor
function Circle(radius){
	this.radius = radius;
	//private
	let defaultLocation = {
		x : 0, y : 0
	};
	let computeOptimumLocation = function() {

	};
	Object.defineProperty(this, 'defaultLocation', {
		get : function() {
			return defaultLocation;
		}
	})
	//private method end
	this.draw = function() {
		computeOptimumLocation();
		console.log('draw');
	};
}

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const Circle1 = new Function('radius', `
// 	this.radius = radius;
// 	this.draw = function() {
// 		console.log('draw');
// 	}
// `);

// const circle = new Circle1(1);

const another = new Circle(10);

// another.location = { x : 1 };

// for(let key in another){
// 	console.log(key, another[key]);
// }

// let keys = Object.keys(another);
// console.log(keys);

// if('radius' in another){
// 	console.log("Circle has radius");
// }