//datepicker from to
var dateFormat = "mm/dd/yy",
    from = $("#inputDateFrom")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
            closeText: 'Fermer',
            prevText: 'Précédent',
            nextText: 'Suivant',
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
        date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
        date = null;
    }
    return date;
}

//fonction d'impression onClick sur l'id print = ('Imprimer la page' dans le footer)
document.getElementById('print').addEventListener('click', function () { window.print(); });

/*****  effet toggle page chambers.html */
/* //  après reflexion, on affiche la page onclick="fClassique()"

function fClassique() {
    var classique = document.getElementById('idClasImg');
    if (classique.style.display === "block") {
        classique.style.display = "none";
      } else {
        classique.style.display = "block";
      }
}
function fConfort() {
    var confort = document.getElementById('idConfImg');
    if (confort.style.display === "block") {
        confort.style.display = "none";
      } else {
        confort.style.display = "block";
      }
}

*/

/****   Page chambers.html  gabrielle ******/
function fDetail(){
var detail = document.getElementById('detailClas');
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }

}