/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTHeader = (props: PropsType) => (<BSCard.Header {...props} />);

WTHeader.defaultProps = {
  as: 'div',
};


export default WTHeader;
