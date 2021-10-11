var botao = document.getElementById("menuBurg");
botao.addEventListener("click", () => {
    let trocaImg = document.getElementById("trocaImgs")
    let ulItens = document.getElementById("navegacao").classList.toggle("ativo")
    ulItens ? trocaImg.src = "assets/img/home/iconsHome/close.svg" : trocaImg.src = "assets/img/home/iconsHome/menu.svg" 
});

/* Funções dos dois botões da área de chegada */

document.getElementById("btnconhecaNos").addEventListener("click", () => {
    window.location = "#sobre"
});
document.getElementById("btnlocalizacao").addEventListener("click", () => {
    window.location = "#localizacao"
});

/* Função do botão que leva a pagina de melhores pratos */

document.getElementById("btnReserva").addEventListener("click", () => {
    window.location = "assets/pag/reserva.html"
});

document.getElementById("butaoPopulares").addEventListener("click", () => {
    window.location = "assets/pag/populares.html"
});

/* Função para levar a área do contato dos dev */

document.getElementById("areaDev").addEventListener("click", () => {
    window.location = "assets/pag/desenvolvedores.html"
});

/* Função para ocultar o map */


document.getElementById("btnOcultar").addEventListener("click", () => {
    let maps = document.getElementById("areamaps")
    let resposta = maps.classList.toggle("ativador")
    if (resposta == true) {
        maps.style.display = "block"  
        document.getElementById("btnOcultar").innerHTML = "Ocultar Map <span id='iconMap'> <img src='assets/img/home/iconsHome/map.svg'> </span>"
    } else {
        maps.style.display = "none"
        document.getElementById("btnOcultar").innerHTML = "Mostar Map <span id='iconMap'> <img src='assets/img/home/iconsHome/map.svg'> </span>"
    }
});

/* Verificador caso o usuario saia com o tela de menu aberta  */
window.addEventListener('resize', function (){
	document.getElementById("navegacao").classList.remove("ativo")
    document.getElementById("trocaImgs").src = "assets/img/home/iconsHome/menu.svg"
}) 