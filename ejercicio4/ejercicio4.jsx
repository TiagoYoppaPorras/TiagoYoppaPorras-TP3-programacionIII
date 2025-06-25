    function App() {
      const [botonActivo, setBotonActivo] = React.useState("izquierdo");

      function manejarIzquierdo() {
        setBotonActivo("derecho");
      }
      function manejarDerecho() {
        setBotonActivo("izquierdo");
      }

      return (
        <div>
          <h1>Botones ej4 </h1>
          <button onClick={manejarIzquierdo} disabled={botonActivo !== "izquierdo"}>
            Izquierdo
          </button>
          <button onClick={manejarDerecho} disabled={botonActivo !== "derecho"}>
            Derecho
          </button>
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);