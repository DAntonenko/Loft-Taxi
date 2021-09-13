import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCardData } from '../../store/actions/card';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Profile from '../../components/Profile/Profile';
import TaxiOrdering from '../../components/TaxiOrdering/TaxiOrdering';

import './OrderPage.scss';

export const OrderPage = ({ cardNumber, expiryDate, cardName, cvc, getCardData, token, addresses }) => {
  OrderPage.propTypes = {
    cardNumber: PropTypes.string,
    expiryDate: PropTypes.string,
    cardName: PropTypes.string,
    cvc: PropTypes.string,
    getCardData: PropTypes.func,
  }
 
  const [ currentMode, setCurrentMode ] = useState('order');

  const onMapClickHandler = () => setCurrentMode('order');
  const onProfileClickHandler = () => setCurrentMode('profile');

  // Automatic switch to Profile if no card data
  useEffect(() => {
    if (
      !cardNumber ||
      !expiryDate ||
      !cardName ||
      !cvc
    ) {
      setCurrentMode('profile');
    }
  }, [cardNumber, expiryDate, cardName, cvc]);

  
  // useEffect(() => {
  //   getCardData(token);
  // });
  
  return (
    <div className='order-page'>
      <Header
        passedOnMapClickHandler = {onMapClickHandler}
        passedOnProfileClickHandler = {onProfileClickHandler}
      />
      { currentMode === 'order' && <TaxiOrdering /> }
      { currentMode === 'profile' && <Profile /> }
      <Map />
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    cardNumber: state.card.cardNumber,
    expiryDate: state.card.expiryDate,
    cardName: state.card.cardName,
    cvc: state.card.cvc,
    // token: state.auth.token,  //не забыть передавать токен
  }
}

export default connect(mapStateToProps, {getCardData})(OrderPage);
