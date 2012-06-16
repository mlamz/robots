var	mazeRows
,	row
,	maze
,	playerNumber
,	playerCoordinate
,	maxColCount
,	optimist
,	_
,	direction
;

optimist = require('optimist');
_ = require('underscore');
playerNumber = optimist.argv._[3];

mazeRows = getMazeRows(optimist.argv._);
maxColCount = getMaxColCount();
maze = populateMaze();
direction = getDirectionToReturn(maze);
console.log(direction);

function getMazeRows(input){
	var filteredInput = [];
	_.each(input, function(arg){
		var addRow = false
		,	firstChar = arg.toString().slice(0,1);
		
		if(firstChar == "*" || firstChar == "." || firstChar == '_'){
			addRow = true;
		}

		if (addRow){
			filteredInput.push(arg);
		}
	});
	return filteredInput;
}


function getMaxColCount(){
	var count = 0;
	for(row = 0;row < mazeRows.length;row++){
		if (mazeRows[row].length > count){
			count = mazeRows[row].length;
		}
	}
	return count;
}

function populateMaze(){
	var result = {};
	for(rowIndex = 1;row <= mazeRows.length;rowIndex++){
		row = rowIndex - 1;
		for(col = 0;col < maxColCount;col++){
			if(mazeRows[row]){
				var currentValue = mazeRows[row][col]
				,	currentCoordinate = [col,row]
				;
				
				result[currentCoordinate] = currentValue;
				if (currentValue == playerNumber){
					playerCoordinate = currentCoordinate;
				}
				
			}
		}
	}
	return result;
}

function getMazeNode(baseCoordinate, direction, mazeState){
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
	return mazeState[mazeNodeCoordinate];

}


function getDirectionToReturn(mazeState){
	var northValue, southValue, eastValue, westValue;

	northValue = getMazeNode(playerCoordinate, "N", mazeState);
	southValue = getMazeNode(playerCoordinate, "S", mazeState);
	eastValue = getMazeNode(playerCoordinate, "E", mazeState);
	westValue = getMazeNode(playerCoordinate, "W", mazeState);

	if (northValue === "."){
		return "N";
	} else if (southValue === '.'){
		return "S";
	} else if (eastValue === '.'){
		return "E";
	} else if (westValue === '.'){
		return "W";
	}
}


