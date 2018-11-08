/* @flow */
import React from 'react';
import { Button } from 'react-bootstrap';

type PropsType = {
  active?: boolean,
  block?: boolean,
  className?: string,
  children: React$Node,
  disabled?: boolean,
  href?: string,
  variant: 'primary' | 'accent' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link',
  onClick?: SyntheticMouseEvent<*> => void,
  outlined?: boolean,
  size?: 'sm' | 'lg',
  type?: 'button' | 'reset' | 'submit'
};

const WTButton = (props: PropsType) => {
  const {
    variant, children, outlined, ...others
  } = props;

  const finalVariant = outlined ? `outline-${variant}` : variant;

  return (
    <Button variant={finalVariant} {...others}>
      {children}
    </Button>
  );
};

WTButton.defaultProps = {
  variant: 'primary',
  type: 'button',
};

export default WTButton;
