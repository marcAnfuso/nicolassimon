
$('.btnMostrarContent').click(function(){
    var el = document.getElementById('contUno');
    if (document.getElementById){
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    el.style.visibility = (el.style.visibility == 'hidden') ? 'visible' : 'hidden';
    }
});



$('.btnCerrar').click(function() {
    var el = document.getElementById('contUno');
    el.style.display = 'none';
    el.style.visibility = 'hidden';
})



