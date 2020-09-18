import React, { useState } from 'react';
import Results from './Results';
import { HISTOGRAMA } from '../constants';
import { connect } from 'react-redux';
import { newError } from '../redux/actions/errorActions.js';
import { addArray } from '../redux/actions/histogramaActions';
import { addMatriz } from '../redux/actions/matrizActions';

const Ejercicio = ({ newError, addArray, addMatriz, state, ejercicio }) => {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  const condition = ejercicio === HISTOGRAMA;

  const transformedArray = (input) => {
    input = Array.from(input);
    input = input.filter((el) => !isNaN(el) && el !== ' ');
    return condition
      ? input.map((el) => parseInt(el))
      : parseInt(input.map((el) => parseInt(el)).join(''));
  };

  const handleClick = () => {
    if (input > 0) {
      setShow(true);
      condition
        ? addArray(transformedArray(input))
        : addMatriz(transformedArray(input));
    } else {
      for (let input of document.getElementsByTagName('input')) {
        input.value = '';
      }
      newError('Tiene que poner un numero mayor 0');
    }
  };

  const handleChange = (text) =>
    show ? setShow(false) && setInput(text) : setInput(text);

  return (
    <>
      <input
        placeholder={condition ? 'Primer ejercicio' : 'Segundo ejercicio'}
        type="text"
        onKeyPress={(e) => (e.key === 'Enter' ? handleClick() : null)}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => handleClick()}>Convertir</button>
      {show ? (
        <Results
          ejercicio={ejercicio}
          result={condition ? state.histogramaReducer : state.matrizReducer}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMatriz: (num) => dispatch(addMatriz(num)),
    addArray: (array) => dispatch(addArray(array)),
    newError: (msg) => dispatch(newError(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ejercicio);
