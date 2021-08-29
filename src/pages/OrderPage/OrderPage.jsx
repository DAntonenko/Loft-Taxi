import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Profile from '../../components/Profile/Profile';

import './OrderPage.scss';

const OrderPage = () => {
 
  const [ currentMode, setCurrentMode ] = useState('order');

  const onMapClickHandler = () => setCurrentMode('order');
  const onProfileClickHandler = () => setCurrentMode('profile');

  return (
    <div className='order-page'>
      <Header
        passedOnMapClickHandler = {onMapClickHandler}
        passedOnProfileClickHandler = {onProfileClickHandler}
      />
      { currentMode === 'order' && <p>Заказать такси</p> }
      { currentMode === 'profile' && <Profile /> }
      <Map />
    </div>
  )
}

export default OrderPage;
