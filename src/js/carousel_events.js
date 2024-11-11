function direcao(e){
    var direcao = document.getElementById("contentSlide");

    if(e == 1) {
        //esquerda

        direcao.scrollLeft = direcao.scrollLeft - 200;

    } else if(e == 2) {
        //direita

        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}

function direcao02(f){
    var direcao02 = document.getElementById("contentSlide02");

    if(f == 1) {
        //esquerda

        direcao02.scrollLeft = direcao02.scrollLeft - 200;

    } else if(f == 2) {
        //direita

        direcao02.scrollLeft = direcao02.scrollLeft + 200;
    }
}