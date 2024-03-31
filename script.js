function calcularIMC() {
  const alturaInput = document.getElementById("altura");
  const pesoInput = document.getElementById("peso");
  const resultado = document.getElementById("resultado");

  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.innerHTML = "Por favor, insira valores válidos para altura e peso.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Acima do peso";
  } else if (imc < 35) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }

  resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
}
