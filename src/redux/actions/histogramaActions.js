export const ADD_ARRAY = 'ADD_ARRAY';

export const addArray = (array) => {
  return {
    type: ADD_ARRAY,
    payload: {
      array,
    },
  };
};
