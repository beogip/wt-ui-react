/* @flow */
import React from 'react';
import BSCol from 'react-bootstrap/lib/Col';

type SizeType = true | "auto" | number | {
  span: true | "auto" | number,
  offset: number,
  order: number
} ;

type PropsType = {
  children: React$Node,
  prefix: string,
  lg?: SizeType,
  md?: SizeType,
  sm?: SizeType,
  xl?: SizeType,
  xs?: SizeType
};

const WTCol = (props: PropsType) => {
  const {
    children, ...otherProps
  } = props;

  return (
    <BSCol {...otherProps}>
      {children}
    </BSCol>
  );
};

WTCol.defaultProps = {
  prefix: 'col',
};

export default WTCol;
