import React from 'react';
import { withAuth } from './AuthContext';
import StartPageWithAuth from './pages/StartPage/StartPage';
import OrderPageWithAuth from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

class App extends React.Component {

  state = {currentPage: 'startPage'}

  navigateTo = () => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: 'orderPage' });
    } else {
      this.setState({ currentPage: 'startPage' });
    }
  }

  render() {
    const { currentPage } = this.state;

    const PAGES = {
      startPage: (props) => <StartPageWithAuth {...props} />,
      orderPage: (props) => <OrderPageWithAuth {...props} />,
    }

    return (
      <div
        className='App'
        value= {{
          onSubmitButtonClick: () => this.setState({currentPage: 'orderPage'}),
          onExitButtonClick: () => this.setState({currentPage: 'startPage'}),
        }}
      >
        <h1 className='visually-hidden'>Loft-Taxi</h1>
        { PAGES[currentPage]({ navigate: this.navigateTo}) }
      </div>
    );
  }
}

export default withAuth(App);
