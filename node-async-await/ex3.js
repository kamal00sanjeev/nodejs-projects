var p = new Promise((resolve, reject) => {
	if(true){
		resolve("This is true");
	}else{
		reject("error occured");
	}
});

console.log(p);

p.then((msg) => {
	console.log("Sucess: "+msg);
}, (errmsg) => {
	console.log("Failure: "+errmsg);
});