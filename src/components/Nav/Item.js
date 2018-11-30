// @flow
import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';

type PropsType = {
  /** The ARIA role of the component */
  role?: string,
  as: React$Element<*> | string
};

const WTItem = (props: PropsType) => (
  <NavItem {...props} />
);

WTItem.defaultProps = {
  as: 'li',
};

export default WTItem;
