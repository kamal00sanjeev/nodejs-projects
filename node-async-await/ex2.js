var delay = (seconds) => new Promise((resolve, reject) => {
	setTimeout(resolve, seconds * 1000);
});

delay(1)
	.then(() => console.log("the delay has ended"))
	.then(() => 42)
    .then((num) => console.log(`hello: ${num}`))
    .then(() => console.log("This is end"));

console.log("end first tick");