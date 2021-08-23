import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders correctly', () => {
    const { getByLabelText, container } = render(<LoginForm />)
    expect(getByLabelText('Email')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
    expect(container.innerHTML).toMatch('Забыли пароль?')
    expect(container.innerHTML).toMatch('Войти')
    expect(container.innerHTML).toMatch('Регистрация')
  })
})