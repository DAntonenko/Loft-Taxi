import React from 'react';
import { withAuth } from '../../AuthContext';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './LoginForm.scss';

const LoginForm = ({ logIn, navigate, onRegistrationButtonClick }) => {
  LoginForm.propTypes = {
    onRegistrationButtonClick: PropTypes.func,
  }

  return (
    <form
      className='login-form'
      onSubmit={(e) => {
        const emailInput = e.nativeEvent.target[0];
        const passwordInput = e.nativeEvent.target[1];
        logIn(emailInput.value, passwordInput.value);
        navigate('orderPage');
      }}
    >
      <h2 className='login-form__form-title'>Войти</h2>
      <Input
        className='login-form__input'
        label='Email'
        id='email'
        type='email'
        name='email'
        placeholder='mail@mail.ru'
      />
      <Input
        className='login-form__input'
        label='Пароль'
        id='password'
        type='password'
        name='password'
        placeholder='*************'
      />
      <Button
        className = 'login-form__forgot-password-button'
        type='button'
        text='Забыли пароль?'
      />
      <Button
        text='Войти'
        type='submit'
        standardAppearance
      />
      <p className='login-form__mode-change'>
        Новый пользователь?
        <Button
          className='login-form__mode-change-button'
          type='button'
          text='Регистрация'
          onClick={onRegistrationButtonClick}
        />
      </p>
    </form>
  )
}

export default withAuth(LoginForm);