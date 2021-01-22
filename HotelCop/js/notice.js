$(function(){
    $('#tabs').tabs({
         collapsible: true,
         event: "click"
    });
});

document.getElementById('noticeBtnOnForm').addEventListener('click', function () { 
    if(noticeName.value.length >= 2 && noticeArea.value.length >= 5) alert("Votre avis sera posté après validation d'un modérateur"); 
    else if (noticeName.value.length < 2) alert("Le nom doit comporter 2 caractères minimum");
    else if (noticeArea.value.length < 5) alert("L'avis doit comporter 5 caractères minimum");
    else alert("Vous n'avez pas rempli les champs nom et avis");
});