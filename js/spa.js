import header from "./header.js";
import mainIndex from "./main_index.js";
import mainProdutos from "./main_produtos.js";
import mainSobre from "./main_sobre.js";
import galeriaFotos from "./galeria_fotos.js";

const main = document.querySelector('#main');

function paginaHome() {
    main.appendChild(header());
    main.appendChild(mainIndex());
}

function paginaProdutos() {
    main.appendChild(header());
    main.appendChild(mainProdutos());
}

function paginaSobre() {
    main.appendChild(header());
    main.appendChild(mainSobre());
    main.appendChild(galeriaFotos());
}

paginaHome(); //  carregar a pagina home

/* muda pagina de acordo com a mudança de hash */
window.addEventListener('hashchange', () => {
    main.innerHTML = ""; // limpa a tela antes de carregar a página
    const hash = window.location.hash;
    if (hash === '#home') {
        paginaHome();
    } else if (hash === '#produtos') {
        paginaProdutos();
    } else if (hash === '#sobre') {
        paginaSobre();
    }
});
