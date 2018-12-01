/* @flow */
import React from 'react';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTTitle = (props: PropsType) => (<ModalTitle {...props} />);

WTTitle.defaultProps = {
  as: 'h4',
};


export default WTTitle;
