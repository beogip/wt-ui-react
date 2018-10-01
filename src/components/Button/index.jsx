/* @flow */
import React from 'react';

type PropsType = {
  /** This is an example of prop description */
  style?: {},
  onClick: string => void,
  children?: React$Node
};

const Button = (props: PropsType): React$Element<*> => (
  <button {...props} type="button" />
);

Button.defaultProps = {
  style: { color: 'green' },
};

export default Button;
