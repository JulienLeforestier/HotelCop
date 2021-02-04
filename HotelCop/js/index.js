$(function(){
    $('#confort_chamber').mouseenter(function(){
        $('#confort_chamber').animate({"opacity":"55%"}, 2000);
    });
    $('#confort_chamber').mouseleave(function(){
        $('#confort_chamber').animate({"opacity":"100%"});
    });
    $('#deluxe_chamber').mouseenter(function(){
        $('#deluxe_chamber').animate({"opacity":"55%"}, 2000);
    });
    $('#deluxe_chamber').mouseleave(function(){
        $('#deluxe_chamber').animate({"opacity":"100%"});
    });
    $('#suite_room').mouseenter(function(){
        $('#suite_room').animate({"opacity":"55%"}, 2000);
    });
    $('#suite_room').mouseleave(function(){
        $('#suite_room').animate({"opacity":"100%"});
    });
});   