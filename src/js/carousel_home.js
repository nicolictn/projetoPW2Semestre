let count = 1; //declaramos essa variavel com o valor 1
      
setInterval(function () { //setInterval é uma função de intervalo de tempo
  nextImage(); //  chama a função a cada 3s para mudar a imagem
}, 3000); // muda a cada 3000ms ou seja 3s

function nextImage() { // função
  count++;
  if (count > 3) { //se o contador chegar na ultima imagem, ele é redefinido para a 1, fazendo com que o slide volte a primeira imagem
    count = 1;
  }
  document.getElementById("radio" + count).checked = true; //acessa o elemento com o id correspondente, e altera seu estado para checked
}