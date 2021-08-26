import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from './AuthContext';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

const App = ({ isLoggedIn }) => {
  App.propTypes = {
    nisLoggedIn: PropTypes.bool,
  }

  const [ currentPage, setCurrentPage ] = useState('startPage');

  const navigateTo = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className='App'>
      <h1 className='visually-hidden'>Loft-Taxi</h1>
      {currentPage === 'startPage' && <StartPage navigate={navigateTo} />}
      {currentPage === 'orderPage' && isLoggedIn && <OrderPage navigate={navigateTo}/>}
    </div>
  );
}

export default withAuth(App);
