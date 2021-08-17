import React from 'react';

import './Button.scss';

const Button = ({ className, standardAppearance, text, type, disabled, onClick }) => {
  const VALID_TYPES = ['button', 'reset', 'submit'];
  return (
    <button
      className={`${standardAppearance && 'button'} ${className ? className : ''}`}
      type={VALID_TYPES.includes(type) ? type : 'button'}
      disabled={disabled}
      onClick = {onClick}
    >
      {text}
    </button>
  )
}

export default Button;