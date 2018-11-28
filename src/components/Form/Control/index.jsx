/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';
import mapDisplayNames from 'utils/componentNames';
import WTFeedback from './Feedback';

type PropsType = {
  /**
   * The underlying HTML element to use when rendering the FormControl.
   */
  as: 'input' | 'textarea' | React$Element<*>,
  /**
   * Make the control disabled.
   */
  disabled?: boolean,
  /**
   * Uses controlId from <FormGroup> if not explicitly specified.
   */
  id?: string,
  /**
   * Add "invalid" validation styles to the control and accompanying label
   */
  isInvalid?: boolean,
  /**
   * Add "valid" validation styles to the control.
   */
  isValid?: boolean,
  /**
   * A callback fired when the value prop changes.
   */
  onChange?: () => void,
  /**
   * Render the input as plain text. Generally used along side readOnly.
   */
  plaintext?: boolean,
  /**
   * Make the control readonly.
   */
  readOnly?: boolean,
  /**
   * The FormControl ref will be forwarded to the underlying input element, which means unless as
   * is a composite component, it will be a DOM node, when resolved.
   */
  ref?: React$ElementRef<*>,
  /**
   * Input size.
   */
  size?: 'sm' | 'lg',
  /**
   * The HTML input type, which is only relevant if as is 'input' (the default).
   */
  type?: string,
  /**
   * The value attribute of underlying input.
   */
  value?: string
};

const WTControl = (props: PropsType) => (<BSForm.Control {...props} />);

WTControl.Feedback = WTFeedback;

mapDisplayNames(WTControl);

WTControl.defaultProps = {
  as: 'input',
};

export default WTControl;
