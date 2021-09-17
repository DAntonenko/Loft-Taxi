import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCard } from '../../store/actions/card';
import Input from '../Input/Input'
import Button from '../Button/Button';

import './Profile.scss';

export const Profile = ({ setCard, token, passedOnMapClickHandler }) => {
  Profile.propTypes = {
    setCard: PropTypes.func,
  }

  return (
    <div className='profile'>
      <div className='profile__window'>
        <h2 className='profile__title'>Профиль</h2>
        <p className='profile__subtitle'>Введите платёжные данные</p>
        <section className='profile__card-data'>
          <form
            id='cardDataForm'
            className='profile__form'
            onSubmit={(e) => {
              e.preventDefault();
              const cardNameInput = e.nativeEvent.target[0];
              const cardNumberInput = e.nativeEvent.target[1];
              const expiryDateInput = e.nativeEvent.target[2];
              const cvcInput = e.nativeEvent.target[3];
              setCard(cardNumberInput.value, expiryDateInput.value, cardNameInput.value, cvcInput.value, token);
              passedOnMapClickHandler();
            }}
          >
            <Input className='profile__input' id='name' type='text' name='name' placeholder='Loft' label='Имя владельца' />
            <Input className='profile__input' id='number' type='number' name='number' placeholder='5545 2300 3432 4521' label='Номер карты' />
            <Input className='profile__input profile__input--narrow' id='date' type='number' name='date' placeholder='05/08' label='MM/YY' />
            <Input className='profile__input profile__input--narrow' id='cvc' type='number' name='cvc' placeholder='667' label='CVC' />
          </form>
          <div className='profile__card'>
            <div className='profile__card-emblem' />
            <p className='profile__card-date'>05/08</p>
            <p className='profile__card-number'>5545 &nbsp;&nbsp;2300 &nbsp;&nbsp;3432 &nbsp;&nbsp;4521</p>
            <div className='profile__card-chip' />
            <div className='profile__card-master-card-icon' />
          </div>
        </section>
        <Button
          className='profile__submit-button'
          standardAppearance text='Сохранить'
          type='submit'
          form='cardDataForm'
        />
      </div>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    cardNumber: state.card.cardNumber,
    expiryDate: state.card.expiryDate,
    cardName: state.card.cardName,
    cvc: state.card.cvc,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, {setCard})(Profile);
