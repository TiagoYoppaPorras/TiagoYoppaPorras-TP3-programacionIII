    function CalculadoraIMC() {
      const [masa, setMasa] = React.useState('');
      const [alturaEnMetros, setAlturaEnMetros] = React.useState('');
      const [indice, setIndice] = React.useState(null);
      const [texto, setTexto] = React.useState('');
      const [claseColor, setClaseColor] = React.useState('');

      function manejarCalculo() {
        const m = parseFloat(masa);
        const h = parseFloat(alturaEnMetros);

        if (isNaN(m) || isNaN(h) || m <= 0 || h <= 0) {
          setTexto('ingrese números válidos');
          setClaseColor('negro');
          setIndice(null);
          return;
        }

        const imcResultado = m / (h * h);
        setIndice(imcResultado);

        if (imcResultado < 18.5) {
          setTexto('Peso bajo');
          setClaseColor('yellow');
        } else if (imcResultado >= 18.5 && imcResultado <= 24.9) {
          setTexto('Peso normal');
          setClaseColor('green');
        } else if (imcResultado >= 25 && imcResultado <= 29.9) {
          setTexto('Sobrepeso');
          setClaseColor('orange');
        } else {
          setTexto('Obesidad');
          setClaseColor('red');
        }
      }

      return (
        <div>
          <h1>IMC</h1>
          <h2>ingrese el peso:</h2>
          <input type="number" value={masa} onChange={(e) => setMasa(e.target.value)}/>
          <h3>ingrese la altura :</h3>
          <input type="number" value={alturaEnMetros} onChange={(e) => setAlturaEnMetros(e.target.value)}/>
          <br />
          <button onClick={manejarCalculo}>CALCULAR IMC</button>
          <br /><br />
          {indice && (
            <div>
              <h3>TU IMC ES: {indice.toFixed(2)}</h3>
              <p className={claseColor}>{texto}</p>
            </div>
          )}
        </div>
      );
    }

    const contenedor = ReactDOM.createRoot(document.getElementById('root'));
    contenedor.render(<CalculadoraIMC />);