
//white boxes
var brownboxes=['a8','c8','e8','g8','b7','d7','f7','h7','a6','c6','e6','g6','b5','d5','f5','h5','a4','c4','e4','g4','b3','d3','f3','h3','a2','c2','e2','g2','b1','d1','f1','h1'];


//Black Boxes
var blackboxes=['b8','d8','f8','h8','a7','c7','e7','g7','b6','d6','f6','h6','a5','c5','e5','g5','b4','d4','f4','h4','a3','c3','e3','g3','b2','d2','f2','h2','a1','c1','e1','g1'];


//Balck pieces
var blackitto=['RB1','KNB1','BB1','KB','QB','BB2','KB2','RB2','PB1','PB2','PB3','PB4','PB5','PB6','PB7','PB8'];


//White pieces
var whiteitto=['RR1','KNR1','BR1','KR','QR','BR2','KNR2','RR2','PR1','PR2','PR3','PR4','PR5','PR6','PR7','PR8'];

//Boxes
function refreshBoxes() {
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            for(var k=0;k<brownboxes.length;k++){
                if(col[i]+row[j] === brownboxes[k]){
                    $("#"+col[i]+row[j]).removeClass('edgebox');
                    $("#"+col[i]+row[j]).removeClass('ittainnatana');
                    $("#"+col[i]+row[j]).addClass('whiteBox');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
            for(var k=0;k<blackboxes.length;k++){
                if(col[i]+row[j] === blackboxes[k]){
                    $("#"+col[i]+row[j]).removeClass('edgebox');
                    $("#"+col[i]+row[j]).removeClass('ittainnatana');
                    $("#"+col[i]+row[j]).addClass('whiteBox');
                    $("#"+col[i]+row[j]).attr('ondrop','');
                    $("#"+col[i]+row[j]).attr('ondragover','');
                }
            }
        }
    }
}
// drop chess icon
function allowDrop(ev,e) {
    if($("#"+e.id).find("img").length > 0){
        $("#"+e.id).children("img").remove();
    }
    ev.preventDefault();
}

//drag icon
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//drop function for dragging icon
function drop(ev,e) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    refreshBoxes();
}
//Column Letters
var col=['a','b','c','d','e','f','g','h'];
//Row Numbers
var row=[1,2,3,4,5,6,7,8];

//Pawn STRUCTURE
var pawnStack=[1,2,3,4,5,6,7,8,9,0];

//click Pawn
function clickPawn(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                var path=(col[i])+row[j-1];
                //get the path
                var pathId="#"+path;
                //path combine with #
                $(pathId).addClass('ittainnatana');
                $(pathId).attr('ondrop','drop(event,this)');
                $(pathId).attr('ondragover','allowDrop(event,this)');

            }
        }
    }
}
function clickRedPawn(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                var path=(col[i])+row[j+1];
                //get the path
                var pathId="#"+path;
                //path combine with #
                $(pathId).addClass('ittainnatana');
                $(pathId).attr('ondrop','drop(event,this)');
                $(pathId).attr('ondragover','allowDrop(event,this)');

            }
        }
    }
}
//Black Rook
function clickBlackRook(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if(parentId === col[i]+row[j]){
                //bottom select
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i]+row[j-k]).addClass('edgebox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right select
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i+k]+row[j]).addClass('edgebox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left select
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i-k]+row[j]).addClass('edgebox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top select

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i]+row[j+k]).addClass('edgebox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}
//Red Rook
function clickRedRook(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i]+row[j-k]).addClass('edgebox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i+k]+row[j]).addClass('edgebox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }

                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i-k]+row[j]).addClass('edgebox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top selecter

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i]+row[j+k]).addClass('edgebox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }

    }
}

