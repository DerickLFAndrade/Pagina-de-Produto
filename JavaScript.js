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




var spanTumb1 = document.getElementById('spanTumb1')
spanTumb1.addEventListener('click', function () {
    
    spanTumb1.style.border = '3px solid orange'
    spanTumb1.style.background = 'rgba(255,255,255,0.5)'
   
    spanTumb2.style.border = 'none'
    spanTumb2.style.background = 'none'
    spanTumb3.style.border = 'none'
    spanTumb3.style.background = 'none'
    spanTumb4.style.border = 'none'
    spanTumb4.style.background = 'none'
    
  })
var spanTumb2 = document.getElementById('spanTumb2')
spanTumb2.addEventListener('click', function () {
   
    spanTumb2.style.border = '3px solid orange'
    spanTumb2.style.background = 'rgba(255,255,255,0.5)'

    spanTumb1.style.border = 'none'
    spanTumb1.style.background = 'none'
    spanTumb3.style.border = 'none'
    spanTumb3.style.background = 'none'
    spanTumb4.style.border = 'none'
    spanTumb4.style.background = 'none'
    
  
})
var spanTumb3 = document.getElementById('spanTumb3')
spanTumb3.addEventListener('click', function () {
    
    spanTumb3.style.border = '3px solid orange'
    spanTumb3.style.background = 'rgba(255,255,255,0.5)'
    
    spanTumb1.style.border = 'none'
    spanTumb1.style.background = 'none'
    spanTumb2.style.border = 'none'
    spanTumb2.style.background = 'none'
    spanTumb4.style.border = 'none'
    spanTumb4.style.background = 'none'
   
})
var spanTumb4 = document.getElementById('spanTumb4')
spanTumb4.addEventListener('click', function () {
    
    spanTumb4.style.border = '3px solid orange'
    spanTumb4.style.background = 'rgba(255,255,255,0.5)'

    spanTumb1.style.border = 'none'
    spanTumb1.style.background = 'none'
    spanTumb2.style.border = 'none'
    spanTumb2.style.background = 'none'
    spanTumb3.style.border = 'none'
    spanTumb3.style.background = 'none'
   
})
var tenis1 = document.getElementById('tenis1')
tenis1.addEventListener('click',abrirFecharMod)
spanTumb1.addEventListener('click', abrirFecharMod)
spanTumb2.addEventListener('click', abrirFecharMod)
spanTumb3.addEventListener('click', abrirFecharMod)
spanTumb4.addEventListener('click', abrirFecharMod)
function abrirFecharMod() {
    let carouselMod = document.getElementById("carouselMod")
    carouselMod.classList.add('carouselAbrir')
}

function abrirFecharMod () {
    var carouselMod = document.getElementById('carouselMod')
    carouselMod.classList.add('carouselAbrir')
    let botFechaModCar = document.getElementById('botFechaModCar')
    botFechaModCar.addEventListener('click', function () {
        carouselMod.classList.remove('carouselAbrir')
        
    })
}

