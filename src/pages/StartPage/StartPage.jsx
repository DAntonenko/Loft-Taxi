import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './StartPage.scss';

export const StartPage = () => {

  return (
    <div className='start-page'>
      <IdentityPanel />
      <section className='start-page__form-field'>
        <Switch>
          <Route path='/' exact component={ LoginForm } />
          <Route path='/register' component={ RegistrationForm } />
        </Switch>
      </section>
    </div>
  )
}

export default StartPage;
