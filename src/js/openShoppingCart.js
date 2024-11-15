/*open html shopping cart*/

function openShoppingCart() {
  /*ALERT USADO SOMENTE PARA TESTE DE FUNCIONAMENTO*/
  // alert("Eu sou um alert!");

  // Exibe a div modal
  document.getElementById("modalContainer").style.display = "block";
  document.getElementById("idCloseShoppingCart").style.display = "block";
}

function closeShoppingCart() {
  // Oculta a div modal
  document.getElementById("modalContainer").style.display = "none";
}
