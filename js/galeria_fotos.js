export default() => {

    let divGaleria = document.querySelector('#galeria-container')

    let fotos = [
        {cod: 1, img: "../img/imagem1.webp", alt: "Imagem 1"},
        {cod: 2, img: "../img/imagem2.jpeg", alt: "Imagem 2"},
        {cod: 3, img: "../img/imagem3.jpg", alt: "Imagem 3"},
        {cod: 4, img: "../img/imagem4.png", alt: "Imagem 4"},
        {cod: 5, img: "../img/imagem5.jpg", alt: "Imagem 5"},
        {cod: 6, img: "../img/imagem6.png", alt: "Imagem 6"},   
    ];

    for (let item of fotos){
        const foto = document.createElement('img');
        foto.className = 'galeria-fotos';
        foto.src = item.img;
        foto.alt = item.alt;

        function mouseOverFotos(){
            foto.style.transform = 'scale(1.1)';
        }

        function mouseOutFotos(){
            foto.style.transform = 'scale(1)';
        }

        foto.addEventListener('mouseover', mouseOverFotos);
        foto.addEventListener('mouseout', mouseOutFotos);

        divGaleria.appendChild(foto);

    }
    return divGaleria;
}    