/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTText = (props: PropsType) => (<BSForm.Text {...props} />);

WTText.defaultProps = {
  as: 'p',
};


export default WTText;
