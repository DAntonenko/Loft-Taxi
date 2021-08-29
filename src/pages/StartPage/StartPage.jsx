import React, { useState } from 'react';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './StartPage.scss';

const StartPage = () => {

  const [currentMode, setCurrentMode] = useState('login');
 
  return (
    <div className='start-page'>
      <IdentityPanel />
      <section className='start-page__form-field'>
        {currentMode === 'login' &&
        <LoginForm onRegistrationButtonClick={() => {setCurrentMode('registration')}} />}
        {currentMode === 'registration' &&
        <RegistrationForm onLoginButtonClick={() => {setCurrentMode('login')}} />}
      </section>
    </div>
  )
}

export default StartPage;
