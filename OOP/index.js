
//Factory function
function createCircle(radius) {
	return {
		radius,
		draw : function() {
			console.log('draw');
		}
	};
}

circle.draw();