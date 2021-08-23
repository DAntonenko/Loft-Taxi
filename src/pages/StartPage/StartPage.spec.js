import React from 'react';
import { render } from '@testing-library/react';
import StartPage from './StartPage';

describe('StartPage', () => {
  it('renders correctly', () => {
    const {container} = render(<StartPage />)
    // expect(container.innerHTML).toMatch('IdentityPanel')
    // expect(container.innerHTML).toMatch('LoginForm')
    // expect(container.innerHTML).toMatch('RegistrationForm')
  })
})