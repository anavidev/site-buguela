export default () => {

    const templateMainIndex = `
    <section>
         <h1 class="p-5 display-4 fw-semibold text-primary text-center">Reutilizar e transformar é o melhor caminho para um futuro bem melhor!</h1>
        <div class="container">
            <div class="foto">
                <img src="img/quem somos.png" class="img" alt="" >
            </div>
        </div>
    </section>
    <section class="text-center" id="sessaoCards">
        <h1 class="p-5 display-4 fw-semibold text-primary">Principais produtos</h1>
         <div class="container-fluid bs-body-color">
            <div class="row justify-content-around">
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary">
                    <img src="img/pochetes.jpeg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Imagem de um jogo de vôlei." title="Vôlei">
                    <div class="text-center card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Pochete jeans com estampas.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary">
                    <img src="img/chaveiro.jpeg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Imagem de uma mão encostando em uma bola de basquete." title="Basquete">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Chaveiro jeans personalizado.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary">
                    <img src="img/sintetica.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Imagem de uma pessoa correndo com uma bola de futsal." title="Futsal">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa sintética com forro de bagun,<br>impermeável para uso escolar ou de maquiagem.</p>
                    </div>    
                </div>
            </div>    
        </div>    
    </section>
    <section id="sessaoBlog">
      <h1 class="p-5 display-4 fw-semibold text-primary">Blog</h1>
      <div class="row_">
          <div class="leftcolumn">    
              <div class="card_1">
                  <h2>Sustentabilidade</h2>
                  <h5>Transformando retalhos em roupas</h5>
                  <div class="imagens">
                      <img src="img/sustentabilidade.jpg" alt="">
                  </div>
                  <p>Na cofecção suas etapas, prezam pelo respeito ao meio<br>ambiente e à sociedade, valorizando as pessoas
                   envolvidas<br>na produção e incentivando o consumo consciente.</p>
              </div>
              <div class="card_1">
                  <h2>Beleza afrodescendente</h2>
                  <h5> O resgate social das comunidades afrodescendentes</h5>
                  <div class="imagens">
                      <img src="img/beleza.jpeg" alt="">
                  </div>
                  <p> É a mistura de estilos e culturas, batas, turbantes, bolsas<br>com retalhos de tecidos, panos coloridos usados em roupas<br>ou para enfeitar a cabeça fazem parte das produções.</p>
              </div>
              <div class="card_1">
                  <h2>Empreendedorismo Negro</h2>
                  <h5>Surge da necessidade de um empoderamento e busca pela igualdade</h5>
                  <div class="imagens">
                      <img src="img/empreendedorismo.jpg" alt="">
                  </div>
                  <p> É o movimento que reúne negócios idealizados e comandados por pessoas negras (pretas e pardas).</p>
              </div>
          </div>
          <div class="rightcolumn">
              <div class="card_1">
                  <h3>Sobre nós</h3>
                  <div class="fakeimg_" >
                      <img src="img/slide7.jpg" alt="">
                      <p>Ateliê Buguela confecciona bolsas, mochilas e acessórios com tecidos  diversos<br>tais como: 
                      brim, jeans<br>e sintéticos, com peças representativas do povo Afro e Afro Brasileira.</p>
                  </div>
              </div>
              <div class="card_1">
                  <h3>Produtos populares</h3>
                  <div class="fakeimg1">
                      <img src="img/bolsa1.jpeg" alt="">
                  </div>     
              </div>
              <div class="fakeimg2">
                  <img src="img/pochetes2.jpg" alt="">
              </div>
              <div class="fakeimg3">
                  <img src="img/tiracolo.jpg" alt="">
              </div>
          </div>
          <div class="container_comment">
              <div class="head">
                  <h3>Poste um comentário:</h3>
              </div>
              <div id="qtdComentarios">
                  <span id="comment">0</span> Comentários
              </div>
              <div class="text">
                  <p>Estamos felizes em ouvir de você</p>
              </div>
              <div class="comments"></div>
                  <div class="commentbox">
                      <img src="img/user_pic.png" alt="">
                      <div class="content">
                          <h2>Comente como: </h2>
                          <input type="text" value="Anônimo" class="user">
                          <div class="commentinput">
                              <input type="text" placeholder="Digite o comentário" class="usercomment">
                              <div class="buttons">
                                  <button type="submit" disabled id="publish">Publicar</button>
                              </div>
                          </div>
                          <p class="policy">Este site é protegido pelo reCAPTCHA e pelo Google  <a href="#">política de Privacidade</a> e <a href="#">Termos de serviço</a>.</p>
                      </div>
                  </div>
              </div>
          </div>  
      </div>      
  </section>` // criacao de template

    const article = document.createElement('article');
    article.innerHTML = templateMainIndex; // adicao de template na main da pagina index

    return article;
}