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
			playerCoordinate = {x: x, y: y};
			board[x][y] = ".";
		} else if (value === opponent) {
			opponentCoordinate = {x: x, y: y};
			board[x][y] = ".";
		} else if (value === "F") {
			finishCoordinate = {x: x, y: y};
			board[x][y] = ".";
		}
	}
}

console.log("RowCount", rowCount);
console.log("colCount", colCount);
console.log("Player", playerCoordinate.x, playerCoordinate.y);
console.log("Opponent", opponentCoordinate.x, opponentCoordinate.y);
console.log("Finish", finishCoordinate.x, finishCoordinate.y);

console.log(board);

function scoreTile(currentScore, coordinates) {
	var tile;
	
	if(coordinates.x < 0 || coordinates.y < 0 || coordinates.x >= colCount || coordinates.y >= rowCount) return;
	
	tile = board[coordinates.x][coordinates.y];
	
	if(tile === "." || +tile > currentScore) {
		board[coordinates.x][coordinates.y] = currentScore;
		scoreTile(currentScore + 1, {x: coordinates.x, y: coordinates.y + 1});
		scoreTile(currentScore + 1, {x: coordinates.x, y: coordinates.y - 1});
		scoreTile(currentScore + 1, {x: coordinates.x + 1, y: coordinates.y});
		scoreTile(currentScore + 1, {x: coordinates.x - 1, y: coordinates.y});
	}
}

scoreTile(0, finishCoordinate);



console.log(board);
