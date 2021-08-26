import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './StartPage.scss';

const StartPage = ({ navigate }) => {
  StartPage.propTypes = {
    navigate: PropTypes.func,
  }

  const [currentMode, setCurrentMode] = useState('login');
 
  return (
    <div className='start-page'>
      <IdentityPanel />
      <section className='start-page__form-field'>
        {currentMode === 'login' &&
        <LoginForm onRegistrationButtonClick={() => {setCurrentMode('registration')}}  navigate={navigate} />}
        {currentMode === 'registration' &&
        <RegistrationForm onLoginButtonClick={() => {setCurrentMode('login')}}  navigate={navigate} />}
      </section>
    </div>
  )
}

export default StartPage;
