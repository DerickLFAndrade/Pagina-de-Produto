var navBot = document.getElementById('navBot')
var divFiltro = document.getElementById('divFiltro')
var fecharFiltro = document.getElementById('fecharFiltro')
navBot.addEventListener('click', function() {
    divFiltro.style.visibility = 'visible'
    fecharFiltro.addEventListener('click', function() {
        divFiltro.style.visibility = 'hidden'
    })
})