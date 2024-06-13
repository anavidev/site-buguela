export default() => {

    const templateMainSobre = `
    <section>
       <h1 class="p-5 display-4 fw-semibold text-primary text-center">Quem somos?</h1>
        <div class="container">
            <div class="foto">
                <img src="img/quem somos.png" class="img" alt="" >
            </div>
        </div>
             <p class="pb-5 px-5 h3 fw-semibold text-primary text-center"> Buguela é uma Slow fashion que ajuda no resgate da autoestima feminina, 
        <br> com o propósito de propagar a cultura afro-brasileira, <br>
        por meio de peças afirmativas e representativas da cultura africana.</p>
    </section>
    <section id="galeria_fotos">
        <h1 class="p-5 display-4 fw-semibold text-primary">Galeria de fotos</h1>
        <div id="galeria-container">
        
        </div>
    </section>`; // criando template

    const article = document.createElement('article');
    article.innerHTML = templateMainSobre; // adicao de template na main da pagina sobre

    return article;
}