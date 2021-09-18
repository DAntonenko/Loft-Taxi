import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setCard } from '../../store/actions/card';
import Input from '../Input/Input'
import Button from '../Button/Button';

import './Profile.scss';

export const Profile = ({ setCard, token, passedOnMapClickHandler }) => {
  Profile.propTypes = {
    setCard: PropTypes.func,
    token: PropTypes.string,
    passedOnMapClickHandler: PropTypes.func,
  }

  const [ currentStep, setCurrentStep ] = useState('setCard');

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { cardNumber, expiryDate, cardName, cvc } = data;
    dispatch(setCard(cardNumber, expiryDate, cardName, cvc, token));
    setCurrentStep('goToMap');
  }

  return (
    <div className='profile'>
      {currentStep === 'setCard' &&
        <div className='profile__window'>
          <h2 className='profile__title'>Профиль</h2>
          <p className='profile__subtitle'>Введите платёжные данные</p>
          <section className='profile__card-data'>
            <form
              id='cardDataForm'
              className='profile__form'
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                className='profile__input'
                id='cardName'
                type='text'
                name='cardName'
                placeholder='Loft'
                label='Имя владельца'
                register={register}
              />
              <Input
                className='profile__input'
                id='cardNumber'
                type='number'
                name='cardNumber'
                placeholder='5545 2300 3432 4521'
                label='Номер карты'
                register={register}
              />
              <Input
                className='profile__input profile__input--narrow'
                id='expiryDate'
                type='number'
                name='expiryDate'
                placeholder='05/08'
                label='MM/YY'
                register={register}
              />
              <Input
                className='profile__input profile__input--narrow'
                id='cvc'
                type='number'
                name='cvc'
                placeholder='667'
                label='CVC'
                register={register}
              />
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
      }
      {currentStep === 'goToMap' &&
        <div className='profile__window'>
          <h2 className='profile__title'>Профиль</h2>
          <p className='profile__subtitle'>Платёжные данные обновлены. Теперь вы&nbsp;можете заказывать такси.</p>
          <Button
            className='profile__submit-button'
            standardAppearance text='Перейти на карту'
            type='button'
            onClick={passedOnMapClickHandler}
          />
        </div>
      }
      
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
