/* @flow */
import React from 'react';
import BSListGroup from 'react-bootstrap/lib/ListGroup';
import Item from './Item';

type PropsType = {
  variant: 'flush' | null
};

const WTList = (props: PropsType) => (<BSListGroup {...props} />);

WTList.defaultProps = {
  variant: null,
};

WTList.Item = Item;

export default WTList;
