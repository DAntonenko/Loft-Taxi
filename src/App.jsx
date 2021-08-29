import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import { PrivateRoute } from '';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';

import './common_styles/App.scss';

const App = ({ isLoggedIn }) => {
  App.propTypes = {
    nisLoggedIn: PropTypes.bool,
  }

  return (
    <div className='App'>
      <h1 className='visually-hidden'>Loft-Taxi</h1>
      {/* <Switch>
        <Route></Route>
        <PrivateRoute></PrivateRoute>
      </Switch> */}
      {!isLoggedIn && <StartPage />}
      {isLoggedIn && <OrderPage />}
    </div>
  );
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn }),
)(App);
