/* @flow */
import React from 'react';

type ArgType = {
  buttonStyle?: string,
  handleClick?: string => void,
  label?: string
};

const Button = ({ buttonStyle, handleClick, label }: ArgType): React$Element<*> => (
  <button
    type="button"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

Button.defaultProps = {
  buttonStyle: '',
  handleClick: () => {},
  label: 'label',
};

export default Button;
