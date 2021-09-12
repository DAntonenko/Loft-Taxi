import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ className, standardAppearance, text, type, form, disabled, onClick }) => {
  Button.propTypes = {
    className: PropTypes.string,
    standardAppearance: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  }

  return (
    <button
      className={`${standardAppearance ? 'button' : ''} ${className ? className : ''}`}
      type={type}
      form = {form}
      disabled={disabled}
      onClick = {onClick}
    >
      {text}
    </button>
  )
}

export default Button;