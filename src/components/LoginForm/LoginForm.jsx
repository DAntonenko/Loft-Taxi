import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { authenticate } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './LoginForm.scss';

export const LoginForm = () => {
  LoginForm.propTypes = {
    authenticate: PropTypes.func,
  }

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email)
    console.log(password)
    dispatch(authenticate(email, password));
  }

  return (
    <form
      className='login-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='login-form__form-title'>Войти</h2>
      <input
        {...register('email')}
        className='login-form__input'
        label='Email'
        id='email'
        type='email'
        name='email'
        placeholder='mail@mail.ru'
      />
      <input
        {...register('password')}
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

export default LoginForm;
