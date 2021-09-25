import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { OrderPage } from './OrderPage';

jest.mock('../../components/Map/Map', () => (() => null))

describe('OrderPage', () => {
  it('renders correctly', () => {
    const {container} = render(
      <BrowserRouter>
        <Provider store={store}>
          <OrderPage getCardData={() => {}} />
        </Provider>
      </BrowserRouter>
    )
    expect(container.getElementsByTagName('header')[0].className).toMatch('header')
  })
})