//Black-Bishops
function clickBlackBishop(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('edgebox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('edgebox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('edgebox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('edgebox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}
//white-Bishops
function clickRedBishop(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i+k]+row[j+k]).addClass('edgebox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i-k]+row[j-k]).addClass('edgebox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){

                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i+k]+row[j-k]).addClass('edgebox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                $("#"+col[i-k]+row[j+k]).addClass('edgebox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                break;
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
            }
        }
    }
}

//white-Knight
function clickRedKnight(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i+2]+row[j+1]).addClass('edgebox');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    //Right Top
                    $("#"+col[i+2]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i+1]+row[j+2]).addClass('edgebox');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i+2]+row[j-1]).addClass('edgebox');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    //Right Bottom
                    $("#"+col[i+2]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i+1]+row[j-2]).addClass('edgebox');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i-2]+row[j+1]).addClass('edgebox');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    //Left Bottom
                    $("#"+col[i-2]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i-1]+row[j+2]).addClass('edgebox');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i-2]+row[j-1]).addClass('edgebox');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    //left Top
                    $("#"+col[i-2]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i-1]+row[j-2]).addClass('edgebox');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}

//Black-Knight
function clickBlackKnight(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i+2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+2]+row[j+1]).addClass('edgebox');
                            $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Right Top
                    $("#"+col[i+2]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i+2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+1]+row[j+2]).addClass('edgebox');
                            $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+2]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+2]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+2]+row[j-1]).addClass('edgebox');
                            $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Right Bottom
                    $("#"+col[i+2]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i+2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+1]+row[j-2]).addClass('edgebox');
                            $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-2]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-2]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i-2]+row[j+1]).addClass('edgebox');
                            $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Left Bottom
                    $("#"+col[i-2]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i-2]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i-1]+row[j+2]).addClass('edgebox');
                            $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+2]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j+2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+2]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-2]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-2]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){

                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            $("#"+col[i-2]+row[j-1]).addClass('edgebox');
                            $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //left Top
                    $("#"+col[i-2]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i-2]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-2]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }



                if($("#"+col[i-1]+row[j-2]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-2]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i-1]+row[j-2]).addClass('edgebox');
                            $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-2]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j-2]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-2]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}

//Black-King
function clickBlackKing(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i]+row[j+1]).addClass('edgebox');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //top
                    $("#"+col[i]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+1]+row[j+1]).addClass('edgebox');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i-1]+row[j+1]).addClass('edgebox');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i]+row[j-1]).addClass('edgebox');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //bottom
                    $("#"+col[i]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+1]+row[j-1]).addClass('edgebox');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i-1]+row[j-1]).addClass('edgebox');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i-1]+row[j]).addClass('edgebox');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //right
                    $("#"+col[i-1]+row[j]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            break;
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            $("#"+col[i+1]+row[j]).addClass('edgebox');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }

                }else{
                    //Left
                    $("#"+col[i+1]+row[j]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}

//white-King
function clickRedKing(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){

                if($("#"+col[i]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i]+row[j+1]).addClass('edgebox');
                            $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;
                        }
                    }

                }else{
                    //top
                    $("#"+col[i]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i+1]+row[j+1]).addClass('edgebox');
                            $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            break;
                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j+1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j+1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i-1]+row[j+1]).addClass('edgebox');
                            $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            break;
                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j+1]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j+1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j+1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){
                            $("#"+col[i]+row[j-1]).addClass('edgebox');
                            $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;

                        }
                    }

                }else{
                    //bottom
                    $("#"+col[i]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i+1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){

                            $("#"+col[i+1]+row[j-1]).addClass('edgebox');
                            $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i+1]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }

                if($("#"+col[i-1]+row[j-1]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j-1]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){

                            $("#"+col[i-1]+row[j-1]).addClass('edgebox');
                            $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;

                        }
                    }

                }else{
                    $("#"+col[i-1]+row[j-1]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j-1]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j-1]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i-1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i-1]+row[j]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){

                            $("#"+col[i-1]+row[j]).addClass('edgebox');
                            $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){
                            break;

                        }
                    }

                }else{
                    //right
                    $("#"+col[i-1]+row[j]).addClass('ittainnatana');
                    $("#"+col[i-1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


                if($("#"+col[i+1]+row[j]).find("img").length > 0){
                    var chil=$("#"+col[i+1]+row[j]).children("img");
                    for(var b=0;b<blackitto.length;b++){
                        if($(chil).attr('id')===blackitto[b]){

                            $("#"+col[i+1]+row[j]).addClass('edgebox');
                            $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                            $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                        }
                    }
                    for(var r=0;r<whiteitto.length;r++){
                        if($(chil).attr('id')===whiteitto[r]){

                            break;
                        }
                    }

                }else{
                    //Left
                    $("#"+col[i+1]+row[j]).addClass('ittainnatana');
                    $("#"+col[i+1]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+1]+row[j]).attr('ondragover','allowDrop(event,this)');
                }


            }
        }
    }
}


