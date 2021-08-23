import React from 'react';
import { render } from '@testing-library/react';
import IdentityPanel from './IdentityPanel';

describe('IdentityPanel', () => {
  it('renders correctly', () => {
    const {container} = render(<IdentityPanel />)
    expect(container.innerHTML).toMatch('эмблема Лофт-Такси')
    expect(container.innerHTML).toMatch('логотип Лофт-Такси')
  })
})