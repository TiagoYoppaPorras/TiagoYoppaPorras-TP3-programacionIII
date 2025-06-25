function App() {
      const [num1, setNum1] = React.useState("");
      const [num2, setNum2] = React.useState("");
      const [operacion, setOperacion] = React.useState("suma");
      const [resultado, setResultado] = React.useState("");

      function calcular() {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res = 0;

        if (operacion === "suma") res=a + b;
        else if (operacion === "resta") res=a - b;
        else if (operacion === "multiplicacion") res=a * b;

        setResultado("Resultado: " + res);
      }

      return (
        <div>
          <h2>Calculadora ej 5</h2>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <br />   
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
        <br />

        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
            <option value="suma">SUMA</option>
            <option value="resta">RESTA</option>
            <option value="multiplicacion">MULTIPLICACION</option>
            <option value="division">DIVISÍON</option>
        </select>
        <br />

        <button onClick={calcular} disabled={operacion === "division"}>CALCULARR</button>

        <p>{resultado}</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);