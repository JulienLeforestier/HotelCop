//datepicker from to
var dateFormat = "mm/dd/yy",
    from = $("#inputDateFrom")
        .datepicker({
            minDate: 0,
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
            closeText: 'Fermer',
            prevText: 'Précédent',
            nextText: 'Suivant',
            dateFormat: "dd/mm/yy",
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            weekHeader: 'Sem.',
            firstDay: 1
        })
        .on("change", function () {
            to.datepicker("option", "minDate", getDate(this));
        }),
    to = $("#inputDateTo").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        dateFormat: "dd/mm/yy",
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekHeader: 'Sem.',
        firstDay: 1
    })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

function getDate(element) {
    var date;
    try {
        var parts = element.value.split("/");
        var dt = parseInt(parts[1]) + "/" + parseInt(parts[0]) + "/" + parseInt(parts[2]);
        date = $.datepicker.parseDate(dateFormat, dt);
    } catch (error) {
        date = null;
    }
    return date;
}

//fonction d'impression onClick sur l'id print = ('Imprimer la page' dans le footer)
document.getElementById('print').addEventListener('click', function () { window.print(); });


/*******************************************/
/****   Page chambers.html  gabrielle ******/
/*******************************************/

//==> chambers.html: jQuery pour zoomer les gammes (classique, confort, deluxe, suite)
$('.zoomClas').mouseover(function(){
    $('.animClas').animate({fontSize:'3em'}, 'slow')
});
$('.zoomClas').mouseout(function(){
    $('.animClas').animate({fontSize:'1.5em'}, 'slow')
});
$('.zoomConf').mouseover(function(){
    $('.animConf').animate({fontSize:'3em'}, 'slow')
});
$('.zoomConf').mouseout(function(){
    $('.animConf').animate({fontSize:'1.5em'}, 'slow')
});
$('.zoomDelu').mouseover(function(){
    $('.animDelu').animate({fontSize:'3em'}, 'slow')
});
$('.zoomDelu').mouseout(function(){
    $('.animDelu').animate({fontSize:'1.5em'}, 'slow')
});
$('.zoomSuit').mouseover(function(){
    $('.animSuit').animate({fontSize:'3em'}, 'slow')
});
$('.zoomSuit').mouseout(function(){
    $('.animSuit').animate({fontSize:'1.5em'}, 'slow')
});

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
$('.zoom2').mouseover(function(){
    $('.zoom2').animate({fontSize:'1.2em'}, {color:'blue'}, 'slow')
});
$('.zoom2').mouseout(function(){
    $('.zoom2').animate({fontSize:'1em'}, 'slow')
});




