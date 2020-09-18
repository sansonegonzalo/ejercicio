import { combineReducers } from 'redux';
import { histogramaReducer } from './histogramaReducer';
import { matrizReducer } from './matrizReducer';
import { errorReducer } from './errorReducer';

export default combineReducers({
  matrizReducer,
  histogramaReducer,
  errorReducer,
});
