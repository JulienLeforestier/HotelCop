/*******************************************/
/****   Page chambers.html  gabrielle ******/
/*******************************************/

//==> chambers.html: jQuery pour zoomer les gammes (classique, confort, deluxe, suite)
$('.zoomClas').mouseenter(function(){
    $('.animClas').animate({width:'100%', height:'100%'}, 2500)
    //$('.animClas1').animate({fontSize:'3em'}, 1500)
});
$('.zoomClas').mouseleave(function(){
    $('.animClas').animate({width:'95%', height:'95%'}, 900)
    //$('.animClas1').animate({fontSize:'1.5em'}, 1500)
});


$('.zoomConf').mouseenter(function(){
    $('.animConf').animate({width:'100%', height:'100%'}, 2500)
    //$('.animConf1').animate({fontSize:'3em'}, 1500)
});
$('.zoomConf').mouseleave(function(){
    $('.animConf').animate({width:'95%', height:'95%'}, 900)
    //$('.animConf1').animate({fontSize:'1.5em'}, 1500)
});

$('.zoomDelu').mouseenter(function(){
    $('.animDelu').animate({width:'100%', height:'100%'}, 2500)
    //$('.animDelu1').animate({fontSize:'3em'}, 1500)
});
$('.zoomDelu').mouseleave(function(){
    $('.animDelu').animate({width:'95%', height:'95%'}, 900)
    //$('.animDelu1').animate({fontSize:'1.5em'}, 1000)
});

$('.zoomSuit').mouseenter(function(){
    $('.animSuit').animate({width:'100%', height:'100%'}, 2500)
    //$('.animSuit1').animate({fontSize:'3em'}, 1500)
});
$('.zoomSuit').mouseleave(function(){
    $('.animSuit').animate({width:'95%', height:'95%'}, 900)
    //$('.animSuit1').animate({fontSize:'1.5em'}, 1500)
});

