import React from 'react';

import './Input.scss';

const Input = ({ className, id, type, name, placeholder, label ,required }) => {
  const VALID_TYPES = ['text', 'number', 'email', 'password', 'tel'];

  return (
    <div className={`input ${className ? className : ''}`}>
      {label && <label className='input__label' htmlFor={id}> {label}{required && '*'}</label>}
      <input
        className='input__input'
        id={id}
        type={VALID_TYPES.includes(type) ? type : 'text'}
        name={name}
        {...(placeholder ? placeholder={placeholder} : {})}
      />
    </div>
  )
}

export default Input;