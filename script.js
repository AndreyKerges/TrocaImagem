document.addEventListener("DOMContentLoaded", function () {

    const botaoTrocar = document.getElementById("button");
    const imagemExibida = document.getElementById("imagemExibida");


    const urlsImagens = ["img/ney.png", "img/cr7.png", "img/messi.png", "img/soares.png"];
    let indiceAtual = 0;


    botaoTrocar.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % urlsImagens.length;
        imagemExibida.src = urlsImagens[indiceAtual];
    });
});