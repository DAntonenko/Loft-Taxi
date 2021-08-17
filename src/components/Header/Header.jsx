import React from 'react';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button';

import './Header.scss';

const Header = ({ passedFromAppClickHandler, passedOnMapClickHandler, passedOnProfileClickHandler }) => {

  const MENU_ITEMS = [
    {
      onClickHandler: passedOnMapClickHandler,
      text: 'Карта',
    },
    {
      onClickHandler: passedOnProfileClickHandler,
      text: 'Профиль',
    },
    {
      onClickHandler: passedFromAppClickHandler,
      text: 'Выйти',
    },
  ]

  return (
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
          {MENU_ITEMS.map((item) => {
            return (
              <li className='header__navigation-list-item' key={item.text}>
                <Button
                  className='header__navigation-button'
                  type='button'
                  text={item.text}
                  onClick={item.onClickHandler}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header;