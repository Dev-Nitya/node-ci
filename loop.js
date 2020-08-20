//node myfile.js

const pendingTimers = [], pendingOSTasks = [], pendingOperations = [];

myfile.runContents();

function shouldContinue(){
	//Check one : Any pending setTimeout, setImmediate, setInterval?
	//Check two : Any pending operating system tasks? (Like maybe a server listening to some given port)
	//Check three : Any pending long running operations? (Like fs module)
	return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

//Entire body executes in one 'tick'
while(shouldContinue()) { //event loop pseudo code

}

//exit back to terminal