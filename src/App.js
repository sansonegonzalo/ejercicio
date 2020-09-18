import React from 'react';
import { connect } from 'react-redux';
import Ejercicio from './components/Ejercicio';
import ErrorAlert from './components/ErrorAlert';
import { HISTOGRAMA, MATRIZ } from './constants';

function App({ state }) {
  return (
    <div>
      {state.errorReducer.errorState ? (
        <ErrorAlert />
      ) : (
        <>
          <Ejercicio ejercicio={HISTOGRAMA} />
          <Ejercicio ejercicio={MATRIZ} />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(App);
