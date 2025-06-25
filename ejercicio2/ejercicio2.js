const palabras = ["manzana", "banana", "pera", "durazno", "frrtilla", "mango"];

function mostrarTodas() {
  var lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (var i in palabras) {
    var item = document.createElement("li");
    item.innerText = palabras[i];
    lista.appendChild(item);
  }
}

function filtrarPalabras() {
  var texto = document.getElementById("buscar").value.toLowerCase();
  var lista = document.getElementById("lista");
  var error = document.getElementById("error");

  lista.innerHTML = "";
  error.innerText = "";

  if (texto === "") {
    error.innerText = "escribí algo, no puede estar vacio";
    return;
  }

  for (var i in palabras) {
    if (palabras[i].includes(texto)) {
      var item = document.createElement("li");
      item.innerText = palabras[i];
      lista.appendChild(item);
    }
  }
}

mostrarTodas();
