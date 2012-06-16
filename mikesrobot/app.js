var	input
,	boardString
,	boardRows
,	row
,	board
,	playerNumber
,	playerCoordinate
,	maxColCount
;

input = process.argv[2];
boardString = input.slice(18);
boardRows = input.split('\n');
board = {};
playerNumber = input.slice(15,16);

maxColCount = 0;
for(row = 0;row < boardRows.length;row++){
	if (boardRows[row].length > maxColCount){
		maxColCount = boardRows[row].length;
	}
}

for(rowIndex = 1;row <= boardRows.length;rowIndex++){
	var row = rowIndex - 1;
	for(col = 0;col < maxColCount;col++){
		if(boardRows[row]){
			var currentValue = boardRows[row][col]
			,	currentCoordinate = [col,row]
			;

			board[currentCoordinate] = currentValue;
			if (currentValue === playerNumber){
				playerCoordinate = currentCoordinate;
			}
		}
	}
}


function getMazeNode(baseCoordinate, direction){
	var mazeNodeCoordinate = [];
	switch(direction){
		case "N":
			mazeNodeCoordinate = [baseCoordinate[0],baseCoordinate[1]-1];
			break;
		case "S":
			mazeNodeCoordinate = [baseCoordinate[0],baseCoordinate[1]+1];
			break;
		case "E":
			mazeNodeCoordinate = [baseCoordinate[0]+1,baseCoordinate[1]];
			break;
		case "W":
			mazeNodeCoordinate = [baseCoordinate[0]-1,baseCoordinate[1]];
			break;

	}
	return board[mazeNodeCoordinate];

}

getDirectionToReturn();
function getDirectionToReturn(){
	var northValue, southValue, eastValue, westValue;

	northValue = getMazeNode(playerCoordinate, "N");
	southValue = getMazeNode(playerCoordinate, "S");
	eastValue = getMazeNode(playerCoordinate, "E");
	westValue = getMazeNode(playerCoordinate, "W");

	if (northValue === "."){
		console.log("N");
	} else if (southValue === '.'){
		console.log("S");
	} else if (eastValue === '.'){
		console.log("E");
	} else if (westValue === '.'){
		console.log("W");
	}
}


