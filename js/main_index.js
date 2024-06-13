export default () => {

    const templateMainIndex = `
    <section id="sessaoIntro">
        <h1 class="display-4">Reutilizar e transformar é o melhor caminho para um futuro bem melhor!</h1>
        <img id="fotoIntro" src="img/imagem2.jpeg">    
    </section>
    <section class="text-center" id="sessaoCards">
        <h1 class="p-5 display-4 fw-semibold text-primary">Principais produtos</h1>
         <div class="principais-produtos" class="container-fluid bs-body-color">
            <div class="row justify-content-around">
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/pochetes.jpeg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Pochete.">
                    <div class="text-center card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Pochete jeans com estampas.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/chaveiro.jpeg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Chaveiro.">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Chaveiro jeans personalizado.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/sintetica.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa.">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa sintética com forro de bagun,<br>impermeável para uso escolar ou de maquiagem.</p>
                    </div>    
                </div>
            </div>    
        </div>    
    </section>
    <section id="sessaoBlog">
      <h1 class="display-4">Blog</h1>   
      <div class="container-fluid row-">
          <div class="container-fluid leftcolumn">    
              <div class="container-fluid card_1">
                  <h2>Sustentabilidade</h2>
                  <h5>Transformando retalhos em roupas</h5>
                  <div class="container-fluid imagens">
                      <img class="img-fluid" src="img/sustentabilidade.jpg" alt="">
                  </div>
                  <p>Na cofecção suas etapas, prezam pelo respeito ao meio<br>ambiente e à sociedade, valorizando as pessoas
                   envolvidas<br>na produção e incentivando o consumo consciente.</p>
              </div>
              <div class="container-fluid card_1">
                  <h2>Beleza afrodescendente</h2>
                  <h5> O resgate social das comunidades afrodescendentes</h5>
                  <div class="container-fluid imagens">
                      <img class="img-fluid" src="img/beleza.jpeg" alt="">
                  </div>
                  <p> É a mistura de estilos e culturas, batas, turbantes, bolsas<br>com retalhos de tecidos, panos coloridos usados em roupas<br>ou para enfeitar a cabeça fazem parte das produções.</p>
              </div>
              <div class="container-fluid card_1">
                  <h2>Empreendedorismo Negro</h2>
                  <h5>Surge da necessidade de um empoderamento e busca pela igualdade</h5>
                  <div class="container-fluid imagens">
                      <img class="img-fluid" src="img/empreendedorismo.jpg" alt="">
                  </div>
                  <p> É o movimento que reúne negócios idealizados e comandados por pessoas negras (pretas e pardas).</p>
              </div>
          </div>
          <div class="container-fluid rightcolumn">
              <div class="container-fluid card_1">
                  <h3>Sobre nós</h3>
                  <div class="container-fluid fakeimg_" >
                      <img class="img-fluid" src="img/slide7.jpg" alt="">
                      <p>Ateliê Buguela confecciona bolsas, mochilas e acessórios com tecidos  diversos<br>tais como: 
                      brim, jeans<br>e sintéticos, com peças representativas do povo Afro e Afro Brasileira.</p>
                  </div>
              </div>
              <div class="container-fluid card_1">
                  <h3>Produtos populares</h3>
                  <div class="container-fluid fakeimg1">
                      <img class="img-fluid" src="img/bolsa1.jpeg" alt="">
                  </div>     
              </div>
              <div class="container-fluid fakeimg2">
                  <img class="img-fluid" src="img/pochetes2.jpg" alt="">
              </div>
              <div class="container-fluid fakeimg3">
                  <img class="img-fluid" src="img/tiracolo.jpg" alt="">
              </div>
          </div>
          <div class="container-fluid container_comment">
              <div class="head">
                  <h3>Poste um comentário:</h3>
              </div>
              <div id="qtdComentarios" class="container-fluid">
                  <span id="comment">0</span> Comentários
              </div>
              <div class="container-fluid text">
                  <p>Estamos felizes em ouvir de você</p>
              </div>
              <div class="container-fluid comments"></div>
                  <div class="container-fluid commentbox">
                      <img class="img-fluid" src="img/user_pic.png" alt="">
                      <div class="container-fluid content">
                          <h2">Comente como:</h2>
                          <input type="text" value="Anônimo" class="form-control user">
                          <div class="container-fluid commentinput">
                              <input type="text" placeholder="Digite o comentário" class="form-control usercomment">
                                <button class="btn btn-primary" type="submit" disabled id="publish">Enviar</button>
                          </div>
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