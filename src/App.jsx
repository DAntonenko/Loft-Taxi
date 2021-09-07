import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCardData } from './store/actions/card';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

export const App = ({ isLoggedIn, token, getCardData, error }) => {
  App.propTypes = {
    isLoggedIn: PropTypes.bool,
    token: PropTypes.string,
    getCardData: PropTypes.func,
    error: PropTypes.object,
  }

  useEffect(() => {
    if (token) {
      getCardData(token);
    }
  })

  return (
    <div className='App'>
      {error && <p style={{backgroundColor: 'red'}}>:0 А-А-А!!! {error.error}!!!</p>}
      <h1 className='visually-hidden' data-testid='main-heading'>Loft-Taxi</h1>
      {!isLoggedIn && <StartPage />}
      {isLoggedIn && <OrderPage />}
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    token: state.auth.token,
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error,
  }
}

export default connect(mapStateToProps, {getCardData})(App);
