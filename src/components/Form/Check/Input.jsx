/* @flow */
import React from 'react';
import BSFormCheck from 'react-bootstrap/lib/FormCheck';

type PropsType = {
  /**
   *  A HTML id attribute, necessary for proper form accessibility.
   */
  id?: string,
  /**
   * Manually style the input as invalid.
   */
  isInvalid: boolean,
  /**
   * A convenience prop shortcut for adding position-static to the input, for correct styling
   * when used without an FormCheckLabel
   */
  isStatic?: boolean,
  /**
   * Manually style the input as valid.
   */
  isValid?: boolean,
  /**
   * The type of checkable.
   */
  type: 'radio' | 'checkbox'

};

const WTInput = (props: PropsType) => (<BSFormCheck.Input {...props} />);

WTInput.defaultProps = {
  type: 'checkbox',
  isInvalid: false,
};

export default WTInput;
