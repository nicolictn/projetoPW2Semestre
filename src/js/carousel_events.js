// utiliza a variável "E" como parâmetro (pega o valor do HTML)
function direcao(e){
    //armazena na variável "direcao" do slide 01
    var direcao = document.getElementById("contentSlide");

    //caso o botão esquerdo tenha sido acionado, ele dá um scroll para a esquerda.
    if(e == 1) {
        //manipula o comportamento de rolagem horizontal
        //esquerda
        //variável que guardamos o container do slide  + prorpiedade que indica quantos pixels o elemento dele rolar (- 200 é esquerda)
        direcao.scrollLeft = direcao.scrollLeft - 200;

    } else if(e == 2) {
        //direita

        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}

// utiliza a variável "F" como parâmetro
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