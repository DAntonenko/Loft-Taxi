import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Router } from 'react-router-dom';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory()
    const { getByLabelText, container } = render(
      <Provider store={store}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>
    )
    expect(getByLabelText('Email')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password')
    expect(container.innerHTML).toMatch('Забыли пароль?')
    expect(container.innerHTML).toMatch('Войти')
    expect(container.innerHTML).toMatch('Регистрация')
  })
})