function botaoConverter() {
    var valorEmDolar = document.getElementById("valorEmDolar").value

    if (isNaN(valorEmDolar) || valorEmDolar.trim() === "") {   
      document.getElementById("exibirValorConvertido").innerHTML = "Insira um valor numérico válido!"
        return;
    }
    
    
    var cotacaoDoDolar = 5.32;
    var valorEmReal = valorEmDolar * cotacaoDoDolar

    valorEmReal = valorEmReal.toFixed(2)

    console.log("O valor convertido é: R$ " + valorEmReal)
    document.getElementById("exibirValorConvertido").innerHTML = valorEmReal;
}

