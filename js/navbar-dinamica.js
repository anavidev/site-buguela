/* navbar dinamica */

const header = document.querySelector('.header');

const navbar = document.createElement('nav');
navbar.className = 'navbar';
navbar.innerHTML = `
<div>
    <a href="index.html">
        <img class="logo-imagem" src="../img/logo.png">
    </a>
</div>
<ul class="nav-list">
    <li><a class="nav-link" href="index.html">Home</a></li>
    <li><a class="nav-link" href="produtos.html">Produtos</a></li>
    <li><a class="nav-link" href="sobre.html">Sobre</a></li>
</ul>`;
header.appendChild(navbar);


