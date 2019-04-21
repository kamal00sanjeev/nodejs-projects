
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

async function main(){
    myobj['data1'] = await doA();
    console.log(myobj);
    console.log('---------');   
	myobj['data2'] = await doB();
	console.log(myobj);
}

main();