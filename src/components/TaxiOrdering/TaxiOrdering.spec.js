import React from 'react';
import { render } from '@testing-library/react';
import { TaxiOrdering } from './TaxiOrdering';

describe('TaxiOrdering', () => {
  it('renders correctly', () => {
    const { container } = render(
        <TaxiOrdering addresses={[]}/>
    )
    expect(container.getElementsByTagName('button')[0].innerHTML).toMatch('Заказать')
  })
})