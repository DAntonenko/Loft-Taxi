import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';

import './OrderPage.scss';

const OrderPage = ({ navigate }) => {
  OrderPage.propTypes = {
    navigate: PropTypes.func,
  }
 
  const [ currentMode, setCurrentMode ] = useState('order');

  const onMapClickHandler = () => setCurrentMode('order');
  const onProfileClickHandler = () => setCurrentMode('profile');

  return (
    <div className='order-page'>
      <Header
        passedOnMapClickHandler = {onMapClickHandler}
        passedOnProfileClickHandler = {onProfileClickHandler}
        navigate = {navigate}
      />
      { currentMode === 'order' && <p>Заказать такси</p> }
      { currentMode === 'profile' && <p>Профиль</p> }
      <Map />
    </div>
  )
}

export default OrderPage;
