/* @flow */
import React from 'react';
import BSCol from 'react-bootstrap/lib/Col';

type SizeType = {
  span: true | "auto" | number,
  offset: number,
  order: number
};

type PropsType = {
  children: React$Node,
  prefix: string,
  lg?: true | "auto" | number | SizeType,
  md?: true | "auto" | number | SizeType,
  sm?: true | "auto" | number | SizeType,
  xl?: true | "auto" | number | SizeType,
  xs?: true | "auto" | number | SizeType
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
