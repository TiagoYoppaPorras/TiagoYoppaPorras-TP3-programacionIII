const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const calcularBtn = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

operacion.addEventListener("change", () => {
  if (operacion.value === "division") {
    calcularBtn.disabled = true;
  } else {
    calcularBtn.disabled = false;
  }
});

calcularBtn.addEventListener("click", () => {
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  let res;

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = "Por favor, ingresa ambos números.";
    return;
  }

  switch (operacion.value) {
    case "suma":
      res = valor1 + valor2;
      break;
    case "resta":
      res = valor1 - valor2;
      break;
    case "multiplicacion":
      res = valor1 * valor2;
      break;
    default:
      res = "Operación no válida";
  }

  resultado.textContent = `Resultado: ${res}`;
});
