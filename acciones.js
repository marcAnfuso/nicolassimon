
$('.btnMostrarContent').click(function(){
    var el = document.getElementById('contUno');
    if (document.getElementById){
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    el.style.visibility = (el.style.visibility == 'hidden') ? 'visible' : 'hidden'; //damos un atributo display:none que oculta el div
    }
});



$('.btnCerrar').click(function() {
    var el = document.getElementById('contUno');
    el.style.display = 'none';
    el.style.visibility = 'hidden';
})



