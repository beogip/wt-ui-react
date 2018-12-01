/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';
import mapDisplayNames from 'utils/componentNames';
import WTCheck from './Check';
import WTControl from './Control';
import WTGroup from './Group';
import WTLabel from './Label';
import WTRow from './Row';
import WTText from './Text';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string,
  /**
   * Display the series of labels, form controls, and buttons on a single horizontal row.
   */
  inline: boolean,
  /**
   * The Form ref will be forwarded to the underlying element, which means, unless it's rendered
   * as a composite component, it will be a DOM node, when resolved.
   */
  innerRef?: React$ElementRef<*>,
  /**
   * Mark a form as having been validated. Setting it to true will toggle any validation styles
   * on the forms elements.
   */
  validated?: boolean
};

const WTForm = (props: PropsType) => (<BSForm {...props} />);

WTForm.Check = WTCheck;
WTForm.Control = WTControl;
WTForm.Group = WTGroup;
WTForm.Label = WTLabel;
WTForm.Row = WTRow;
WTForm.Text = WTText;

mapDisplayNames(WTForm);

WTForm.defaultProps = {
  as: 'form',
  inline: false,
};


export default WTForm;
