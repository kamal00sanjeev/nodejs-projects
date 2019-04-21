'use strict'

var delay = (seconds, callback) => {
	setTimeout(callback, seconds * 1000);
};

delay(2, () => {
	console.log("delay has ended");
});

console.log("end first tick");