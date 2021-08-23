import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './RegistrationForm.scss';

const RegistrationForm = ({ onLoginButtonClick }) => {
  RegistrationForm.popTypes = {
    onLoginButtonClick: PropTypes.func,
  }

  return (
    <form className='registration-form'>
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
        // onClick = {value.onSubmitButtonClick}
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

export default RegistrationForm;