import React, { useState, useEffect } from 'react';
import { initialState } from '../constants';

const EjercicioUno = ({ listaNum }) => {
  const [list, setList] = useState(() => initialState);

  const transformList = (listNum, listObj) => {
    let arrayLength = listNum.length;

    for (let i = 0; i < arrayLength; i++) {
      let num = listaNum[i];
      listObj = listObj.map((state) =>
        state.num === num ? { ...state, cantidad: state.cantidad + 1 } : state
      );
    }

    return listObj;
  };

  const filtrarLista = (lista) => {
    let list = lista;

    list = list.filter((char) => !isNaN(char) && char !== ' ');

    return list.map((number) => parseInt(number));
  };

  useEffect(() => {
    let lista = Array.from(listaNum);
    lista = filtrarLista(lista);

    setList(transformList(lista, list));
  }, [listaNum]);

  const addStar = (num) => {
    return '*'.repeat(num);
  };

  return (
    <ul>
      {list.map((element, index) => {
        return (
          <li key={`${element} - ${index}`}>
            {`${element.num}: ${addStar(element.cantidad)}`}
          </li>
        );
      })}
    </ul>
  );
};

export default EjercicioUno;
