/* @flow */
import React from 'react';
import ModalBody from 'react-bootstrap/lib/ModalBody';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string
};

const WTBody = (props: PropsType) => (<ModalBody {...props} />);

WTBody.defaultProps = {
  as: 'div',
};


export default WTBody;
