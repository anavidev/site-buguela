/* galeria de fotos */

let divGaleria = document.querySelector('#galeria-container')

let fotos = [
    {cod: 1, img: "../img/imagem1.webp", alt: ""},
    {cod: 2, img: "../img/imagem2.jpeg", alt: ""},
    {cod: 3, img: "../img/imagem3.jpg", alt: ""},
    {cod: 4, img: "../img/imagem4.png", alt: ""},
    {cod: 5, img: "../img/imagem5.jpg", alt: ""},
    {cod: 6, img: "../img/imagem6.png", alt: ""},   
];

for (let item of fotos){
    let foto = document.createElement('img');
    foto.className = 'galeria-fotos';
    foto.src = item.img;
    foto.alt = item.alt;

    function mouseDentroFotos(){
        foto.style.transform = 'scale(1.3)';
    }

    function mouseForaFotos(){
        foto.style.transform = 'scale(1)';
    }

    foto.addEventListener('mouseover', mouseDentroFotos);
    foto.addEventListener('mouseout', mouseForaFotos);

    divGaleria.appendChild(foto);
}