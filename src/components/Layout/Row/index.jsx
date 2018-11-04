/* @flow */
import React from 'react';
import Row from 'react-bootstrap/lib/Row';

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
    <Row {...otherProps}>
      {children}
    </Row>
  );
};

WTRow.defaultProps = {
  as: '<div>',
  noGutters: false,
  prefix: 'row',
};

export default WTRow;
