import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

export const { Provider, Consumer } = React.createContext();

class App extends React.Component {
  state = {currentPage: 'startPage'}

  render() {
    const { currentPage } = this.state;
    
    // const onSubmitButtonClick = () => this.setState({currentPage: 'orderPage'});
    // const onExitButtonClick = () => this.setState({currentPage: 'startPage'});

    // const PAGES = {
    //   startPage: <StartPage passedClickHandler = {onSubmitButtonClick} />,
    //   orderPage: <OrderPage passedClickHandler = {onExitButtonClick} />,
    // }

    const PAGES = {
      startPage: <StartPage />,
      orderPage: <OrderPage />,
    }

    return (
      <div className='App'>
        <Provider
          value= {[
            {onSubmitButtonClick: () => this.setState({currentPage: 'orderPage'})},
            {onExitButtonClick: () => this.setState({currentPage: 'startPage'})},
          ]}
        >
          <h1 className='visually-hidden'>Loft-Taxi</h1>
          { PAGES[currentPage] }
        </Provider>
      </div>
    );
  }
}

export default App;
