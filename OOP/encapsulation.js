//procedural approach
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate){
	return baseSalary + (overTime * rate);
}

//oop approach
let employee = {
	baseSalary : 50000,
	overTime : 10,
	rate : 20,
	getWage: function() {
		return this.baseSalary + (this.overTime * this.rate);
	}
};

employee.getWage();