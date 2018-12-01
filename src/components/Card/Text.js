/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTText = (props: PropsType) => (<BSCard.Text {...props} />);

WTText.defaultProps = {
  as: 'p',
};


export default WTText;
