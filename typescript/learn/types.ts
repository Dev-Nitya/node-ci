
// const person: {
// 	name: String;
// 	age: Number
// } = {
// 	name : 'Nitya',
// 	age : 25
// };



enum Role {
	USER, ADMIN, SUPER_ADMIN
}

const person = {
	name : 'Nitya',
	age : 25,
	hobbies : [ 'cooking', 'reading' ],
	role : [ 2, 'author' ] //tuple
};

let activities : string[];
activities = ['sports'];

for(const hobby of person.hobbies){
	console.log(hobby);
}