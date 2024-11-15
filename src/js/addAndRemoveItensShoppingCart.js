/* UTILIZANDO LOCALSTORAGE */
//localstorage = armazenamento local no browser(navegador)
//método JSON -> armazenamento de dados
const produtosEventos = {
    produtos: [
        {
            "imgProduto": "/assets/imgs/imgs_page_products/moletom_scott.png",
            "nomeProduto": "Moletom Travis Scott", 
            "valorProduto": 71.30,
            "idProduto": 0 //mesmo id do html (id usado no parâmetro da função adicionarProdutoNoCarrinho)

        },
        {   
            "imgProduto": "/assets/imgs/imgs_page_products/bone_travis.jpg",
            "nomeProduto": "Boné Travis Scott", 
            "valorProduto": 123.99,
            "idProduto": 1
        }
    ]
};

/*PRIMEIRO ELEMENTO DO CATÁLOGO (EXIBIÇÃO NA TELA PRONTA)-> ALTERAÇÃO NO CONTAINER HTML*/
document.getElementById("imgProduct01").src = produtosEventos.produtos[0].imgProduto;
document.getElementById("nameProduct01").innerHTML = produtosEventos.produtos[0].nomeProduto;
document.getElementById("priceProduct01").innerHTML = "R$ " + produtosEventos.produtos[0].valorProduto;

/*SEGUNDO ELEMENTO DO CATÁLOGO (EXIBIÇÃO NA TELA PRONTA -> ALTERAÇÃO NO CONTAINER HTML*/
document.getElementById("imgProduct02").src = produtosEventos.produtos[1].imgProduto;
document.getElementById("nameProduct02").innerHTML = produtosEventos.produtos[1].nomeProduto;
document.getElementById("priceProduct02").innerHTML = "R$ " + produtosEventos.produtos[1].valorProduto;

//função que será utilizada para adicionar o produto no carrinho -> quando manda um parâmetro, deve recebê-lo
//parâmetro usado é o mesmo id que o html e do objeto
function adicionarProdutoNoCarrinho(idProduto) {
    // Encontra o produto com base no ID
    const produto = produtosEventos.produtos.find(p => p.idProduto === idProduto);
    
    // if (produto) {
        // Recupera o carrinho do localStorage ou inicializa um array vazio
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        
        // Verifica se o produto já existe no carrinho
        const produtoExistente = carrinho.find(item => item.idProduto === idProduto);
        
        // if (produtoExistente) {
            // Se o produto já está no carrinho, você pode optar por ignorar ou atualizar a quantidade
            // alert("Produto já está no carrinho.");
        // } else {
            // Adiciona o produto ao carrinho
            carrinho.push(produto);
            
            // Salva o carrinho atualizado no localStorage
            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            // Exibe o carrinho atualizado
            exibirCarrinho();
        // }
    // }
}

function exibirCarrinho() {
    // seta as variaveis que vamos usar
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    //pega o carrinho existente ou cria um

    let totalProdutos = 0;
    //querySelector -> pega qualquer um do documento html
    //container do HTML
    let cartContainer = document.querySelector(".cart-container");

    // Limpa a exibicao do carrinho
    //é necessário realizar o clear da exibição (e não dos dados armazenados) para que não haja sobreposição de elementos
    cartContainer.innerHTML = "<h1>Carrinho de Compras</h1>";
    //usa como parâmetro o título pois ele nunca muda no layout

    // Adicionar cada produto ao carrinho no html
    carrinho.forEach((produto, index) => {
        totalProdutos += produto.valorProduto;

        cartContainer.innerHTML += `
        <div class="productShoppingCart">
            <button onclick="closeShoppingCart()" id="idCloseShoppingCart">X</button>
              <img src="${produto.imgProduto}" alt="${produto.nomeProduto}" class="product-image" id="imgProductAdicionado01">
              <div class="product-details">
              <h2 id="nameProductAdicionado01">
              ${produto.nomeProduto}
              </h2>
              <p class="price" id="priceProductAdicionado01"> R$
              ${produto.valorProduto}
              </p>
              <button class="remove-from-cart" onclick="removerProdutoDoCarrinho(${index})">Remover do Carrinho</button>
              </div>
          </div>
        `
    });

    // Atualiza o total do carrinho
    cartContainer.innerHTML += `
    <div class="cart-summary">
          <h3>Resumo do Pedido</h3>
          <p>Total: <span id="cart-total">R$ ${totalProdutos}</span></p>
          <button class="checkout-btn">Finalizar Compra</button>
      </div>
    `
    openShoppingCart();
}

