/* slide */
const box = document.querySelector('.container-slide');
const imagens = document.querySelectorAll('.imgSlide');

let contador = 0;

function slider(){
    contador++;

    if(contador > imagens.length - 1){
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 500}px)`
}

setInterval(slider, 1500);

/* evento mostrar principais produtos */
const sessaoCards = document.querySelector('#sessaoCards');

const divCards = document.createElement('div');
divCards.id = "divCards";
sessaoCards.appendChild(divCards);

let principais_produtos = [
    {nome: "Pochete", descricao: "Pochete jeans com estampas.", img: "../img/pochetes.jpeg"},
    {nome: "Chaveiro", descricao: "Chaveiro jeans personalizado.", img: "../img/chaveiro.jpeg"},
    {nome: "Bolsa", descricao: "Bolsa sintética com forro de bagum, impermeável para uso escolar ou de maquiagem.", img: "../img/sintetica.jpg"}
]

for (let item of principais_produtos){
    let divProduto = document.createElement('div');
    divProduto.className = "produto";

    let imgProduto = document.createElement('img');
    imgProduto.src = item.img;
    imgProduto.alt = item.nome;
    imgProduto.className = "produto-imagem";
    
    let nomeProduto = document.createElement('h4');
    nomeProduto.innerText = item.descricao;

    let descricaoProduto = document.createElement('p');
    descricaoProduto.innerText = item.descricao;

    divProduto.appendChild(imgProduto);
    divProduto.appendChild(nomeProduto);
    divProduto.appendChild(descricaoProduto);
    divCards.appendChild(divProduto);

    function mouseDentroCards(){
        divProduto.style.transform = "scale(1.1)";
    }
    
    function mouseForaCards(){
        divProduto.style.transform = "scale(1)";
    }    
    
    divProduto.addEventListener('mouseover', mouseDentroCards);
    divProduto.addEventListener('mouseout', mouseForaCards);
    
}


