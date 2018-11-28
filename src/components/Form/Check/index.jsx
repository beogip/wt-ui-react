/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';
import mapDisplayNames from 'utils/componentNames';
import WTInput from './Input';
import WTLabel from './Label';


type PropsType = {
  /**
   * Provide a function child to manually handle the layout of the FormCheck's inner components.
   */
  children?: React$Node,
  /**
   * Use Bootstrap's custom form elements to replace the browser defaults
   */
  custom?: boolean,
  /**
   * Make the check disabled.
   */
  disabled: boolean,
  /**
   * A message to display when the input is in a validation state
   */
  feedback?: React$Element<*>,
  /**
   * A HTML id attribute, necessary for proper form accessibility.
   */
  id?: string,
    /**
   * Display the series of labels, form controls, and buttons on a single horizontal row.
   */
  inline: boolean,
  /**
   * The FormCheck ref will be forwarded to the underlying input element, which means it will be a
   * DOM node, when resolved.
   */
  inputRef?: React$ElementRef<*>,
  /**
   * Add "invalid" validation styles to the control and accompanying label
   */
  isInvalid: boolean,
  /**
   * Add "valid" validation styles to the control.
   */
  isValid: boolean,
  label?: React$Node,
  title: string,
  /**
   * The type of checkable.
   */
  type: 'radio' | 'checkbox'
};

const WTCheck = (props: PropsType) => (<BSForm.Check {...props} />);

WTCheck.Input = WTInput;
WTCheck.Label = WTLabel;

mapDisplayNames(WTCheck);


WTCheck.defaultProps = {
  disabled: false,
  inline: false,
  isInvalid: false,
  isValid: false,
  title: '',
  type: 'checkbox',
};

export default WTCheck;
