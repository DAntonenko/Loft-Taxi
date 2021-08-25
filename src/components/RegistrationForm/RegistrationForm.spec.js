import React from 'react';
import { render } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
  it('renders correctly', () => {
    const { getByLabelText, container } = render(<RegistrationForm />)
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Как вас зовут?*')).toHaveAttribute('name', 'name')
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password')
    expect(container.innerHTML).toMatch('Зарегистрироваться')
    expect(container.innerHTML).toMatch('Войти')
  })
})