var fs = require('fs');

var myobj = {};

fs.readFile("a.txt", function(err, data){
	if(!err){
        myobj['data1'] = data.toString();
        
        fs.readFile("b.txt", function(err, data){
            if(!err){
                myobj['data2'] = data.toString();
                console.log(myobj);
            }
        });
	}
});



