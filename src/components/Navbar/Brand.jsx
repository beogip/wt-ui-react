// @flow
import React from 'react';
import BsBrand from 'react-bootstrap/lib/NavbarBrand';

type PropsType = {
  /** An accessible ARIA label for the toggler button. */
  label: string,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children?: React$Node,

  as: React$Element<*> | string
};

const WTBrand = (props: PropsType) => (
  <BsBrand {...props} />
);

WTBrand.defaultProps = {
  label: 'Toggle navigation',
  as: 'button',
};

export default WTBrand;
