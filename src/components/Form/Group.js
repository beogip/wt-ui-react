/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';

type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string,
  /**
   * The Form ref will be forwarded to the underlying element, which means,
   * unless it's rendered as a composite component, it will be a DOM node,
   * when resolved.
   */
  innerRef?: React$ElementRef<*>,
  /**
   * Sets id on <FormControl> and htmlFor on <FormGroup.Label>..
   */
  controlId?: string
};

const WTGroup = (props: PropsType) => (<BSForm.Group {...props} />);

WTGroup.defaultProps = {
  as: 'div',
};


export default WTGroup;
