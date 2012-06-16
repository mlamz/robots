var should = require('chai').should()
, child_process =	require('child_process')
, path = require("path")
,	process_path = path.join(__dirname, "../app.js")
, maze_string = ''
,	fs = require('fs');

describe("maze", function(){

	/*given a maze of 	You are player 1
						***
						*1*
						*.*
						*F*
						*2*
	*/
	it("should move south", function(done){
		getOutput(
			"You are player 1\n***\n*1*\n*.*\n*F*\n*2*",
			function(result){
				result.should.equal("S\n");
				done();
			});
	});

	/*given a maze of 	You are player 1
						**
						*1.F
						**
	*/
	it("should move east", function(done){
		getOutput(
			"You are player 1\n**\n*1.F\n**\n",
			function(result){
				result.should.equal("E\n");
				done();
			});
	});

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
});