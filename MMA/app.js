var request = require("request")
,	_ = require("underscore")
,	wait = true;

console.log("length", process.argv.length);
_.each(process.argv, function(arg){
	console.log(arg);
});
