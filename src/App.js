import React from 'react';
import { Provider } from './context';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

class App extends React.Component {
  state = {currentPage: 'startPage'}

  render() {
    const { currentPage } = this.state;

    const PAGES = {
      startPage: <StartPage />,
      orderPage: <OrderPage />,
    }

    return (
      <div className='App'>
        <Provider
          value= {{
            onSubmitButtonClick: () => this.setState({currentPage: 'orderPage'}),
            onExitButtonClick: () => this.setState({currentPage: 'startPage'}),
          }}
        >
          <h1 className='visually-hidden'>Loft-Taxi</h1>
          { PAGES[currentPage] }
        </Provider>
      </div>
    );
  }
}

export default App;
