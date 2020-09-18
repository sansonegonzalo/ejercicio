import React from 'react';
import { connect } from 'react-redux';
import { discardError } from '../redux/actions/errorActions';

const ErrorAlert = ({ state, discardError }) => {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{state.errorReducer.errorMessage}</p>
      <button onClick={() => discardError()}>Volver al inicio</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    discardError: () => dispatch(discardError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
