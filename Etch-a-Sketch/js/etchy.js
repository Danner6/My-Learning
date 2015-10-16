etchySize = 64;

$(document).ready(function(){
      for(x=0; x<etchySize;x++) {
            var gridSquares = $( "<div class='grid-squares'/></div>" )
            $( gridSquares ).appendTo("#grid");

      }


    $('.grid-squares').on('mouseenter', function(){
          $(this).addClass('highlight');
   })


});


// var grid = document.createElement('div');
// grid.className = "grid-squares";
//
// document.getElementById('grid').appendChild(grid);
