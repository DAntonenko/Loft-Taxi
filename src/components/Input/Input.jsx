import React from 'react';
import PropTypes  from 'prop-types';

import './Input.scss';

const Input = ({ className, id, type, name, placeholder, label ,required }) => {

  Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel']).isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
  }

  const requiredMark = <abbr title='required'>*</abbr>;

  return (
    <div className={`input ${className ? className : ''}`}>
      {label &&
      <label className='input__label' htmlFor={id}> {label}{required && requiredMark}</label>
      }
      <input
        className='input__input'
        id={id}
        type={type}
        name={name}
        {...(placeholder ? placeholder={placeholder} : {})}
      />
    </div>
  )
}

export default Input;