// fonction atteindre les commentaires d'alert et les désactiver
var span = document.getElementsByTagName('span');
console.log(span);
function desactiveAlert(){
    var spans = span.length;

    for(i=0; i<spans;i++){
        if(span[i].className =='alertCom'){
            span[i].style.display = 'none';
        }
    }
}
desactiveAlert();// ok



// getElement by Nom
var nom = document.getElementById('inputNomContact');
//console.log(nom);
console.log(typeof(nom.value));
var alertCom = document.getElementsByClassName('alertCom');
//console.log(alertCom[0].style.display);
nom.addEventListener('keyup', fNomC);
function fNomC(){
    var nomValue = nom.value;
    //console.log(nomValue);
    if(nomValue.length<2 || nomValue.length >5 || !isNaN(nomValue)) {
        nom.style.border="2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[0].style.display = "block";
    }
    else{
        nom.style.border = "2px solid green";
        desactiveAlert();
    }
}


// getElement by Prenom
var prenom = document.getElementById('inputPreContact');
console.log(prenom);
var alertCom = document.getElementsByClassName('alertCom');
console.log(alertCom[1].style.display);
prenom.addEventListener('keyup', fPreC);
function fPreC(){
    var prenomValue = prenom.value;
    console.log(prenomValue);
    if(prenomValue.length<2 || prenomValue.length >15){
        prenom.style.border="2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[1].style.display = "block";
    }
    else{
        prenom.style.border = "2px solid green";
        desactiveAlert();
    }
}
// getElement by entreprise
var entreprise = document.getElementById('inputEntContact');
console.log(entreprise);
var alertCom = document.getElementsByClassName('alertCom');
console.log(alertCom[2].style.display);
entreprise.addEventListener('keyup', fEntC);
function fEntC(){
    var entrepriseValue = entreprise.value;
    console.log(entrepriseValue);
    if(entrepriseValue.length<2 || entrepriseValue.length >15){
        entreprise.style.border="2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[2].style.display = "block";
    }
    else{
        entreprise.style.border = "2px solid green";
        desactiveAlert();
    }
}
// getElement by SUJET
var sujet = document.getElementById('inputSujContact');
console.log(sujet);
var alertCom = document.getElementsByClassName('alertCom');
console.log(alertCom[5].style.display);
sujet.addEventListener('keyup', fSujC);
function fSujC(){
    var sujetValue = sujet.value;
    console.log(sujetValue);
    if(sujetValue.length<2 || sujetValue.length >20){
        sujet.style.border="2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[2].style.display = "block";
    }
    else{
        sujet.style.border = "2px solid green";
        desactiveAlert();
    }
}
// getElement by TEXTAREA
var textarea = document.getElementById('textareaContact');
console.log(textarea.value);
var alertCom = document.getElementsByClassName('alertCom');
//console.log(alertCom);
//console.log(alertCom[7].style.display);
textarea.addEventListener('keyup', fTxtC);
function fTxtC(){
    var txtValue = textarea.value;
    console.log(txtValue);
    if(txtValue.length<2 || txtValue.length >20){
        textarea.style.border="2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[2].style.display = "block";
    }
    else{
        textarea.style.border = "2px solid green";
        desactiveAlert();
    }
}

// email
var email = document.getElementById('inputEmaContact');
document.getElementById('inputEmaContact').addEventListener('keyup', function(){
const regex = /^[^\W][a-zA-Z0-9]+(.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(.[a-zA-Z0-9]+).[a-zA-Z]{2,4}$/; 
if(regex.test(email.value) == true){
    email.style.border = "2px solid green";
        desactiveAlert();
}
else{
    email.style.border="2px solid red";
    var alertCom = document.getElementsByClassName('alertCom');
    alertCom[3].style.display = "block";
}
})


/** A REVOIR PLUS TARD
// getElement by email
function validerEmail(emailValue) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailValue);
  }

var email = document.getElementById('inputEmatContact');
console.log(email);
var alertCom = document.getElementsByClassName('alertCom');
console.log(alertCom[3].style.display);
email.addEventListener('keyup', fEmaC);
function fEmaC(){
    var emailValue = email.value;
    console.log(emailValue);
    validerEmail(emailValue);
   
    if(validerEmail(emailValue)){
        email.style.border="2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[2].style.display = "block";
    }
    else{
        email.style.border = "2px solid green";
        desactiveAlert();
    }
}
*/