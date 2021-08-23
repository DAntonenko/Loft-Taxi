import React from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../../AuthContext';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './LoginForm.scss';

const LoginForm = ({ onRegistrationButtonClick }) => {
  LoginForm.propTypes = {
    onRegistrationButtonClick: PropTypes.func,
  }

  return (
    <form
      className='login-form'
      // onSubmit={this.handleLoginSubmit}
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
        onClick = {this.props.logIn }
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