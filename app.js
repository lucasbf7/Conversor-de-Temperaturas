function Converter() {
    var valorTemperatura = document.getElementById("celsius");
    var valor = valorTemperatura.value;
    var valorTempNumerico = parseFloat(valor);
  
    var valorFarenheit = (9 / 5) * valorTempNumerico + 32;
    var vf = document.getElementById("valorConvertido");
    var valorConvertido = "Está fazendo " + valorFarenheit + "°F";
    vf.innerHTML = valorConvertido;
  }
  