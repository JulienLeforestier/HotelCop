//datepicker
$('#inputDate').datepicker({
    altField: "#datepicker",
    closeText: 'Fermer',
    prevText: 'Précédent',
    nextText: 'Suivant',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Sem.',
    firstDay: 1,
    dateFormat: 'dd-mm-yy',
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
});

//fonction d'impression
var printWindow = document.getElementsById('print');
printWindow.addEventListener('click', print_page);
function print_page(){
    alert();
    window.print();
  }

/*****  effet toggle page chambers.html */
function fClassique() {
    var classique = document.getElementById("idClasImg");
    if (classique.style.display === "none") {
        this.style.display = "block";
    }
    else {
        classique.style.display = "none";
    }
}
