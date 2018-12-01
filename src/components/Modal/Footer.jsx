/* @flow */
import React from 'react';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTFooter = (props: PropsType) => (<ModalFooter {...props} />);

WTFooter.defaultProps = {
  as: 'div',
};


export default WTFooter;
