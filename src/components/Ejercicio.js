import React, { useState } from 'react';
import Results from './Results';
import { connect } from 'react-redux';
import { addArray } from '../redux/actions/histogramaActions';

const Ejercicio = ({ addArray, state }) => {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  const transformedArray = (input) => {
    input = Array.from(input);
    input = input.filter((el) => !isNaN(el) && el !== ' ');
    return input.map((el) => parseInt(el));
  };

  const handleClick = () => {
    setShow(true);
    addArray(transformedArray(input));
  };

  const handleChange = (text) =>
    show ? setShow(false) && setInput(text) : setInput(text);

  return (
    <>
      <input
        placeholder={'Primer ejercicio'}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => handleClick()}>Convertir</button>
      {show ? <Results result={state.histogramaReducer} /> : null}
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
    addArray: (array) => dispatch(addArray(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ejercicio);
