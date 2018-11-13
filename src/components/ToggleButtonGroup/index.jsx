// @flow
import React from 'react';
import BsToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';

type PropsType = {
  /**
   * An HTML `<input>` name for each child button.
   * __Required if `type` is set to `'radio'`__
   */
  name?: string,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  // eslint-disable-next-line flowtype/no-weak-types
  value?: any,

  /**
   * initial value
   */
  // eslint-disable-next-line flowtype/no-weak-types
  defaultValue?: any,

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  // eslint-disable-next-line flowtype/no-weak-types
  onChange?: (any) => void,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: 'checkbox' | 'radio'
};

const WTToggleButtonGroup = (props: PropsType) => (
  <BsToggleButtonGroup {...props} />
);

WTToggleButtonGroup.defaultProps = {
  type: 'radio',
};

export default WTToggleButtonGroup;
