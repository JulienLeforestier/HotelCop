//==> Toutes les pages chambres: JS btn détail show/hide des infos pratiques
function fDetail() {
    var detail = document.getElementById('detailClas');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}
function fDetail1() {
    var detail = document.getElementById('detailClas1');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}
function fDetail2() {
    var detail = document.getElementById('detailClas2');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}

//==> addEventLister pour les liens a href : changer de couleur

var lien1 = document.getElementById('idCCDS');
lien1.addEventListener('mouseover', fmover);
lien1.addEventListener('mouseout', fmout);

function fmover(){
    lien1.style.color = "rgb(150, 200, 255)";
}
function fmout(){
    lien1.style.color = "black";
}
var lien2 = document.getElementById('idCCDS1');
lien2.addEventListener('mouseover', fmover1);
lien2.addEventListener('mouseout', fmout1);

function fmover1(){
    lien2.style.color = "rgb(150, 200, 255)";
}
function fmout1(){
    lien2.style.color = "black";
}
var lien3 = document.getElementById('idCCDS2');
lien3.addEventListener('mouseover', fmover2);
lien3.addEventListener('mouseout', fmout2);

function fmover2(){
    lien3.style.color = "rgb(150, 200, 255)";
}
function fmout2(){
    lien3.style.color = "black";
}
var lien4 = document.getElementById('idCCDS3');
lien4.addEventListener('mouseover', fmover3);
lien4.addEventListener('mouseout', fmout3);

function fmover3(){
    lien4.style.color = "rgb(150, 200, 255)";
}
function fmout3(){
    lien4.style.color = "black";
}

//==> dans chaque page Gamme animation sur les détails zoom
$('.zoom').mouseenter(function(){
    $('.zoom1').animate({fontSize:'1.3em'}, 1000)
   /* $('.zoom1').css({backgroundColor:'rgb(223, 245, 255)', color:'darkblue'}, 'slow')*/
});
$('.zoom').mouseleave(function(){
    $('.zoom1').animate({fontSize:'1em'}, 1000)
    /*$('.zoom1').css({backgroundColor:'#f2f2f2', color:'darkblue'}, 'slow')*/
});
$('.zoom2').mouseenter(function(){
    $('.zoom3').animate({fontSize:'1.3em'}, 1000)
});
$('.zoom2').mouseleave(function(){
    $('.zoom3').animate({fontSize:'1em'}, 1000)
});
$('.zoom4').mouseenter(function(){
    $('.zoom5').animate({fontSize:'1.3em'}, 1000)
});
$('.zoom4').mouseleave(function(){
    $('.zoom5').animate({fontSize:'1em'}, 1000)
});
$('.zoom6').mouseenter(function(){
    $('.zoom7').animate({fontSize:'1.3em'}, 1000)
});
$('.zoom6').mouseleave(function(){
    $('.zoom7').animate({fontSize:'1em'}, 1000)
});
$('.zoom8').mouseenter(function(){
    $('.zoom9').animate({fontSize:'1.3em'}, 1000)
});
$('.zoom8').mouseleave(function(){
    $('.zoom9').animate({fontSize:'1em'}, 1000)
});
$('.zoom10').mouseenter(function(){
    $('.zoom11').animate({fontSize:'1.3em'}, 1000)
});
$('.zoom10').mouseleave(function(){
    $('.zoom11').animate({fontSize:'1em'}, 1000)
});