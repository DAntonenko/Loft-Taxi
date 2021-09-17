import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './App';

jest.mock('./pages/StartPage/StartPage', () => (() => <div />))
jest.mock('./pages/OrderPage/OrderPage', () => (() => <div />))
jest.mock('./store/actions/addresses', () => ({
  getAddressesList: jest.fn(() => ({addresses: [{value: '1', label: '1'}]}))
}))

describe('App', () => {
  it('renders correctly', () => {
    const {container} = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
    // expect(container.getByTestId('main-heading')).toHaveTextContent('Loft-Taxi')
    expect(container.innerHTML).toMatch('Loft-Taxi')
  })
})
