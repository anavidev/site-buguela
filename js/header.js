export default() => {

    const templateHeader = `
    <div class="container-fluid bg-primary">
        <a class="navbar-brand" href="#home">
            <img id="fotoLogo" src="img/logo.png" alt="Logo" width="60" height="70" class="d-inline-block align-text-left text-primary">
        </a>
    </div>   
        <ul class="bg-primary nav nav-underline justify-content-around w-100">
            <li class="nav-item"> 
                <a class="nav-link text-primary fw-semibold fs-2" href="#home">Home</a>
            </li>   
            <li class="nav-item">
                <a class="nav-link text-primary fw-semibold fs-2" href="#produtos">Produtos</a>
            </li>    
            <li class="nav-item">
                <a class="nav-link text-primary fw-semibold fs-2" href="#sobre">Sobre</a>
            </li>    
        </ul>`; // criacao de template

    const nav = document.createElement('nav');
    nav.innerHTML = templateHeader; // adicao de template na nav

    return nav;
}