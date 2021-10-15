var navBot = document.getElementById('navBot')
var divFiltro = document.getElementById('divFiltroMod')
var fecharFiltro = document.getElementById('fecharFiltromod')
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
var empty = document.getElementById('empty')


botMenos.addEventListener('click', remove)
botMais.addEventListener('click', add)
function add() {
    if (quantidade.value >= 0) {

        quantidade.value++

    }
}
function remove() {
    if (quantidade.value >= 1) {
        quantidade.value--

    }

}

quantidadeCar.value = 0
carrinhoNav.addEventListener('click', function () {

    console.log(quantidadeCar.value)

    if (quantidadeCar.value == 0) {
        console.log(quantidadeCar.value)
        console.log('0')
        empty.style.visibility = 'visible'
        itensCarrinho.style.visibility = 'visible'
        quantidadeCar.value = -1
    } else if (quantidadeCar.value == -1) {
        console.log(quantidadeCar.value)
        console.log('1')
        produtoCarrinho.style.visibility = 'hidden'
        itensCarrinho.style.visibility = 'hidden'
        empty.style.visibility = 'hidden'
        quantidadeCar.value = 0
    }

    if (quantidadeCar.value > 0 && produtoCarrinho.style.visibility == 'hidden') {
        console.log(quantidadeCar.value)
        console.log('0')
        produtoCarrinho.style.visibility = 'visible'
        itensCarrinho.style.visibility = 'visible'
        empty.style.visibility == 'hidden'
    } else if (quantidadeCar.value > 0 && produtoCarrinho.style.visibility == 'visible') {
        console.log(quantidadeCar.value)
        console.log('1')
        produtoCarrinho.style.visibility = 'hidden'
        itensCarrinho.style.visibility = 'hidden'
        empty.style.visibility == 'hidden'

    }


    // 
})


botAdd.addEventListener('click', function () {
    if (produtoCarrinho.style.visibility == 'visible') {

    
    //produtoCarrinho.style.visibility = 'hidden'
    //itensCarrinho.style.visibility = 'hidden'
    let preçoCar = document.getElementById('preçoCar')
    empty.style.visibility = 'hidden'

    let resultado = document.getElementById('resultado')
    let soma = 125 * quantidade.value

    resultado.innerHTML = `$${soma.toFixed(2)}`
    quantidadeCar.value = quantidade.value
    qtdCarNavValor.value = quantidade.value
    if (qtdCarNavValor.value > 0) {
        quantidadeCarNav1.style.visibility = 'visible'
    } else {
        quantidadeCarNav1.style.visibility = 'hidden'
    }
} else if (empty.style.visibility == 'visible') {
        produtoCarrinho.style.visibility = 'visible'
        empty.style.visibility = 'hidden'

        quantidadeCar.value = quantidade.value
        qtdCarNavValor.value = quantidade.value

        if (qtdCarNavValor.value > 0) {
            quantidadeCarNav1.style.visibility = 'visible'
        } else {
            quantidadeCarNav1.style.visibility = 'hidden'
        }
} else {
        produtoCarrinho.style.visibility = 'hidden'
        itensCarrinho.style.visibility = 'hidden'
        let preçoCar = document.getElementById('preçoCar')
        empty.style.visibility = 'hidden'

        let resultado = document.getElementById('resultado')
        let soma = 125 * quantidade.value

        resultado.innerHTML = `$${soma.toFixed(2)}`
        quantidadeCar.value = quantidade.value
        qtdCarNavValor.value = quantidade.value
        if (qtdCarNavValor.value > 0) {
            quantidadeCarNav1.style.visibility = 'visible'
        } else {
            quantidadeCarNav1.style.visibility = 'hidden'
        }
}
})

deleteCar.addEventListener('click', remover)
function remover() {
    let confirma = confirm('Do you want to remove items from cart?')
    if (confirma == true) {
        quantidadeCar.value = 0
        qtdCarNavValor.value = 0
        quantidadeCarNav1.style.visibility = 'hidden'
        produtoCarrinho.style.visibility = 'hidden'
        empty.style.visibility = 'visible'
        quantidadeCar.value = -1
    }
}





//function iniciaModal (modalID) {
//  const modal = document.getElementById(modalID)
//   modal.classList.add('mostrar')
// }
navBot.addEventListener('click', function () {
    divFiltro.classList.add('mostrar')
    fecharFiltro.addEventListener('click', function () {
        divFiltro.classList.remove('mostrar')
    })
})