var request = require("request")
,	_ = require("underscore")

,	input = process.argv[5]
,	player = input.substr(0,1)
,	board = input.split("\\n")
,	x, y
,	boardLength = board.length
,	row
,	rowLength
,	boardArray = []
,	value
,	playerCoordinate
,	finishCoordinate;

for(y = 1; y < boardLength; y = y + 1) {
	row = board[y];
	rowLength = board[y].length;
	for(x = 0; x < rowLength; x = x + 1) {
		if (!boardArray[x]) boardArray[x] = [];
		value = row[x];
		boardArray[x][y - 1] = value;
		
		if(value === player) {
			playerCoordinate = [x,y];
		} else if (value === "F") {
			finishCoordinate = [x,y];
		}
	}
}

console.log(boardArray);