$( function() {
    $( "#Black_Pawn-1" ).draggable();
} );

var image = document.getElementById("Black_Pawn-1");
image.onclick = function(e) {
    var a= $("#Black_Pawn-1").clone();
    $("#Black_Pawn-1").remove();
    S("")
}