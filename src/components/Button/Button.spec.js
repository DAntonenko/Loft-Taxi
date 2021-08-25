import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const {container} = render(<Button />)
    expect(container.innerHTML).toMatch('button')
  })

  it('contains transmitted text', () => {
    const {container} = render(<Button type='button' text='sample' />)
    expect(container.innerHTML).toMatch('sample')
  })
})