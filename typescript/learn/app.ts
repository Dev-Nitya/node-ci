
// const person: {
// 	name: String;
// 	age: Number
// } = {
// 	name : 'Nitya',
// 	age : 25
// };

const person = {
	name : 'Nitya',
	age : 25,
	hobbies : [ 'cooking', 'reading' ]
};

let activities : string[];
activities = ['sports'];

for(const hobby of person.hobbies){
	console.log(hobby);
}