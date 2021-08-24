import React from 'react';
import { withAuth } from './AuthContext';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

class App extends React.Component {

  state = {currentPage: 'startPage'}

  navigateTo = () => {
    this.setState({ currentPage: 'orderPage' });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div
        className='App'
        value= {{
          onSubmitButtonClick: () => this.setState({currentPage: 'orderPage'}),
          onExitButtonClick: () => this.setState({currentPage: 'startPage'}),
        }}
      >
        <h1 className='visually-hidden'>Loft-Taxi</h1>
        {currentPage === 'startPage' && <StartPage navigate={this.navigateTo} />}
        {currentPage === 'orderPage' && this.props.isLoggedIn && <OrderPage navigate={this.navigateTo}/>}
      </div>
    );
  }
}

export default withAuth(App);
