/* @flow */
import React from 'react';
import BSModalTitle from 'react-bootstrap/lib/ModalTitle';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTTitle = (props: PropsType) => (<BSModalTitle {...props} />);

WTTitle.defaultProps = {
  as: 'h4',
};


export default WTTitle;
