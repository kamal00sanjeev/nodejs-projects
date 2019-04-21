var fs = require('fs');

var myobj = {};

function doA(){
	return new Promise((resolve, reject) => {
		fs.readFile("a.txt", function(err, data){
			if(!err){
				resolve(data.toString());
			}
		});
	});
}

function doB(){
	return new Promise((resolve, reject) => {
		fs.readFile("b.txt", function(err, data){
			if(!err){
				resolve(data.toString());
			}
		});
	});
}

doA().then((data) => {
	myobj['data1'] = data;
	doB().then((data2) => {
		myobj['data2'] = data2;
		console.log(myobj);
	});
});


