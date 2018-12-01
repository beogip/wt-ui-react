// @flow
import React from 'react';
import BsToggle from 'react-bootstrap/lib/NavbarToggle';

type PropsType = {
  /** An accessible ARIA label for the toggler button. */
  label: string,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: React$Node,

  as: React$ComponentType<*> | string
};

const WTToggle = (props: PropsType) => (
  <BsToggle {...props} />
);

WTToggle.defaultProps = {
  label: 'Toggle navigation',
  as: 'button',
};

export default WTToggle;
