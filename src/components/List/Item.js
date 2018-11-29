/* @flow */
import React from 'react';
import BSListGroup from 'react-bootstrap/lib/ListGroup';

type PropsType = {
  action?: boolean,
  active: boolean,
  disabled: boolean,
  variant: 'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | null
};

const WTItem = (props: PropsType) => (<BSListGroup.Item {...props}></BSListGroup.Item>);


WTItem.defaultProps = {
  active: false,
  disabled: false,
  variant: null,
};

export default WTItem;
