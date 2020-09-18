import { ADD_MATRIZ } from '../actions/matrizActions';

const crearTablero = (cols, rows) => {
  let tablero = new Array(cols);
  let length = tablero.length;
  for (let casilla = 0; length > casilla; casilla++) {
    tablero[casilla] = new Array(rows);
  }

  return tablero;
};

const crearCroquis = (input) => {
  let tablero = crearTablero(input, input);
  let length = input;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) {
        tablero[i][j] = 'x';
        tablero[i][length - 1 - j] = 'x';
      } else {
        if (tablero[i][j] !== 'x') {
          tablero[i][j] = '_';
        }
      }
    }
  }
  return tablero;
};

let initialState = [];

export const matrizReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATRIZ:
      return crearCroquis(action.payload.num);
    default:
      return state;
  }
};
