import React from 'react';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';

import './IdentityPanel.scss';

const IdentityPanel = () => {
  return (
    <section className='identity-panel'>
      <div className='identity-panel__identity'>
      <img
        className='identity-panel__emblem'
        src={ emblem }
        alt='эмблема Лофт-Такси'
      />
      <img
        className='identity-panel__logo'
        src={ logo }
        alt='логотип Лофт-Такси'
      />
      </div>
    </section>
  )
}

export default IdentityPanel;