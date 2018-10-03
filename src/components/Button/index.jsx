/* @flow */
import React from 'react';
import styles from './styles.scss';

type PropsType = {
  /** This is an example of prop description */
  style?: {},
  onClick: string => void,
  children?: React$Node
};

const Button = (props: PropsType) => (
  <button className={styles.test} {...props} type="button" />
);

Button.defaultProps = {
  style: { color: 'green' },
};

export default Button;
