/* @flow */
import React from 'react';
import BSRow from 'react-bootstrap/lib/Row';

type PropsType = {
  as: React$Node,
  noGutters: boolean,
  prefix: string,
  children: React$Node
};

const WTRow = (props: PropsType) => {
  const {
    children, ...otherProps
  } = props;

  return (
    <BSRow {...otherProps}>
      {children}
    </BSRow>
  );
};

WTRow.defaultProps = {
  as: 'div',
  noGutters: false,
  prefix: 'row',
};

export default WTRow;
