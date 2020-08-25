function mixin(target, ...sources) {
	Object.assign(target, ...sources);
}

const canEat = {
	eat : function() {
		this.hunger--;
		console.log("eating");
	}
};

const canWalk = {
	walk : function() {
		console.log("walking");
	}
};

function Person() {

}

mixin(Person.prototype, canEat, canWalk);

const newPerson = new Person();