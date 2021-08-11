import React from 'react';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';

import './Header.scss';

export const Header = () => (
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
      <button className='header__navigation-link header__navigation-link--active' type='button'>Карта</button>
      <button className='header__navigation-link' type='button'>Профиль</button>
      <button className='header__navigation-link' type='button'>Выйти</button>
    </nav>
  </header>
)