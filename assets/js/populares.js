var botao = document.getElementById("menuBurg");
botao.addEventListener("click", () => {
    let trocaImg = document.getElementById("trocaImgs")
    let ulItens = document.getElementById("navegacao").classList.toggle("ativo")
    ulItens ? trocaImg.src = "../img/home/iconsHome/close.svg" : trocaImg.src = "../img/home/iconsHome/menu.svg" 
});

document.getElementById("areaDev").addEventListener("click", () => {
    window.location = "../pag/desenvolvedores.html"
});