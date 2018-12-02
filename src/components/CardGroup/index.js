/* @flow */
import React from 'react';
import BSCardGroup from 'react-bootstrap/lib/CardGroup';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTCardGroup = (props: PropsType) => (<BSCardGroup {...props} />);

WTCardGroup.defaultProps = {
  as: 'div',
};


export default WTCardGroup;
