var child_process =	require('child_process')
, 	path = require("path")
,	process_path = path.join(__dirname, "../app.js")
;

function getOutput(maze, callback){
		var output = '', program = child_process.spawn("node", [process_path, maze]);

		program.stdout.on('data', function(data){
			output += data.toString();
		});

		program.stdout.on('end', function(data){
			callback(output);
		});

		program.stderr.on('data', function(data){
			console.log("STDERR", data.toString());
		});
}

module.exports = getOutput;