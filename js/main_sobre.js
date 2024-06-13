export default() => {

    const templateMainSobre = `
    <section id="sessaoSobre">
        <h1>Quem somos?</h1>
        <div id="divFotoSobre"class="container">
            <div class="foto">
                <img src="../img/quem somos.png" class="img" alt="" >
            </div>
        </div>
        <p>Buguela é uma Slow fashion que ajuda no resgate da autoestima feminina,<br> com o propósito de propagar a cultura afro-brasileira, por meio de peças afirmativas<br> e representativas da cultura africana. </p>
    </section>
    <section id="galeria_fotos">
        <h1>Galeria de fotos </h1>
        <div id="galeria-container">
        
        </div>
    </section>`; // criando template

    const article = document.createElement('article');
    article.innerHTML = templateMainSobre; // adicao de template na main da pagina sobre

    return article;
}