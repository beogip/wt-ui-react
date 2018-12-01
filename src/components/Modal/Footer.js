/* @flow */
import React from 'react';
import BSModalFooter from 'react-bootstrap/lib/ModalFooter';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTFooter = (props: PropsType) => (<BSModalFooter {...props} />);

WTFooter.defaultProps = {
  as: 'div',
};


export default WTFooter;
