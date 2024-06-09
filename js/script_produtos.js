/* produtos - bolsa */

const sessaoBolsas = document.querySelector('#sessaoBolsas');
const divCardsProdutosBolsa = document.querySelector('#cards_produtosBolsa');

let bolsas = [
    {img: '../img/bolsa7.webp', alt: 'Bolsa forro e estampa', nome: 'Bolsa', descricao: 'Bolsa com forro e estampa.'},
    {img: '../img/bolsa2.jpg', alt: 'Bolsa Aysha Sound Bag.', nome: 'Bolsa', descricao: 'Bolsa Aysha e Sound Bag.'},
    {img: '../img/bolsa15.jpg', alt: 'Bolsa Aysha Tiracolo.', nome: 'Bolsa', descricao: 'Bolsa Aysha e tiracolo.'}
];

for (let bolsa of bolsas) {
    let divCardBolsa = document.createElement('div');
    divCardBolsa.className = 'card_produtos';

    let imgBolsa = document.createElement('img');
    imgBolsa.src = bolsa.img;
    imgBolsa.alt = bolsa.alt;

    let nomeBolsa = document.createElement('h4');
    nomeBolsa.innerText = bolsa.nome;

    let descricaoBolsa = document.createElement('p');
    descricaoBolsa.innerText = bolsa.descricao;

    divCardBolsa.appendChild(imgBolsa);
    divCardBolsa.appendChild(nomeBolsa);
    divCardBolsa.appendChild(descricaoBolsa);
    divCardsProdutosBolsa.appendChild(divCardBolsa);
    sessaoBolsas.appendChild(divCardsProdutosBolsa);

    function mouseOverCards(){
    divCardBolsa.style.transform = 'scale(1.1)';
    }

    function mouseOutCards(){
    divCardBolsa.style.transform = 'scale(1)';
    }

    divCardBolsa.addEventListener('mouseover', mouseOverCards);
    divCardBolsa.addEventListener('mouseout', mouseOutCards);
}

/* produtos - pochetes */

const sessaoPochetes = document.querySelector('#sessaoPochetes');
const divCardsProdutosPochete = document.querySelector('#cards_produtosPochete');


let pochetes = [
    {img: '../img/pochete3.jpeg', alt: 'Pochete jeans.', nome: 'Pochete', descricao: 'Pochete jeans.'},
    {img: '../img/pochetes2.jpg', alt: 'Chaveiro jeans personalizado.', nome: 'Pochete', descricao: 'Chaveiro jeans personalizado.'},
    {img: '../img/pochetes.jpeg', alt: 'Pochetes jeans com estampas.', nome: 'Pochete', descricao: 'Pochetes jeans com estampas.'}
];

for (let pochete of pochetes) {
    let divCardPochete = document.createElement('div');
    divCardPochete.className = 'card_produtos';

    let imgPochete = document.createElement('img');
    imgPochete.src = pochete.img;
    imgPochete.alt = pochete.alt;

    let nomePochete = document.createElement('h4');
    nomePochete.innerText = pochete.nome;

    let descricaoPochete = document.createElement('p');
    descricaoPochete.innerText = pochete.descricao;

    divCardPochete.appendChild(imgPochete);
    divCardPochete.appendChild(nomePochete);
    divCardPochete.appendChild(descricaoPochete);
    divCardsProdutosPochete.appendChild(divCardPochete);
    sessaoPochetes.appendChild(divCardsProdutosPochete);

    function mouseOverCards(){
    divCardPochete.style.transform = 'scale(1.1)';
    }

    function mouseOutCards(){
    divCardPochete.style.transform = 'scale(1)';
    }

    divCardPochete.addEventListener('mouseover', mouseOverCards);
    divCardPochete.addEventListener('mouseout', mouseOutCards);
}

/* produtos - bolsas tira colo */

const sessaoBolsasColo = document.querySelector('#sessaoBolsasColo');
const divCardsProdutosColo = document.querySelector('#cards_produtosColo');


let bolsasColo = [
    {img: '../img/tiracolo.jpg', alt: 'Bolsa tiracolo estampada.', nome: 'Bolsa Tiracolo', descricao: 'Bolsa tiracolo com estampas.'},
    {img: '../img/tiracolo2.jpg', alt: 'Bolsa traversal forrada.', nome: 'Bolsa Tiracolo', descricao: 'Bolsa traversal com forro.'},
    {img: '../img/tiracolo4.jpg', alt: 'Bolsa tiracolo estampada.', nome: 'Bolsa Tiracolo', descricao: 'Bolsa tiracolo com estampas.'}
];

for (let colo of bolsasColo) {
    let divCardColo = document.createElement('div');
    divCardColo.className = 'card_produtos';

    let imgColo = document.createElement('img');
    imgColo.src = colo.img;
    imgColo.alt = colo.alt;

    let nomeColo = document.createElement('h4');
    nomeColo.innerText = colo.nome;

    let descricaoColo = document.createElement('p');
    descricaoColo.innerText = colo.descricao;

    divCardColo.appendChild(imgColo);
    divCardColo.appendChild(nomeColo);
    divCardColo.appendChild(descricaoColo);
    divCardsProdutosColo.appendChild(divCardColo);
    sessaoBolsasColo.appendChild(divCardsProdutosColo);

    function mouseOverCards(){
    divCardColo.style.transform = 'scale(1.1)';
    }

    function mouseOutCards(){
    divCardColo.style.transform = 'scale(1)';
    }

    divCardColo.addEventListener('mouseover', mouseOverCards);
    divCardColo.addEventListener('mouseout', mouseOutCards);
}