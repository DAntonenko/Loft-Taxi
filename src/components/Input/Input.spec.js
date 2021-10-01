import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const {container} = render(<Input register={() => {}} />)
    expect(container.innerHTML).toMatch('input')
    expect(container.getElementsByTagName('input')[0]).toBeInTheDocument()
  })
})
