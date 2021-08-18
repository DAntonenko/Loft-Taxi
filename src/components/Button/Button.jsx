import React from 'react';
import PropTypes  from 'prop-types';

import './Button.scss';

const Button = ({ className, standardAppearance, text, type, disabled, onClick }) => {
  Button.propTypes = {
    className: PropTypes.string,
    standardAppearance: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    disabled: PropTypes.string,
    onClick: PropTypes.func,
  }

  return (
    <button
      className={`${standardAppearance ? 'button' : ''} ${className ? className : ''}`}
      type={type}
      disabled={disabled}
      onClick = {onClick}
    >
      {text}
    </button>
  )
}

export default Button;