export const ADD_MATRIZ = 'ADD_MATRIZ';

export const addMatriz = (num) => {
  return {
    type: ADD_MATRIZ,
    payload: {
      num,
    },
  };
};
