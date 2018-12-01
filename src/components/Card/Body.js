/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTBody = (props: PropsType) => (<BSCard.Body {...props} />);

WTBody.defaultProps = {
  as: 'div',
};


export default WTBody;
