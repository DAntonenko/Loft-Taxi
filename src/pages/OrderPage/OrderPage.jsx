import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCardData } from '../../store/actions/card';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Profile from '../../components/Profile/Profile';
import TaxiOrdering from '../../components/TaxiOrdering/TaxiOrdering';

import './OrderPage.scss';

export const OrderPage = ({ cardNumber, expiryDate, cardName, cvc, getCardData }) => {
  OrderPage.propTypes = {
    cardNumber: PropTypes.number,
    expiryDate: PropTypes.string,
    cardName: PropTypes.string,
    cvc: PropTypes.number,
    getCardData: PropTypes.func,
  }
 
  const [ currentMode, setCurrentMode ] = useState('order');

  const onMapClickHandler = () => setCurrentMode('order');
  const onProfileClickHandler = () => setCurrentMode('profile');

  // useEffect(() => {
  //   if (
  //     !cardNumber ||
  //     !expiryDate ||
  //     !cardName ||
  //     !cvc
  //   ) {
  //     setCurrentMode('profile');
  //   }
  // })

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

const mapStateToProps = function (state) {
  return {
    cardNumber: state.card.cardNumber,
    expiryDate: state.card.expiryDate,
    cardName: state.card.cardName,
    cvc: state.card.cvc,
  }
}

export default connect(mapStateToProps, {getCardData})(OrderPage);
