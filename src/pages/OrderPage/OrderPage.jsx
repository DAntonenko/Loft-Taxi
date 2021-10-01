import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCardData } from '../../store/actions/card';
import { getRoute } from '../../store/actions/map';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Profile from '../../components/Profile/Profile';
import TaxiOrdering from '../../components/TaxiOrdering/TaxiOrdering';

import './OrderPage.scss';

export const OrderPage = ({ isCardData, getCardData, token, startAddress, endAddress, getRoute}) => {
  OrderPage.propTypes = {
    getCardData: PropTypes.func,
    isCardData: PropTypes.bool,
  }
 
  const [ currentMode, setCurrentMode ] = useState('order');

  const onMapClickHandler = () => setCurrentMode('order');
  const onProfileClickHandler = () => setCurrentMode('profile');

  // Automatic switch to Profile if no card data
  useEffect(() => {
    if (!isCardData) {
      setCurrentMode('profile');
    }
  }, [isCardData]);
  
  useEffect(() => {
    getCardData(token);
  });

  useEffect(() => {
    if (startAddress && endAddress) {
      getRoute(startAddress, endAddress);
    }
  });
  
  return (
    <div className='order-page'>
      <Header
        passedOnMapClickHandler = {onMapClickHandler}
        passedOnProfileClickHandler = {onProfileClickHandler}
      />
      { currentMode === 'order' && <TaxiOrdering /> }
      { currentMode === 'profile' && <Profile passedOnMapClickHandler = {onMapClickHandler} /> }
      <Map />
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    isCardData: state.card.isCardData,
    token: state.auth.token,
    startAddress: state.addresses.startAddress,
    endAddress: state.addresses.endAddress,
  }
}

export default connect(mapStateToProps, {getCardData, getRoute})(OrderPage);
