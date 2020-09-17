import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Ejercicio from './components/Ejercicio';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Ejercicio />
      </div>
    </Provider>
  );
}

export default App;
