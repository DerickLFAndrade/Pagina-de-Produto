var navBot = document.getElementById('navBot')
var divFiltro = document.getElementById('divFiltro')
var fecharFiltro = document.getElementById('fecharFiltro')
var containerMaster = document.getElementById('containerMaster')
var carrinhoNav = document.getElementById('carrinhoNav')
var botAdd = document.getElementById('botAdd')
var itensCarrinho = document.getElementById('itensCarrinho')
var produtoCarrinho = document.getElementById('produtoCarrinho')
var botMais = document.getElementById('mais')
var botMenos = document.getElementById('menos')
var quantidade = document.getElementById('quantidade')
var quantidadeCar = document.getElementById('quantidadeCar')
var somaValor 
botMenos.addEventListener('click', remove)
botMais.addEventListener('click', add)
function add() {
   if(quantidade.value >= 0 ){
      
      quantidadeCar =  quantidade.value++
      
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


botAdd.addEventListener('click', function () {
    let preçoCar = document.getElementById('preçoCar')
    let empty = document.getElementById('empty').style.visibility = 'hidden'
    let resultado = document.getElementById('resultado')
    if (produtoCarrinho.style.visibility == 'hidden'){
        produtoCarrinho.style.visibility = 'visible'
        itensCarrinho.style.visibility = 'visible'
   
    } else {
        produtoCarrinho.style.visibility = 'hidden'
        itensCarrinho.style.visibility = 'hidden'
    }
    
    
    
    somaValor += quantidadeCar * Number(preçoCar.value)
    console.log(somaValor)
  })



navBot.addEventListener('click', function() {
    containerMaster.style.opacity = '0.1'
    
    
    divFiltro.style.visibility = 'visible'
    fecharFiltro.addEventListener('click', function() {
        divFiltro.style.visibility = 'hidden'
    })
})