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
}