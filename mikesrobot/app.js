var	mazeRows
,	row
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
maze = populateMaze(maxColCount);
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
	var count = 0;
	for(row = 0;row < mazeRows.length;row++){
		if (mazeRows[row].length > count){
			count = mazeRows[row].length;
		}
	}
	return count;
}

function populateMaze(maximumColumnCount){
	var result = {};
	for(rowIndex = 1;row <= mazeRows.length;rowIndex++){
		row = rowIndex - 1;
		for(col = 0;col < maximumColumnCount;col++){
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


