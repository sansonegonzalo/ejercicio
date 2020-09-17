import React, { useState } from 'react';
import EjercicioUno from './components/EjercicioUno';

var myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];

function App() {
  const [inputOne, setInputOne] = useState('');
  const [convert, setConvert] = useState(false);

  const handleInput = (e) => setInputOne(e.target.value);

  const handleKeyPress = (e) => (e.key === 'Enter' ? handleConvert() : null);

  const handleConvert = (_) => setConvert(true);

  return (
    <div>
      <input
        required
        type={'text'}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        placeholder={'Ejercicio 1'}
      />
      <label onClick={() => handleConvert()} />
      <button onSubmit={() => handleConvert()}> Convertir </button>
      {convert ? <EjercicioUno listaNum={inputOne} /> : null}
    </div>
  );
}

export default App;
