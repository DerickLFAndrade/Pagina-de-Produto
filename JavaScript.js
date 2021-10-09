var navBot = document.getElementById('navBot')
var divFiltro = document.getElementById('divFiltro')
var fecharFiltro = document.getElementById('fecharFiltro')
var containerMaster = document.getElementById('containerMaster')

navBot.addEventListener('click', function() {
    containerMaster.style.opacity = '0.1'
    
    
    divFiltro.style.visibility = 'visible'
    fecharFiltro.addEventListener('click', function() {
        divFiltro.style.visibility = 'hidden'
    })
})