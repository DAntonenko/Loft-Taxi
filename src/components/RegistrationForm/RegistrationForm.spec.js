import React from 'react';
import { render } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';
import { RegistrationForm } from './RegistrationForm';

describe('RegistrationForm', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory()
    const { getByLabelText, container } = render(
      <Router history={history}>
        <RegistrationForm />
      </Router>
    )
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Как вас зовут?*')).toHaveAttribute('name', 'name')
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password')
    expect(container.innerHTML).toMatch('Зарегистрироваться')
    expect(container.innerHTML).toMatch('Войти')
  })
})