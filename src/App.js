import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_scss/App.scss';

class App extends React.Component {
  state = {currentPage: 'startPage'}

  render() {
    const { currentPage } = this.state;
    
    const onSubmitButtonClick = () => this.setState({currentPage: 'orderPage'});
    const onExitButtonClick = () => this.setState({currentPage: 'startPage'});

    const PAGES = {
      startPage: <StartPage passedClickHandler = {onSubmitButtonClick} />,
      orderPage: <OrderPage passedClickHandler = {onExitButtonClick} />,
    }

    return (
      <div className="App">
        <h1 className='visually-hidden'>Loft-Taxi</h1>
        { PAGES[currentPage] }
      </div>
    );
  }
}

export default App;
