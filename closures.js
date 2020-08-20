
// var passed = 10;

// let addTo = function () {
// 	var inner = 2;
// 	return passed + inner;
// }

// console.dir(addTo);


for(let i = 0; i<3; i++){
	console.log(i);
}

for(var i = 0; i<3; i++){
	((i) => {
		setTimeout(function(){
			console.log("counter", i);
		}, 1000);
	})(i)
}


{
	//overall scope
	{

	}
	{

	}
	
}