import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

const App = ({ isLoggedIn }) => {
  App.propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  return (
    <div className='App'>
      <h1 className='visually-hidden'>Loft-Taxi</h1>
      {!isLoggedIn && <StartPage />}
      {isLoggedIn && <OrderPage />}
    </div>
  );
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn }),
)(App);
