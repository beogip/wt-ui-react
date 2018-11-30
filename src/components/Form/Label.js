/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';

type PropsType = {
  /**
   * Renders the FormLabel as a <Col> component (accepting all the same props), as well as adding
   * additional styling for horizontal forms.
   */
  column: boolean,
  /**
   * Uses controlId from <FormGroup> if not explicitly specified.
   */
  htmlFor?: string,
  /**
   * The Form ref will be forwarded to the underlying element, which means, unless it's rendered
   * as a composite component, it will be a DOM node, when resolved.
   */
  innerRef?: React$ElementRef<*>,
  /**
   * Hides the label visually while still allowing it to be read by assistive technologies.
   */
  srOnly: boolean
};

const WTLabel = (props: PropsType) => (<BSForm.Label {...props} />);

WTLabel.defaultProps = {
  column: false,
  srOnly: false,
};


export default WTLabel;
