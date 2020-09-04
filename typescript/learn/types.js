"use strict";
// const person: {
// 	name: String;
// 	age: Number
// } = {
// 	name : 'Nitya',
// 	age : 25
// };
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
})(Role || (Role = {}));
var person = {
    name: 'Nitya',
    age: 25,
    hobbies: ['cooking', 'reading'],
    role: [2, 'author'] //tuple
};
var activities;
activities = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
