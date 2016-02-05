

$(document).ready(function(){
      for(var x=0; x < 256; x++) {
            $( '#container' ).append("<div></div>");

      }

      $('div div').on('mouseenter', function(){
            $(this).addClass('highlight');
      })


});

function newGrid(){
		var gridSize = prompt('Enter new grid size');
		$('#container').empty();

		for(var i=0; i < gridSize * gridSize; i++){
			$('#container').append('<div></div>');
		}

		var newWH = (600 / gridSize);

		$('div div').css('width', newWH);
		$('div div').css('height', newWH);



		$('div div').on('mouseenter', function(){
			var r = Math.floor((Math.random() * 254) + 1);
			var g = Math.floor((Math.random() * 254) + 1);
			var b = Math.floor((Math.random() * 254) + 1);
			$(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
                  // $(this).addClass('highlight');

		});

	}
// var grid = document.createElement('div');
// grid.className = "grid-squares";
//
// document.getElementById('grid').appendChild(grid);
