import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './App';

jest.mock('./pages/StartPage/StartPage', () => (() => <div />))
jest.mock('./pages/OrderPage/OrderPage', () => (() => <div />))

describe('App', () => {
  it('renders correctly', () => {
    const {container} = render(
      <BrowserRouter>
        <Provider store={store}>
          <App getAddressesList={() => {}}/>
        </Provider>
      </BrowserRouter>
    )
    expect(container.innerHTML).toMatch('Loft-Taxi')
  })
})
