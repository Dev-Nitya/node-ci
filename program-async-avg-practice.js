//WAP to print average of n numbers asyncronously

//sync
let sum = 0, avg = 0, n = 20;

let before = process.hrtime();
console.log("Time taken", before);

for(let i = 1; i <= n; i++){
	sum = sum + i;
}

avg = sum/n;

let before = process.hrtime();
console.log("Time taken", after);

console.log(`Average of ${n} numbers is ${avg}`);

//sync end

//async


function asyncAvg(n, cb){
	let sum = 0;

	function helo(i, countercb){
		sum = sum + i;
		if(i == n){
			countercb(sum);
			return;
		}
		setImmediate(help.bind(null, i + 1, countercb));
	}

	help(1, function(sum){
		var avg = sum / n;
		cb(avg);
	})
}


asyncAvg(n, function(avg){
	console.log("Avergae is ",avg);
});

//async end
