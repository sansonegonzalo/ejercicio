import { NEW_ERROR, DISCARD_ERROR } from '../actions/errorActions';

let initialState = {
  errorState: false,
  errorMessage: '',
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ERROR:
      return {
        ...state,
        errorState: true,
        errorMessage: action.payload.msg,
      };
    case DISCARD_ERROR:
      return {
        ...state,
        errorState: false,
      };
    default:
      return state;
  }
};
