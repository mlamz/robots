var request = require("request")
,	_ = require("underscore")

,	input = process.argv[5]
,	player = input.substr(0,1)
,	opponent = player === "1" ? "2" : "1"
,	board = input.split("\\n")
,	x, y
,	boardLength = board.length
,	row
,	rowLength
,	boardArray = []
,	value
,	playerCoordinate
,	opponentCoordinate
,	finishCoordinate;

for(y = 0; y < boardLength - 1; y = y + 1) {
	row = board[y + 1];
	rowLength = row.length;
	for(x = 0; x < rowLength; x = x + 1) {
		if (!boardArray[x]) boardArray[x] = [];
		value = row[x];
		boardArray[x][y] = value;
		
		if(value === player) {
			playerCoordinate = [x,y];
			boardArray[x][y] = ".";
		} else if (value === opponent) {
			opponentCoordinate = [x,y];
			boardArray[x][y] = ".";
		} else if (value === "F") {
			finishCoordinate = [x,y];
		}
	}
}

console.log(boardArray);
console.log("Player: " + playerCoordinate);
console.log("Opponent: " + opponentCoordinate);
console.log("Finish: " + finishCoordinate);