function removerProdutoDoCarrinho(index) {
    // Recupera o carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Verifica se o índice é válido
    if (index >= 0 && index < carrinho.length) {
        // Remove o item do carrinho usando o índice
        carrinho.splice(index, 1);

        // Atualiza o localStorage com o novo carrinho
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // Exibe o carrinho atualizado
        exibirCarrinho();

        // Exibe uma mensagem de sucesso
    //     alert("Produto removido do carrinho com sucesso!");
    // } else {
    //     alert("Erro ao remover o produto. Índice inválido.");
    }
}


    // função que irá guardar o produto no carrinho quando clicar no botão "ADICIONAR" -> PRODUTO01
    // function adicionarProdutoNoCarrinho01() {
        //chama a função que abre o carrinho
        // addEventListener(openShoppingCart());
        // openShoppingCart();
        // NESSE CASO, O PRODUTO JÁ ESTÁ CRIADO COMO OBJETO. É NECESSÁRIO UM GETITEM PARA RECUPERÁ-LO 
        // recupera o item/dado -> cria-se a variável e depois indica o nome do item
        // localStorage.setItem("imgProduto", produtosEventos.produtos[0].imgProduto01);
        // localStorage.setItem("nomeProduto", produtosEventos.produtos[0].nomeProduto01);
        // localStorage.setItem("precoProduto", produtosEventos.produtos[0].valorProduto01);

        // recupera os dadooooooooooooooooooooooooooos
        // var imgProdutoRecuperado = localStorage.getItem("imgProduto");
        // var nomeProdutoRecuperado = localStorage.getItem("nomeProduto");
        // var precoProdutoRecuperado = localStorage.getItem("precoProduto");

    //TRAZER COMO ENTRADA DE MÉTODO ADDEVENTLISTENER -> ABRIR CARRINHO
    
    /*PRIMEIRO ELEMENTO DO CARRINHO -> ALTERAÇÃO NO CONTAINER HTML*/
//     document.getElementById("imgProductAdicionado01").src = imgProdutoRecuperado;
//     document.getElementById("nameProductAdicionado01").innerHTML = nomeProdutoRecuperado;
//     document.getElementById("priceProductAdicionado01").innerHTML = "R$ " + parseFloat(precoProdutoRecuperado).toFixed(2);
//  }

 // função que irá guardar o produto no carrinho quando clicar no botão "ADICIONAR" -> PRODUTO02
//  function adicionarProdutoNoCarrinho02() {

//     openShoppingCart();

//     localStorage.setItem("imgProduto", produtosEventos.produtos[1].imgProduto02);
//     localStorage.setItem("nomeProduto", produtosEventos.produtos[1].nomeProduto02);
//     localStorage.setItem("precoProduto", produtosEventos.produtos[1].valorProduto02);

//     var imgProdutoRecuperado = localStorage.getItem("imgProduto");
//     var nomeProdutoRecuperado = localStorage.getItem("nomeProduto");
//     var precoProdutoRecuperado = localStorage.getItem("precoProduto");

//     document.getElementById("imgProductAdicionado02").src = imgProdutoRecuperado;
//     document.getElementById("nameProductAdicionado02").innerHTML = nomeProdutoRecuperado;
//     document.getElementById("priceProductAdicionado02").innerHTML = "R$ " + parseFloat(precoProdutoRecuperado).toFixed(2);
//     }


 // remove o item indicado
//  function removerProdutoDoCarrinho01(id) {
    // console.log("nicoli");
    //precisa-se de um parâmetro para indicar o que 
    // localStorage.setItem("imgProduto", produtosEventos.produtos[1].imgProduto02);
    // localStorage.setItem("nomeProduto", produtosEventos.produtos[1].nomeProduto02);
    // localStorage.setItem("precoProduto", produtosEventos.produtos[1].valorProduto02);

    // var imgProdutoRecuperado = localStorage.getItem("imgProduto");
    // var nomeProdutoRecuperado = localStorage.getItem("nomeProduto");
    // var precoProdutoRecuperado = localStorage.getItem("precoProduto");

    // document.getElementById("imgProductAdicionado02").src = imgProdutoRecuperado;
    // document.getElementById("nameProductAdicionado02").innerHTML = nomeProdutoRecuperado;
    // document.getElementById("priceProductAdicionado02").innerHTML = "R$ " + parseFloat(precoProdutoRecuperado).toFixed(2);
    

    //  localStorage.removeItem("imgProduto");
    //  localStorage.removeItem("nomeProduto");
    //  localStorage.removeItem("precoProduto");

    //  // Limpa a exibição do produto no carrinho
    //  document.getElementById("imgProductAdicionado01").src = "";
    //  document.getElementById("nameProductAdicionado01").innerHTML = "";
    //  document.getElementById("priceProductAdicionado01").innerHTML = "";

    //  document.getElementById("cart-total").innerHTML = "R$ 0,00";
 
     // Recarrega a página para atualizar o estado visual do carrinho
    //  closeShoppingCart();

    //  location.reload();
    //  alert("tmnc caralho funciona fdp");
//  }








