//converte de dolar para real
//1 dolar é  5 reais
function Converter1(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valoremReal = valorEmDolarNumerico * 5;
    console.log(valoremReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "U$ " + valorEmDolarNumerico + " em Real é R$ " + valoremReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}
//converte de euro para real
//1 euro é 7 reais
function Converter2(){
    var valorElemento2 = document.getElementById("valor2");
    var valor2 = valorElemento2.value;
    var valorEmDolarNumerico2 = parseFloat(valor2);

    var valoremReal2 = valorEmDolarNumerico2 * 7;
    console.log(valoremReal2);

    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    var valorConvertido2 = "U$ " + valorEmDolarNumerico2 + " em Real é R$ " + valoremReal2;
    elementoValorConvertido2.innerHTML = valorConvertido2;

}