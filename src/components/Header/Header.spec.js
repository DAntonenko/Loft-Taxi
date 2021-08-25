import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const {container} = render(<Header />)
    expect(container.innerHTML).toMatch('Карта')
    expect(container.innerHTML).toMatch('Профиль')
    expect(container.innerHTML).toMatch('Выйти')
  })
})