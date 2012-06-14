var request = require("request")
,	_ = require("underscore")

,	input = process.argv[5]
,	player = input.substr(0,1)
,	board = input.split("\\n")
,	x, y
,	boardLength = board.length
,	row
,	rowLength
,	boardArray = [];

console.log("you are player " + player);
console.log("boardLength = " + boardLength);

for(y = 1; y < boardLength; y = y + 1) {
	row = board[y];
	console.log("row " + y + " = " + row);
	rowLength = board[y].length;
	for(x = 0; x < rowLength; x = x + 1) {
		console.log("row[x] = " + row[x]);
		if (!boardArray[x]) boardArray[x] = [];
		boardArray[x][y - 1] = row[x];
	}
}

console.log(boardArray);