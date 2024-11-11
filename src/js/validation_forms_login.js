function validarForm() { //essa função verifica se o email é valido
    var val = document.getElementById("valido");
    try {
        var y = document.forms["meuForm"]["email"].value;
        var atpos = y.indexOf("@");
        var dotpos = y.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= y.length) {
            throw "Digite um e-mail válido!";
        }
        return true;
    } catch (err) {
        val.style.color = "#FF0000";
        val.innerHTML = "Erro: " + err;
        return false;
    } // fim do catch
} //fim da função