//Black-Queen
function clickBlackQueen(e) {
    refreshBoxes();
    var parentId=e.parentNode.id;
    for(var i=0;i<col.length;i++){
        for(var j=0;j<row.length;j++){
            if(parentId === col[i]+row[j]){
                //bottom selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i]+row[j-k]).addClass('edgebox');
                                $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //right selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i+k]+row[j]).addClass('edgebox');
                                $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //left selecter
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i-k]+row[j]).addClass('edgebox');
                                $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j]).attr('ondragover','allowDrop(event,this)');

                }
                //top selecter

                for(var k=1;k<=8;k++){
                    if($("#"+col[i]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i]+row[j+k]).addClass('edgebox');
                                $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i+k]+row[j+k]).addClass('edgebox');
                                $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                //Left Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i-k]+row[j-k]).addClass('edgebox');
                                $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Bottom
                for(var k=1;k<=8;k++){
                    if($("#"+col[i+k]+row[j-k]).find("img").length > 0){
                        var chil=$("#"+col[i+k]+row[j-k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i+k]+row[j-k]).addClass('edgebox');
                                $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i+k]+row[j-k]).addClass('ittainnatana');
                    $("#"+col[i+k]+row[j-k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i+k]+row[j-k]).attr('ondragover','allowDrop(event,this)');

                }
                //Right Top
                for(var k=1;k<=8;k++){
                    if($("#"+col[i-k]+row[j+k]).find("img").length > 0){
                        var chil=$("#"+col[i-k]+row[j+k]).children("img");
                        for(var b=0;b<blackitto.length;b++){
                            if($(chil).attr('id')===blackitto[b]){
                                break;
                            }
                        }
                        for(var r=0;r<whiteitto.length;r++){
                            if($(chil).attr('id')===whiteitto[r]){
                                $("#"+col[i-k]+row[j+k]).addClass('edgebox');
                                $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                                $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');
                            }
                        }
                        break;
                    }
                    $("#"+col[i-k]+row[j+k]).addClass('ittainnatana');
                    $("#"+col[i-k]+row[j+k]).attr('ondrop','drop(event,this)');
                    $("#"+col[i-k]+row[j+k]).attr('ondragover','allowDrop(event,this)');

                }
                return;
            }
        }
    }
}
//Red-Queen
function clickRedQueen(e) {
    refreshBoxes();
    var parentId = e.parentNode.id;
    for (var i = 0; i < col.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if (parentId === col[i] + row[j]) {
                //bottom selecter
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i] + row[j - k]).find("img").length > 0) {
                        var chil = $("#" + col[i] + row[j - k]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i] + row[j - k]).addClass('edgebox');
                                $("#" + col[i] + row[j - k]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i] + row[j - k]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i] + row[j - k]).addClass('ittainnatana');
                    $("#" + col[i] + row[j - k]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i] + row[j - k]).attr('ondragover', 'allowDrop(event,this)');

                }
                //right selecter
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i + k] + row[j]).find("img").length > 0) {
                        var chil = $("#" + col[i + k] + row[j]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i + k] + row[j]).addClass('edgebox');
                                $("#" + col[i + k] + row[j]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i + k] + row[j]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i + k] + row[j]).addClass('ittainnatana');
                    $("#" + col[i + k] + row[j]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i + k] + row[j]).attr('ondragover', 'allowDrop(event,this)');

                }
                //left selecter
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i - k] + row[j]).find("img").length > 0) {
                        var chil = $("#" + col[i - k] + row[j]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i - k] + row[j]).addClass('edgebox');
                                $("#" + col[i - k] + row[j]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i - k] + row[j]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i - k] + row[j]).addClass('ittainnatana');
                    $("#" + col[i - k] + row[j]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i - k] + row[j]).attr('ondragover', 'allowDrop(event,this)');

                }
                //top selecter

                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i] + row[j + k]).find("img").length > 0) {
                        var chil = $("#" + col[i] + row[j + k]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i] + row[j + k]).addClass('edgebox');
                                $("#" + col[i] + row[j + k]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i] + row[j + k]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i] + row[j + k]).addClass('ittainnatana');
                    $("#" + col[i] + row[j + k]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i] + row[j + k]).attr('ondragover', 'allowDrop(event,this)');

                }
                //Right Top
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i + k] + row[j + k]).find("img").length > 0) {
                        var chil = $("#" + col[i + k] + row[j + k]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i + k] + row[j + k]).addClass('edgebox');
                                $("#" + col[i + k] + row[j + k]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i + k] + row[j + k]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i + k] + row[j + k]).addClass('ittainnatana');
                    $("#" + col[i + k] + row[j + k]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i + k] + row[j + k]).attr('ondragover', 'allowDrop(event,this)');

                }
                //Left Bottom
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i - k] + row[j - k]).find("img").length > 0) {
                        var chil = $("#" + col[i - k] + row[j - k]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i - k] + row[j - k]).addClass('edgebox');
                                $("#" + col[i - k] + row[j - k]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i - k] + row[j - k]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i - k] + row[j - k]).addClass('ittainnatana');
                    $("#" + col[i - k] + row[j - k]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i - k] + row[j - k]).attr('ondragover', 'allowDrop(event,this)');

                }
                //Right Bottom
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i + k] + row[j - k]).find("img").length > 0) {
                        var chil = $("#" + col[i + k] + row[j - k]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i + k] + row[j - k]).addClass('edgebox');
                                $("#" + col[i + k] + row[j - k]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i + k] + row[j - k]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i + k] + row[j - k]).addClass('ittainnatana');
                    $("#" + col[i + k] + row[j - k]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i + k] + row[j - k]).attr('ondragover', 'allowDrop(event,this)');

                }
                //Right Top
                for (var k = 1; k <= 8; k++) {
                    if ($("#" + col[i - k] + row[j + k]).find("img").length > 0) {
                        var chil = $("#" + col[i - k] + row[j + k]).children("img");
                        for (var b = 0; b < blackitto.length; b++) {
                            if ($(chil).attr('id') === blackitto[b]) {
                                $("#" + col[i - k] + row[j + k]).addClass('edgebox');
                                $("#" + col[i - k] + row[j + k]).attr('ondrop', 'drop(event,this)');
                                $("#" + col[i - k] + row[j + k]).attr('ondragover', 'allowDrop(event,this)');
                            }
                        }
                        for (var r = 0; r < whiteitto.length; r++) {
                            if ($(chil).attr('id') === whiteitto[r]) {
                                break;
                            }
                        }
                        break;
                    }
                    $("#" + col[i - k] + row[j + k]).addClass('ittainnatana');
                    $("#" + col[i - k] + row[j + k]).attr('ondrop', 'drop(event,this)');
                    $("#" + col[i - k] + row[j + k]).attr('ondragover', 'allowDrop(event,this)');

                }
                return;
            }
        }
    }
}
