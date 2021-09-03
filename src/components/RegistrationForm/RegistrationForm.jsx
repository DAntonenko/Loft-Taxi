import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registration } from '../../store/actions/actions';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './RegistrationForm.scss';

const RegistrationForm = ({ registration }) => {
  RegistrationForm.propTypes = {
    registration: PropTypes.func,
  }

  return (
    <form
      className='registration-form'
      onSubmit={e => {
        e.preventDefault();
        const emailInput = e.nativeEvent.target[0];
        const nameInput = e.nativeEvent.target[1];
        const passwordInput = e.nativeEvent.target[2];
        registration(emailInput.value, passwordInput.value, nameInput.value, 'Dude');
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
        <Link
          to='/'
          className='registration-form__mode-change-link'
        >
          Войти
        </Link>
      </p>
    </form>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { registration }
)(RegistrationForm);
