import { ADD_ARRAY } from '../actions/histogramaActions';

const first = 1;
const last = 5;

const initialObject = () => {
  let arrayObj = [];

  for (let i = first; i <= last; i++) {
    arrayObj = [...arrayObj, { num: i, cantidad: 0 }];
  }

  return arrayObj;
};

const transformHistograma = (initState, array) => {
  for (let num of array) {
    initState = initState.map((obj) =>
      obj.num === num ? { ...obj, cantidad: obj.cantidad + 1 } : obj
    );
  }

  return initState;
};

export const histogramaReducer = (state = initialObject(), action) => {
  switch (action.type) {
    case ADD_ARRAY:
      return transformHistograma(initialObject(), action.payload.array);
    default:
      return state;
  }
};
