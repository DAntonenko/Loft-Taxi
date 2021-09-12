import React, { useEffect }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';
import { getAddressesList } from './store/actions/addresses';

import './common_styles/App.scss';

export const App = ({ isLoggedIn, error, getAddressesList }) => {
  App.propTypes = {
    isLoggedIn: PropTypes.bool,
    error: PropTypes.object,
  }

  useEffect(() => {
    console.log('effect starts and must start getAddressesList action')
    getAddressesList();
  });


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
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error,
  }
}

export default connect(mapStateToProps, { getAddressesList })(App);
