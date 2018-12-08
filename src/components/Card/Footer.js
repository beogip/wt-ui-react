/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTFooter = (props: PropsType) => (<BSCard.Footer {...props} />);

WTFooter.defaultProps = {
  as: 'div',
};


export default WTFooter;
