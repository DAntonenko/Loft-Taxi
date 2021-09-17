import React from 'react';
import { render } from '@testing-library/react';
import { TaxiOrdering } from './TaxiOrdering';

describe('TaxiOrdering', () => {
  it('renders correctly', () => {
    const { container } = render(
        <TaxiOrdering />
    )
    expect(container.innerHTML).toMatch('Заказать')
    expect(container.innerHTML).toMatch('Сделать новый заказ')
  })
})