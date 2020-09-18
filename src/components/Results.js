import React from 'react';
import { HISTOGRAMA } from '../constants';

const Results = ({ result, ejercicio }) => {
  return (
    <>
      {result.map((el, index) => {
        return (
          <p key={`${el} - ${index}`}>
            {ejercicio === HISTOGRAMA
              ? `${el.num}: ${'*'.repeat(el.cantidad)}`
              : `${el.join('')}`}
          </p>
        );
      })}
    </>
  );
};

export default Results;
