import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/actions';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './LoginForm.scss';

const LoginForm = ({
  authenticate,
  }) => {
  LoginForm.propTypes = {
    authenticate: PropTypes.func,
  }

  return (
    <form
      className='login-form'
      onSubmit={(e) => {
        e.preventDefault();
        const emailInput = e.nativeEvent.target[0];
        const passwordInput = e.nativeEvent.target[1];
        authenticate(emailInput.value, passwordInput.value);
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
        <Link
          to='/register'
          className='login-form__mode-change-link'
        >
          Регистрация
        </Link>
      </p>
    </form>
  )
}

export default connect(
  null,
  { authenticate }
)(LoginForm);
