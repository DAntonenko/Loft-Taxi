import React from 'react';
import { render } from '@testing-library/react';
import OrderPage from './OrderPage';

describe('OrderPage', () => {
  it('renders correctly', () => {
    const {container} = render(<OrderPage />)
    expect(container.innerHTML).toMatch('Header')
    expect(container.innerHTML).toMatch('Map')
  })
})