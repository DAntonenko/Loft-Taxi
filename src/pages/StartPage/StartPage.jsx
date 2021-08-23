import React from 'react';
import { withAuth } from '../../AuthContext';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './StartPage.scss';

class StartPage extends React.Component {
  state = {
    currentMode: 'login',
  }

  // This is a temporary dummy submit solution, it must be removed with controlled form pattern sending data to a real server when Redux and API will be added to the project.
  // It works only if passed onClick handler is removed from the <Button>. Alas.
  handleLoginSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  }

  render() {
    return (
      <div className='start-page'>
        <IdentityPanel />
        <section className='start-page__form-field'>
         {this.state.currentMode === 'login' &&
          <LoginForm onRegistrationButtonClick={() => {this.setState({ currentMode: 'registration' })}} />}
         {this.state.currentMode === 'registration' &&
          <RegistrationForm onLoginButtonClick={() => {this.setState({ currentMode: 'login' })}} />}
       </section>
      </div>
    )
  }
}

export default withAuth(StartPage);