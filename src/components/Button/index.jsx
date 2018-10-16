/* @flow */
import React from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import styles from './styles.scss';

type PropsType = {
  active?: boolean,
  block?: boolean,
  className?: string,
  children: React$Node,
  disabled?: boolean,
  href?: string,
  kind: 'primary' | 'accent' | 'secondary' | 'light' | 'link',
  onClick?: SyntheticMouseEvent<> => void,
  outlined: boolean,
  size?: 'small' | 'large',
  type?: 'button' | 'reset' | 'submit'
};

const WTButton = (props: PropsType) => {
  const {
    active, disabled, size, kind, children, className, block, outlined, ...others
  } = props;

  const outlineClass = `outline-${kind}`;
  const componentClass = classNames(
    styles.default,
    styles[kind],
    styles[size],
    {
      [styles.active]: active,
      [styles.block]: block,
      [styles.disabled]: disabled,
      [styles[outlineClass]]: outlined,
    },
    className,
  );

  const bsProps = {
    bsClass: componentClass,
  };
  return (
    <Button {...bsProps} {...others}>
      {children}
    </Button>
  );
};

WTButton.defaultProps = {
  kind: 'primary',
  type: 'button',
};

export default WTButton;
