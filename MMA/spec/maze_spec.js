var should = require('chai').should()
, child_process =	require('child_process')
, path = require("path")
,	process_path = path.join(__dirname, "../app.js")
, maze_string = '1\\n*******\\n*.1.***\\n*...2**\\n**F...*\\n*******'
, fs = require('fs');

describe("maze", function(){

	it("should return character for direction", function(done){
		var output = '', program = child_process.spawn("node", [process_path, maze_string]);

		program.stdout.on('data', function(data){
			output += data.toString();
		});

		program.stdout.on('end', function(data){
			output.should.equal('S\n');
			done();
		});

		program.stderr.on('data', function(data){
			console.log("STDERR", data.toString());
		});
	});
});

/*
maze string is:

1
*******
*.1.***
*...2**
**F...*
*******

command to run is:
node app.js "1\\n*******\\n*.1.***\\n*...2**\\n**F...*\\n*******"

*/

