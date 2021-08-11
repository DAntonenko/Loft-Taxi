import React from 'react';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';

import './StartPage.scss';

export class StartPage extends React.Component {
  render() {
    return (
      <div className='start-page'>
       <div className='start-page__sidebar'>
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
       </div>
      </div>
    )
  }
}
