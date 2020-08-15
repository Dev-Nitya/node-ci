let base = 5;
let exp = 2;

console.log(Math.pow(base, exp));
console.log(base**exp);

let baseArr = [ 50, 24, 20 ];

if(baseArr.includes(50)){
	console.log("50 included");
} else {
	console.log("Not included");
}

if(baseArr.includes(50, 1)){
	console.log("50 found at index 1");
} else {
	console.log("50 not found at index 1");
}

if(baseArr.includes(NaN)){
	console.log("Array includes non number");
} else {
	console.log("All elements are numbers");
}

let user1 = {
	name : "Nitya"
},
user2 = {
	name : "Test"
},
user3 = {
	age : 20
};

let users = [ user1, user2 ];

if(users.includes(user1)){
	console.log("Object found in arr");
} else {
	console.log("Object not found in arr");
}