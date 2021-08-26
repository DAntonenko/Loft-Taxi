import React from 'react';
import { withAuth } from '../../AuthContext';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './RegistrationForm.scss';

const RegistrationForm = ({ logIn, navigate, onLoginButtonClick }) => {
  RegistrationForm.popTypes = {
    logIn: PropTypes.func,
    navigate: PropTypes.func,
    onLoginButtonClick: PropTypes.func,
  }

  return (
    <form
      className='registration-form'
      onSubmit={e => {
        e.preventDefault();
        logIn('1@1', '1');
        navigate('orderPage');
      }}
    >
      <h2 className='registration-form__form-title'>Регистрация</h2>
      <Input
        className='registration-form__input'
        label='Email'
        required
        id='email'
        type='email'
        name='email'
        placeholder='mail@mail.ru'
      />
      <Input
        className='registration-form__input'
        label='Как вас зовут?'
        required
        id='name'
        type='text'
        name='name'
        placeholder='mail@mail.ru'
      />
      <Input
        className='registration-form__input'
        label='Придумайте пароль'
        required
        id='password'
        type='password'
        name='password'
        placeholder='*************'
      />
      <Button
        className='registration-form__submit-button'
        text='Зарегистрироваться'
        type='submit'
        standardAppearance
      />
      <p className='registration-form__mode-change'>
        Уже зарегистрированны?
        <Button
          className='registration-form__mode-change-button'
          type='button'
          text='Войти'
          onClick={onLoginButtonClick}
        />
      </p>
    </form>
  )
}

export default withAuth(RegistrationForm);