/*******************************************/
/****   Page chambers.html  gabrielle ******/
/*******************************************/

//==> chambers.html: jQuery pour zoomer les gammes (classique, confort, deluxe, suite)
$('.zoomClas').mouseenter(function(){
    $('.animClas').animate({width:'680px', height:'466px'}, 2000)
    $('.animClas1').animate({fontSize:'3em'}, 1000)
});
$('.zoomClas').mouseleave(function(){
    $('.animClas').animate({width:'640px', height:'426px'}, 2000)
    $('.animClas1').animate({fontSize:'1.5em'}, 1000)
});


$('.zoomConf').mouseenter(function(){
    $('.animConf').animate({width:'680px', height:'466px'}, 2000)
    $('.animConf1').animate({fontSize:'3em'}, 'slow')
});
$('.zoomConf').mouseleave(function(){
    $('.animConf').animate({width:'640px', height:'426px'}, 1000)
    $('.animConf1').animate({fontSize:'1.5em'}, 'slow')
});

$('.zoomDelu').mouseenter(function(){
    $('.animDelu').animate({width:'680px', height:'466px'}, 2000)
    $('.animDelu1').animate({fontSize:'3em'}, 1000)
});
$('.zoomDelu').mouseleave(function(){
    $('.animDelu').animate({width:'640px', height:'426px'}, 2000)
    $('.animDelu1').animate({fontSize:'1.5em'}, 1000)
});

$('.zoomSuit').mouseenter(function(){
    $('.animSuit').animate({width:'680px', height:'466px'}, 'slow')
    $('.animSuit1').animate({fontSize:'3em'}, 'slow')
});
$('.zoomSuit').mouseleave(function(){
    $('.animSuit').animate({width:'640px', height:'426px'}, 'slow')
    $('.animSuit1').animate({fontSize:'1.5em'}, 'slow')
});

