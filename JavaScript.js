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
var qtdCarNavValor = document.getElementById('qtdCarNavValor')
var quantidadeCarNav1 = document.getElementById('quantidadeCarNav')
var deleteCar = document.getElementById('icoRemove')
var somaValor


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
    if (quantidadeCar.value >=1) {
        produtoCarrinho.style.visibility = 'visible'
        itensCarrinho.style.visibility = 'visible'
    } else if (quantidadeCar.value <= 0 ){
        produtoCarrinho.style.visibility = 'hidden'
        itensCarrinho.style.visibility = 'hidden'
    }
    let empty = document.getElementById('empty').style.visibility = 'hidden'
   // if(itensCarrinho.style.visibility == 'hidden') {
     //   itensCarrinho.style.visibility = 'visible'
        

    //else {
  //      itensCarrinho.style.visibility = 'hidden'
  //  }
   
})


botAdd.addEventListener('click', function () {
    let preçoCar = document.getElementById('preçoCar')
    let empty = document.getElementById('empty').style.visibility = 'hidden'
    quantidadeCarNav1.style.visibility = 'visible'
   let resultado = document.getElementById('resultado')
    let soma = 125 * quantidade.value
   console.log(typeof preçoCar)
    resultado.innerHTML = `$${soma.toFixed(2)}`
    quantidadeCar.value = quantidade.value
    qtdCarNavValor.value = quantidade.value

  })

  deleteCar.addEventListener('click', remover)
  function remover() { 
    quantidadeCar.value = 0
    qtdCarNavValor.value = 0
    quantidadeCarNav1.style.visibility = 'hidden'
      produtoCarrinho.style.visibility = 'hidden'
      //itensCarrinho.style.visibility = 'hidden'
      let empty = document.getElementById('empty').style.visibility = 'visible'
   }



navBot.addEventListener('click', function() {
  
    
    
    divFiltro.style.visibility = 'visible'
    fecharFiltro.addEventListener('click', function() {
        divFiltro.style.visibility = 'hidden'
    })
})