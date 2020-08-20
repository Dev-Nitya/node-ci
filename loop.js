//node myfile.js

const pendingTimers = [], pendingOSTasks = [], pendingOperations = [];

//new timers, tasks, operations are recorded from myFile running
myfile.runContents();

function shouldContinue(){
	//Check one : Any pending setTimeout, setImmediate, setInterval?
	//Check two : Any pending operating system tasks? (Like maybe a server listening to some given port)
	//Check three : Any pending long running operations? (Like fs module)
	return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

//Entire body executes in one 'tick'
while(shouldContinue()) { //event loop pseudo code
	// 1) Node looks at pending timers and sees if any functions are 
	//    ready to be called. setTimeout and setInterval

	// 2) Node looks at pending OS tasks and pending operations and calls relevant callbacks

	// 3) Pause execution. Continue when ...
	//	  -- a new PendingOSTask is done
	//	  -- a new PendingOperation is done
	//	  -- a timer is about to be complete

	// 4) Look at pendingTimers. Call any setImmediate

	// 5) Handly any 'close' events
}

//exit back to terminal