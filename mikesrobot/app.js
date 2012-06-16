var	mazeRows
,	maze
,	playerNumber
,	playerCoordinate
,	maxColCount
,	optimist
,	_
,	direction
,	director
;

optimist = require('optimist');
_ = require('underscore');
director = require('./director');

playerNumber = optimist.argv._[3];

mazeRows = getMazeRows(optimist.argv._);
maxColCount = getMaxColCount(mazeRows);
maze = populateMaze(maxColCount, mazeRows);
playerCoordinate = getPlayerCoordinate(maze, playerNumber);
direction = director.getDirection(maze, playerCoordinate);
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


function getMaxColCount(mazeRows){
	var count = 0, row;
	for(row = 0;row < mazeRows.length;row++){
		if (mazeRows[row].length > count){
			count = mazeRows[row].length;
		}
	}
	return count;
}

function populateMaze(maximumColumnCount, mazeRows){
	var result = {}
	,	rowIndex;
	for(rowIndex = 0;rowIndex <= mazeRows.length;rowIndex++){
		for(col = 0;col < maximumColumnCount;col++){
			if(mazeRows[rowIndex]){
				var currentValue = mazeRows[rowIndex][col]
				,	currentCoordinate = [col,rowIndex]
				;
				
				result[currentCoordinate] = currentValue;
			}
		}
	}
	return result;
}

function getPlayerCoordinate(maze, playerNumber){
	var coordinate;
	for(coordinate in maze){
		if (maze[coordinate] == playerNumber){
			return [parseInt(coordinate.split(',')[0]),parseInt(coordinate.split(',')[1])];
		}
	}
}


