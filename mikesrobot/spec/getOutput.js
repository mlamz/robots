var child_process =	require('child_process')
;

function getOutput(maze, callback){
		var output
		,	program
		,	mazeArguments
		;
		output = '';

		mazeArguments = ['You', 'are', 'player'];
		mazeArguments.push(maze.slice(15,16));
		var mazeRows = maze.split('\n');
		for(var i = 0;i<mazeRows.length;i++){
			mazeArguments.push(mazeRows[i]);
		}

		var cmd = "node app.js " + mazeArguments.join(' ');
		program = child_process.exec(cmd);

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