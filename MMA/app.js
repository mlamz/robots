var request = require("request")
,	_ = require("underscore")

,	input = process.argv[5]
,	player = input.substr(0,1)
,	opponent = player === "1" ? "2" : "1"
,	parsedInput = input.split("\\n")
,	x, y
,	rowCount = parsedInput.length - 1
,	row
,	colCount
,	board = []
,	value
,	playerCoordinate
,	opponentCoordinate
,	finishCoordinate;

for(y = 0; y < rowCount; y = y + 1) {
	row = parsedInput[y + 1];
	colCount = row.length;
	for(x = 0; x < colCount; x = x + 1) {
		if (!board[x]) board[x] = [];
		value = row[x];
		board[x][y] = value;
		
		if(value === player) {
			playerCoordinate = [x,y];
			board[x][y] = ".";
		} else if (value === opponent) {
			opponentCoordinate = [x,y];
			board[x][y] = ".";
		} else if (value === "F") {
			finishCoordinate = [x,y];
		}
	}
}



console.log(board);
console.log("Player: " + playerCoordinate);
console.log("Opponent: " + opponentCoordinate);
console.log("Finish: " + finishCoordinate);