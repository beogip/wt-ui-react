/* @flow */
import React from 'react';
import BSRow from 'react-bootstrap/lib/Row';

type PropsType = {
  noGutters: boolean,
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
  noGutters: false,
};

export default WTRow;
