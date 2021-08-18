import React from 'react';
import { Consumer } from '../../context';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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
            <form className='start-page__form start-page__form--login' onSubmit={this.handleLoginSubmit}>
              <h2 className='start-page__form-title'>Войти</h2>
              <Input
                className='start-page__input'
                label='Email'
                id='email'
                type='email'
                name='email'
                placeholder='mail@mail.ru'
              />
              <Input
                className='start-page__input'
                label='Пароль'
                id='password'
                type='password'
                name='password'
                placeholder='*************'
              />
              <Button
                className = 'start-page__forgot-password-button'
                type='button'
                text='Забыли пароль?'
              />
              <Consumer>{value =>
                <Button
                  text='Войти'
                  type='submit'
                  standardAppearance
                  onClick = {value.onSubmitButtonClick}
                />
              }
              </Consumer>
              <p className='start-page__mode-change'>
                Новый пользователь?
                <Button
                  className='start-page__mode-change-button'
                  type='button'
                  text='Регистрация'
                  onClick={() => this.setState({currentMode: 'registration'})}
                />
              </p>
            </form>
         }
         {this.state.currentMode === 'registration' &&
            <form className='start-page__form start-page__form--registration'>
              <h2 className='start-page__form-title'>Регистрация</h2>
              <Input
                className='start-page__input'
                label='Email'
                required
                id='email'
                type='email'
                name='email'
                placeholder='mail@mail.ru'
              />
              <Input
                className='start-page__input'
                label='Как вас зовут?'
                required
                id='name'
                type='text'
                name='name'
                placeholder='mail@mail.ru'
              />
              <Input
                className='start-page__input'
                label='Придумайте пароль'
                required
                id='password'
                type='password'
                name='password'
                placeholder='*************'
              />
              <Consumer>{value =>
                <Button
                  className='start-page__submit-button'
                  text='Зарегистрироваться'
                  type='submit'
                  standardAppearance
                  onClick = {value.onSubmitButtonClick}
                />
              }
              </Consumer>
              <p className='start-page__mode-change'>
                Уже зарегистрированны?
                <Button
                  className='start-page__mode-change-button'
                  type='button'
                  text='Войти'
                  onClick={() => this.setState({currentMode: 'login'})}
                />
              </p>
            </form>
         }
       </section>
      </div>
    )
  }
}

export default StartPage;