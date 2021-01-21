//fonction hide&show SPA
var opinions = document.getElementsByClassName('ourOpinion');

opinions[0].addEventListener('click', function (){
    var ourOpinion1 = document.getElementById('ourOpinion1');
    if (ourOpinion1.style.display == "block") ourOpinion1.style.display = "none";
    else ourOpinion1.style.display = "block";
})
opinions[1].addEventListener('click', function (){
    var ourOpinion2 = document.getElementById('ourOpinion2');
    if (ourOpinion2.style.display == "block") ourOpinion1.style.display = "none";
    else ourOpinion2.style.display = "block";
})
opinions[2].addEventListener('click', function (){
    var ourOpinion3 = document.getElementById('ourOpinion3');
    if (ourOpinion3.style.display == "block") ourOpinion2.style.display = "none";
    else ourOpinion3.style.display = "block";
})
opinions[3].addEventListener('click', function (){
    var ourOpinion4 = document.getElementById('ourOpinion4');
    if (ourOpinion4.style.display == "block") ourOpinion4.style.display = "none";
    else ourOpinion4.style.display = "block";
})
opinions[4].addEventListener('click', function (){
    var ourOpinion5 = document.getElementById('ourOpinion5');
    if (ourOpinion5.style.display == "block") ourOpinion5.style.display = "none";
    else ourOpinion5.style.display = "block";
})



/*
//fonction afficher/cacher
window.onload = function (){
    var opinions = document.getElementsByClassName('ourOpinion');
    for (i=0;i<opinions.length;i++) {
        var j = document.getElementById('ourOpinion'+(i+1));
        console.log(j);
        opinions[i].addEventListener('click', function () {
            if (j.style.display == "block") j.style.display = "none";
            else j.style.display = "block";
        }(opinions[i]), false);
    }
}*/