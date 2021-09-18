import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../store/actions/auth';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './RegistrationForm.scss';

export const RegistrationForm = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;
    dispatch(registration(email, password, name, 'Dude'));
  }

  return (
    <form
      className='registration-form'
      onSubmit={handleSubmit(onSubmit)}
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
        register={register}
      />
      <Input
        className='registration-form__input'
        label='Как вас зовут?'
        required
        id='name'
        type='text'
        name='name'
        placeholder='mail@mail.ru'
        register={register}
      />
      <Input
        className='registration-form__input'
        label='Придумайте пароль'
        required
        id='password'
        type='password'
        name='password'
        placeholder='*************'
        register={register}
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

export default RegistrationForm;
