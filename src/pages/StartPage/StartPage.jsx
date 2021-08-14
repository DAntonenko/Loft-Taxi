import React from 'react';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';

import './StartPage.scss';

class StartPage extends React.Component {
  state = {
    currentMode: 'enter',
  }

  render() {
        return (
      <div className='start-page'>
       <section className='start-page__sidebar'>
         <div className='start-page__identity'>
          <img
            className='start-page__emblem'
            src={ emblem }
            alt='эмблема Лофт-Такси'
          />
          <img
            className='start-page__logo'
            src={ logo }
            alt='логотип Лофт-Такси'
          />
         </div>
       </section>
       <section className='start-page__form-field'>
         {this.state.currentMode === 'enter' && 
            <form className='start-page__form start-page__form--enter'>
              <h2 className='start-page__form-title'>Войти</h2>
              <label className='start-page__label'>
                Email
                <input className='start-page__input' type='email' placeholder='mail@mail.ru' />
              </label>
              <label className='start-page__label'>
                Пароль
                <input className='start-page__input' type='password' placeholder='*************' />
              </label>
              <button
                className = 'start-page__forgot-password-button'
                type='button'
              >
                Забыли пароль?
              </button>
              <p className='start-page__mode-change'>
                Новый пользователь?
                <button
                  className = 'start-page__mode-change-button'
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
              <p className='start-page__mode-change'>
                Уже зарегистрированны?
                <button
                  className = 'start-page__mode-change-button'
                  type='button'
                  onClick={() => this.setState({currentMode: 'enter'})}
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