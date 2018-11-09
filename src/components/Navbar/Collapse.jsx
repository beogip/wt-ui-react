// @flow
import React from 'react';
import BsCollapse from 'react-bootstrap/lib/NavbarCollapse';

type PropsType = {
  children?: React$Node
};

const WTCollapse = (props: PropsType) => (
  <BsCollapse {...props} />
);

WTCollapse.defaultProps = {
};

export default WTCollapse;
