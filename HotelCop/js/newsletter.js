document.getElementById('newsletterBtnOnForm').addEventListener('click', function () { 
    const regex = /^[^\W][a-zA-Z0-9]+(.[a-zA-Z0-9]+)@[a-zA-Z0-9]+(.[a-zA-Z0-9]+).[a-zA-Z]{2,4}$/;
    if(regex.test(String(mail.value).toLowerCase()) == true && newsletter.checked == true) alert("Inscription réussie"); 
    else if (regex.test(String(mail.value).toLowerCase()) == false && newsletter.checked == true) alert("L'e-mail n'a pas un format valide");
    else if (regex.test(String(mail.value).toLowerCase()) == true && newsletter.checked == false) alert("Vous n'avez pas coché la case 'Je souhaite recevoir la newsletter tous les mois'")
    else alert("Vous n'avez pas renseigné votre e-mail ni coché la case 'Je souhaite recevoir la newsletter tous les mois'");
});