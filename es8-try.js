const names = {
	"a" : "Nitya",
	"b" : "test",
	"c" : "new"
};

let namesArr = Object.values(names);
//console.log(namesArr);

let entriesArr = Object.entries(names);
//console.log(entriesArr);

//console.log(Object.values(names));

let newString = 'loading'.padEnd(10, '.');
//console.log(newString);

const obj = {
	name : "nitya",
	get foo() {
		return 25;
	}
}

//console.log(Object.getOwnPropertyDescriptors(obj));

function add(a, b,) {
	return a + b;
}

//console.log(add(140, 43));

function loadExternalContent() {    
	return new Promise((resolve, reject) => 
		{        
			setTimeout(() => {            
				resolve('hello');        
			}, 3000);    
		}
	);
}

async function getContent() {
    const text = await loadExternalContent();    
    console.log(text);
}

console.log('it will call function');
getContent();
console.log('it called function');
