var navBot = document.getElementById('navBot')
var divFiltro = document.getElementById('divFiltro')
var fecharFiltro = document.getElementById('fecharFiltro')
var containerMaster = document.getElementById('containerMaster')
var carrinhoNav = document.getElementById('carrinhoNav')
var itensCarrinho = document.getElementById('itensCarrinho')
var botMais = document.getElementById('mais')
var botMenos = document.getElementById('menos')
var quantidade = document.getElementById('quantidade')
botMenos.addEventListener('click', remove)
botMais.addEventListener('click', add)
function add() {
   if(quantidade.value >= 0 ){
        quantidade.value++
     
  }
}
function remove() {
    if (quantidade.value >= 1) {
        quantidade.value--

    }

}
carrinhoNav.addEventListener('click', function(){
    if(itensCarrinho.style.visibility == 'hidden') {
        itensCarrinho.style.visibility = 'visible'
    } else {
        itensCarrinho.style.visibility = 'hidden'
    }
   
})
navBot.addEventListener('click', function() {
    containerMaster.style.opacity = '0.1'
    
    
    divFiltro.style.visibility = 'visible'
    fecharFiltro.addEventListener('click', function() {
        divFiltro.style.visibility = 'hidden'
    })
})