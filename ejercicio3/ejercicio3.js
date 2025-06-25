const tareasCompletadas = document.getElementById("tareas");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(datos) {
    var completadas = datos.filter(function(tarea) {
      return tarea.completed === true;
    });

    completadas.forEach(function(tarea) {
      var item = document.createElement("li");
      item.innerText = tarea.title;
      tareasCompletadas.appendChild(item);
    });
    
  }).catch(error => {
        console.error("error",error)
      });