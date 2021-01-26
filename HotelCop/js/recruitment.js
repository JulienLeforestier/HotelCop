// fonction atteindre les commentaires d'alert et les désactiver
var span = document.getElementsByTagName('span');
console.log(span);
function desactiveAlert() {
    var spans = span.length;

    for (i = 0; i < spans; i++) {
        if (span[i].className == 'alertCom') {
            span[i].style.display = 'none';
        }
    }
}
desactiveAlert();// ok

// Définir combien on a de alertCom
var alertCom = document.getElementsByClassName('alertCom');
console.log(alertCom);

// getElement by Nom
var nomRecrut = document.getElementById('inputNomRecrut');
nomRecrut.addEventListener('keyup', fNomR);
function fNomR(){
    var nomValue = nomRecrut.value;
    const regexN = /\d/;
    //console.log(nomValue);
    if (nomValue.length < 2 || nomValue.length > 10 || regexN.test(nomValue)) {
        nomRecrut.style.border = "2px solid red";  
        alertCom[0].style.display = "block";
    }
    else {
        nomRecrut.style.border = "2px solid green";
        desactiveAlert();
    }
}

//getElement by Prenom
var prenomRecrut = document.getElementById('inputPreRecrut');
prenomRecrut.addEventListener('keyup', fPrenomR);
function fPrenomR(){
    var prenomValue = prenomRecrut.value;
    const regexP = /\d/;
    if(prenomValue.length<2 || prenomValue.length>10 || regexP.test(prenomValue)){
        prenomRecrut.style.border ="2px solid red";
        alertCom[1].style.display = "block";
    }
    else {
        prenomRecrut.style.border = "2px solid green";
        desactiveAlert();
    }
}
// getElement by Entreprise
var entRecrut = document.getElementById('inputEntRecrut');
entRecrut.addEventListener('keyup', fEntR);
function fEntR(){
    var entValue = entRecrut.value;
    if(entValue.length<2 || entValue.length>10){
        entRecrut.style.border = '2px solid red';
        alertCom[2].style.display = "block";
    }
    else{
        entRecrut.style.border = '2px solid green';
        desactiveAlert();
    }
}

// getElement by email
var emailRecrut = document.getElementById('inputEmaRecrut');
emailRecrut.addEventListener('keyup', fEmaR);
function fEmaR(){
    var emailValue = emailRecrut.value;
    const regexEm =  /^[^\W][a-zA-Z0-9]+(.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(.[a-zA-Z0-9]+).[a-zA-Z]{2,4}$/;
    if(regexEm.test(emailValue) == false){
        emailRecrut.style.border = '2px solid red';
        alertCom[3].style.display = 'block';
    }
    else{
        emailRecrut.style.border = '2px solid green';
        desactiveAlert();
    }
}
// getElement by TEXTAREA
var countCarac = document.getElementById("charcount");
var textRecrut = document.getElementById('inputTxtRecrut');
var txtValue = textRecrut.value;
textRecrut.addEventListener('keyup', fTxtR);
function fTxtR() {
    var txtValue = textRecrut.value;
    if (txtValue.length < 2 || txtValue.length > 20) {
        textRecrut.style.border = "2px solid red";
        var alertCom = document.getElementsByClassName('alertCom');
        alertCom[6].style.display = "block";
        //countCarac.style.display="none";
    }
    else {
        textRecrut.style.border = "2px solid green";
        desactiveAlert();
        countCarac.innerHTML =  'il reste ' + (20 - txtValue.length) + ' caractères';
    }
}
/*textRecrut.addEventListener('keyup', fCountLettres);

function fCountLettres() {
    var countValue = textRecrut.value;
	var countValue = str.length;
	document.getElementById("charcount").innerHTML = countValue + ' out of 500 characters';
}*/