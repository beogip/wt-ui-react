// @flow
import React from 'react';
import BsButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

type PropsType = {
  /**
   * The ARIA role describing the button toolbar. Generally the default
   * "toolbar" role is correct. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: string
};

const WTButtonToolbar = (props: PropsType) => (
  <BsButtonToolbar {...props} />
);

WTButtonToolbar.defaultProps = {
  role: 'toolbar',
};

export default WTButtonToolbar;
