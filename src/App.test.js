import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {

  jest.mock('./components/Map/Map.jsx', () => ({ Map: () => null }))

  it('renders correctly', () => {
    const {container} = render(<App />)
    expect(container.innerHTML).toHaveClass('visually-hidden')
  })
})
