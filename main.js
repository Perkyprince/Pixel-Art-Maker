$(document).ready(function(){
clearColor();
reset();

});

function createGrid() {
	console.log("executing createGrid")
	
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWidth').val();
	
	canvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');

	cell.click(function() {
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  createGrid();
});



var clearColor = function clearColor() {
  var clearColorButton = $('#clearColor');
  clearColorButton.click(function () {
    console.log("Cell Color has been cleared!");
    var gridCell;
    gridCell = $('td');
    gridCell.removeAttr('bgcolor');
  });
};

var reset = function reset() {
  var resetButton = $('#reset');
  resetButton.click(function () {
  	console.log("Grid has been removed!");
  	var grid = $('tr');
    grid.remove();
  });
};

