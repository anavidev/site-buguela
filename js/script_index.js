/* slideshow - corrigir */
let sliders = document.querySelectorAll('#slide li');
let foto_atual = 0;
let qtd_fotos = sliders.length - 1;

function logicaSlides() {
    let index = foto_atual ? foto_atual - 1 : qtd_fotos;
    sliders[index].classList.remove('slider-active');
    sliders[foto_atual].classList.add('slider-active');
    foto_atual = foto_atual >= qtd_fotos ? 0 : foto_atual + 1;
}

window.setInterval(logicaSlides, 2000);


/* evento mostrar principais produtos */
const sessaoCards = document.querySelector('#sessaoCards')

const divCards = document.createElement('div')
divCards.id = "divCards"
sessaoCards.appendChild(divCards)

let principais_produtos = [
    {nome: "Pochete", descricao: "Pochete jeans com estampas."},
    {nome: "Chaveiro", descricao: "Chaveiro jeans personalizado."},
    {nome: "Bolsa", descricao: "Bolsa sintética com forro de bagum, impermeável para uso escolar ou de maquiagem."}
]

for (let item of principais_produtos){
    let divProduto = document.createElement('div')
    divProduto.className = "produto"
    divProduto.innerHTML = `${item.nome}<br>${item.descricao}`
    divCards.appendChild(divProduto)
}


