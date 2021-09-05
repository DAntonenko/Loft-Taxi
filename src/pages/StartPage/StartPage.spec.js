import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { StartPage } from './StartPage';

describe('StartPage', () => {
  it('renders correctly', () => {
    const {container} = render(
      <BrowserRouter>
        <Provider store={store}>
          <StartPage />
        </Provider>
      </BrowserRouter>
    )
    expect(container.innerHTML).toMatch('identity-panel')
  })
})
