var should = require('chai').should()
,	getOutput = require('./getOutput')
;

describe("maze", function(){

	/*given a maze of 	You are player 1
						***
						*1*
						*.*
	*/
	it("should move south", function(done){
		getOutput(
			"You are player 1\n'***'\n'*1*'\n'*.*'",
			function(result){
				result.should.equal("S");
				done();
			}
		);
	});

	/*given a maze of 	You are player 1
						**
						*1.
						**
	*/
	it("should move east", function(done){
		getOutput(
			"You are player 1\n'**'\n'*1.'\n'**'\n",
			function(result){
				result.should.equal("E");
				done();
			}
		);
	});

	/*given a maze of 	You are player 1
						***
						*.1
	*/
	it("should move west", function(done){
		getOutput(
			"You are player 1\n'***'\n'*.1'",
			function(result){
				result.should.equal("W");
				done();
			}
		);
	});

	/*given a maze of 	You are player 1
						*.*
						*1*
	*/
	it("should move north", function(done){
		getOutput(
			"You are player 1\n'*.*'\n'*1*'",
			function(result){
				result.should.equal("N");
				done();
			}
		);
	});
});