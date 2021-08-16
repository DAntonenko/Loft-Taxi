import React from 'react';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';

import './Header.scss';

const Header = ({ passedFromAppClickHandler, passedOnMapClickHandler, passedOnProfileClickHandler }) => (
  <header className = 'header'>
    <img
      className='header__emblem'
      src={ emblem }
      alt='эмблема Лофт-Такси'
    />
    <img
      className='header__logo'
      src={ logo }
      alt='логотип Лофт-Такси'
    />
    <nav className='header__navigation'>
      <ul className='header__navigation-list'>
        <li className='header__navigation-list-item'>
          <button
            className='header__navigation-button header__navigation-button--active'
            type='button'
            onClick={passedOnMapClickHandler}
          >
            Карта
          </button>
        </li>
        <li className='header__navigation-list-item'>
          <button
            className='header__navigation-button'
            type='button'
            onClick={passedOnProfileClickHandler}
          >
            Профиль
          </button>
        </li>
        <li className='header__navigation-list-item'>
          <button
            className='header__navigation-button'
            type='button'
            onClick={passedFromAppClickHandler}
          >
            Выйти
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;