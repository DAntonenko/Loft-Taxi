import React from 'react';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './StartPage.scss';

class StartPage extends React.Component {
  state = {
    currentMode: 'login',
  }

  render() {
    return (
      <div className='start-page'>
        <IdentityPanel />
        <section className='start-page__form-field'>
         {this.state.currentMode === 'login' &&
          <LoginForm onRegistrationButtonClick={() => {this.setState({ currentMode: 'registration' })}}  navigate={this.props.navigate} />}
         {this.state.currentMode === 'registration' &&
          <RegistrationForm onLoginButtonClick={() => {this.setState({ currentMode: 'login' })}}  navigate={this.props.navigate} />}
       </section>
      </div>
    )
  }
}

export default StartPage;