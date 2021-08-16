import React from 'react';
import IdentityPanel from '../../components/IdentityPanel/IdentityPanel';
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
    const{ passedClickHandler } = this.props;

    return (
      <div className='start-page'>
        <IdentityPanel />
        <section className='start-page__form-field'>
         {this.state.currentMode === 'login' && 
            <form className='start-page__form start-page__form--login' onSubmit={this.handleLoginSubmit}>
              <h2 className='start-page__form-title'>Войти</h2>
              <label className='start-page__label'>
                Email
                <input className='start-page__input' type='email' name='email' placeholder='mail@mail.ru' />
              </label>
              <label className='start-page__label'>
                Пароль
                <input className='start-page__input' type='password' name='password' placeholder='*************' />
              </label>
              <button
                className = 'start-page__forgot-password-button'
                type='button'
              >
                Забыли пароль?
              </button>
              <Button text='Войти' type='submit' onClick = {passedClickHandler} />
              <p className='start-page__mode-change'>
                Новый пользователь?
                <button
                  className='start-page__mode-change-button'
                  type='button'
                  onClick={() => this.setState({currentMode: 'registration'})}
                >
                  Регистрация
                </button>
              </p>
            </form>
         }
         {this.state.currentMode === 'registration' &&
            <form className='start-page__form start-page__form--registration'>
              <h2 className='start-page__form-title'>Регистрация</h2>
              <label className='start-page__label'>
                Email*
                <input className='start-page__input' type='email' placeholder='mail@mail.ru' />
              </label>
              <label className='start-page__label'>
                Как вас зовут?*
                <input className='start-page__input' type='text' placeholder='Петр Александрович' />
              </label>
              <label className='start-page__label'>
                Придумайте пароль*
                <input className='start-page__input' type='password' placeholder='*************' />
              </label>
              <Button className='start-page__submit-button' text='Зарегистрироваться' type='submit' onClick = {passedClickHandler} />
              <p className='start-page__mode-change'>
                Уже зарегистрированны?
                <button
                  className='start-page__mode-change-button'
                  type='button'
                  onClick={() => this.setState({currentMode: 'login'})}
                >
                  Войти
                </button>
              </p>
            </form>
         }
       </section>
      </div>
    )
  }
}

export default StartPage;