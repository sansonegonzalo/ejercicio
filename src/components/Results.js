import React from 'react';

const Results = ({ result }) => {
  return (
    <ul>
      {result.map((el, index) => {
        return (
          <li key={`${el.num} - ${index}`}>
            {`${el.num}: ${'*'.repeat(el.cantidad)}`}
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
