/* @flow */
import React from 'react';
import BSFormControl from 'react-bootstrap/lib/FormControl';

type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string,
  /**
   * Specify whether the feedback is for valid or invalid fields.
   */
  type: 'valid' | 'invalid'
};

const WTFeedback = (props: PropsType) => (<BSFormControl.Feedback {...props} />);

WTFeedback.defaultProps = {
  as: 'div',
  type: 'valid',
};


export default WTFeedback;
