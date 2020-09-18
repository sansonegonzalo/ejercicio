export const NEW_ERROR = 'NEW_ERROR';
export const DISCARD_ERROR = 'DISCARD_ERROR';

export const newError = (msg) => {
  return {
    type: NEW_ERROR,
    payload: {
      msg,
    },
  };
};

export const discardError = () => {
  return {
    type: DISCARD_ERROR,
  };
};
