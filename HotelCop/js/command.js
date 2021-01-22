document.getElementById('payBtn').addEventListener('click', function () { 
    if(generalConditionsOfSale.checked == false) alert("Vous n'avez pas accepté les conditions générales de ventes"); 
    else alert("Votre commande a bien été prise en compte, vous allez être redirigé vers notre plateforme de paiement (non fonctionnel)");
});