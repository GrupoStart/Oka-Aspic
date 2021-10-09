var botao = document.getElementById("menuBurg")
var troca = document.getElementById("troca")
botao.addEventListener("click", () => {
    botao.classList.toggle("ativo") ? troca.src = "assets/image/icons/x.svg" : troca.src = "assets/image/icons/menu.svg" 
})

/* Funções dos dois botões da área de chegada */

document.getElementById("btnconhecaNos").addEventListener("click", () => {
    window.location = "#sobre"
})
document.getElementById("btnlocalizacao").addEventListener("click", () => {
    window.location = "#localizacao"
})

/* Função do botão que leva a pagina de melhores pratos */

document.getElementById("btnFaleConosco").addEventListener("click", () => {
    window.location = "assets/pages/contatos.html"
})

document.getElementById("butaoPopulares").addEventListener("click", () => {
    window.location = "assets/pages/populares.html"
})

/* Função para ocultar o map */

document.getElementById("btnOcultar").addEventListener("click", () => {
    var maps = document.getElementById("areamaps")
    var resposta = maps.classList.toggle("ativador")
    if (resposta == true) {
        maps.style.display = "none"  
        document.getElementById("btnOcultar").innerHTML = "Mostrar Map <span id='iconMap'> <img src='assets/image/icons/map.svg'> </span>"
    } else {
        maps.style.display = "block"
        document.getElementById("btnOcultar").innerHTML = "Ocultar Map <span id='iconMap'> <img src='assets/image/icons/map.svg'> </span>"
    }
})
