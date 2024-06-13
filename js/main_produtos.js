export default() => {

   const templateMainProdutos = `
    <section class="text-center" id="sessaoCards">
        <h1 class="p-5 display-4 fw-semibold text-primary">Bolsas</h1>
        <div class="container-fluid principais-produtos">
            <div class="row justify-content-around">
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/bolsa7.webp" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa 1">
                    <div class="text-center card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsas com forro e estampa floral.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/bolsa2.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa 2">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa Aysha e sound bag.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/bolsa15.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa 3">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa Aysha e bolsa tiracolo.</p>
                    </div>    
                </div>
            </div>    
        </div>    
    </section>
    <section class="text-center" id="sessaoCards">
        <h1 class="p-5 display-4 fw-semibold text-primary">Pochete</h1>
        <div class="container-fluid principais-produtos">
            <div class="row justify-content-around">
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/pochete3.jpeg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Pochete 1">
                    <div class="text-center card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Pochete jeans.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/pochetes2.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Pochete 2">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Pochete jeans personalizada.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/pochetes2.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Pochete 3">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Pochetes jeans e com estampas.</p>
                    </div>    
                </div>
            </div>    
        </div>    
    </section>
    <section class="text-center" id="sessaoBolsaColo">
        <h1 class="p-5 display-4 fw-semibold text-primary">Bolsas Tira-colo</h1>
        <div class="container-fluid principais-produtos">
            <div class="row justify-content-around">
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/tiracolo.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa Tira-colo 1">
                    <div class="text-center card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa Tira Colo com estampas.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/tiracolo2.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa Tira-colo 2">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa Tira Colo com forro.</p>
                    </div>    
                </div>
                <div class="col-2 card rounded-4 border border-4 bg-primary border-primary produto">
                    <img src="img/tiracolo4.jpg" class="card-img-top mt-2 img-fluid rounded-4 border border-4 border-primary" alt="Bolsa Tira-colo 3">
                    <div class="card-body">
                        <p class="card-text pt-1 fw-semibold fs-5 text-primary">Bolsa Tira Colo com estampas variadas.</p>
                    </div>    
                </div>
            </div>    
        </div>    
    </section>`; // criando template

    const article = document.createElement('article');
    article.innerHTML = templateMainProdutos; // adicao de template na main da pagina produtos

    return article;
}