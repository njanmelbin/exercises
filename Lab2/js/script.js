
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var grid_length=36;
var color =['blue','green','red','orange','purple','gray']


function start(){
        for(i=0;i<grid_length;i++){
            var index = getRandomInt(6);
            var col = color[index];
            var new_cell = $('<div />').css("background-color",color[index]);
            console.log(new_cell);
            new_cell.attr("id",col+'_'+i);
            $('#wrapper').append(new_cell);            
        }    
}

var prev_color = 'white';
var prev;
// function getNumber(html_value){
//     var val = 
// }
$(document).ready(function() { 
    $('div').click(function(event){
        // var color = $( this ).css( "background-color" );
        console.log(event.target)
       // var element = getNumber(event.target);
        var current = event.target.id;
        var v = current.split("_");
        var colr = v[0];
        var box_no = v[1];
        console.log(colr);
        console.log(box_no);
        $( "#result" ).html( "<span style='color:" +
            colr + ";'>" + colr + "</span>." );
        console.log(colr);
        console.log(prev);
        if(colr==prev_color){
            console.log("current and previous colors are equal");
            console.log(current);
            console.log($('#'+current).css('background-color','black'));
            console.log($('#'+prev).css('background-color','black'));
        }
        prev_color=colr;
        prev=current;
    });
 });


