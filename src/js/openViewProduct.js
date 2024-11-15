//quando clicar no botão "ver detalhes do produto", o container vai aparecer.
function openViewProduct() {
    /*ALERT USADO SOMENTE PARA TESTE DE FUNCIONAMENTO*/
    // alert("Eu sou um alert!");
  
    // Exibe a div modal
    document.getElementById("ContainerDetalhesProduto").style.display = "block";
    document.getElementById("idCloseDetalhesProduto").style.display = "block";
  }
  
  //quando clicar no botão "X", o container vai desaparecer.
  function closeViewProduct() {
    // Oculta a div modal
    document.getElementById("ContainerDetalhesProduto").style.display = "none";
  }
  