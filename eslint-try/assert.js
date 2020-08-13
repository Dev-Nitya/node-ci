const assert = require('assert');

function mul(a, b){
	return a * b;
}


var result = mul(1, 2);
assert(result === 2, 'one multiplied by two is two');