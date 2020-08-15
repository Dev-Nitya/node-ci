const need = "Clothes, alot of them!";
console.log(`All I need is ${need}`);

const sum = (arr) => {
	let sum = 0;
	for(const ele of arr){
		sum += ele;
	}
	console.log(`The numbers to add are : ${arr}`);
	console.log(`And their sum is ${sum}`);
}

sum([10, 20, 30, 40, 50, 60, 70]);