import React from 'react';

import './Button.scss';

class Button extends React.Component {
  render() {
    const { className, text, type, disabled, onClick } = this.props;

    let verifiedType;
    switch(type) {
      case 'button':
        verifiedType = 'button';
        break;

      case 'reset':
        verifiedType = 'reset';
        break;

      case 'submit':
        verifiedType = 'submit';
        break;

      default:
        verifiedType = 'button';
    }

    return (
      <button
        className={`button ${className && className}`}
        type={verifiedType}
        disabled={disabled}
        onClick = {onClick}
      >
        {text}
      </button>
    )
  }
}

export default Button;