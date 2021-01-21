/*******************************************/
/****   Page chambers.html  gabrielle ******/
/*******************************************/

//==> chambers.html: jQuery pour zoomer les gammes (classique, confort, deluxe, suite)
$('.zoomClas').mouseenter(function(){
    $('.animClas').animate({width:'680px', height:'466px'}, 'slow')
    $('.animClas1').animate({fontSize:'3em'}, 'slow')
});
$('.zoomClas').mouseleave(function(){
    $('.animClas').animate({width:'640px', height:'426px'}, 'slow')
    $('.animClas1').animate({fontSize:'1.5em'}, 'slow')
});


$('.zoomConf').mouseenter(function(){
    $('.animConf').animate({width:'680px', height:'466px'}, 'slow')
    $('.animConf1').animate({fontSize:'3em'}, 'slow')
});
$('.zoomConf').mouseleave(function(){
    $('.animConf').animate({width:'640px', height:'426px'}, 'slow')
    $('.animConf1').animate({fontSize:'1.5em'}, 'slow')
});

$('.zoomDelu').mouseenter(function(){
    $('.animDelu').animate({width:'680px', height:'466px'}, 'slow')
    $('.animDelu1').animate({fontSize:'3em'}, 'slow')
});
$('.zoomDelu').mouseleave(function(){
    $('.animDelu').animate({width:'640px', height:'426px'}, 'slow')
    $('.animDelu1').animate({fontSize:'1.5em'}, 'slow')
});

$('.zoomSuit').mouseenter(function(){
    $('.animSuit').animate({width:'680px', height:'466px'}, 'slow')
    $('.animSuit1').animate({fontSize:'3em'}, 'slow')
});
$('.zoomSuit').mouseleave(function(){
    $('.animSuit').animate({width:'640px', height:'426px'}, 'slow')
    $('.animSuit1').animate({fontSize:'1.5em'}, 'slow')
});

