import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Profile from '../../components/Profile/Profile';
import TaxiOrdering from '../../components/TaxiOrdering/TaxiOrdering';

import './OrderPage.scss';

export const OrderPage = () => {
 
  const [ currentMode, setCurrentMode ] = useState('order');

  const onMapClickHandler = () => setCurrentMode('order');
  const onProfileClickHandler = () => setCurrentMode('profile');

  return (
    <div className='order-page'>
      <Header
        passedOnMapClickHandler = {onMapClickHandler}
        passedOnProfileClickHandler = {onProfileClickHandler}
      />
      { currentMode === 'order' &&
        <TaxiOrdering
          routeStartOptions={{"addresses":["Пулково (LED)","Эрмитаж","Кинотеатр Аврора","Мариинский театр"]}}
          routeEndOptions={{"addresses":["Пулково (LED)","Эрмитаж","Кинотеатр Аврора","Мариинский театр"]}}
        />
      }
      { currentMode === 'profile' && <Profile /> }
      <Map />
    </div>
  )
}

export default OrderPage;
