// @flow
import React from 'react';
import BsInputGroup from 'react-bootstrap/lib/InputGroup';
import mapDisplayNames from 'utils/componentNames';

type PropsType = {
  /**
   * Control the size of buttons and form elements from the top-level .
   */
  size?: 'sm' | 'lg',

  as: React$Element<*> | string
};

const WTInputGroup = (props: PropsType) => (
  <BsInputGroup {...props} />
);

WTInputGroup.Text = BsInputGroup.Text;
WTInputGroup.Radio = BsInputGroup.Radio;
WTInputGroup.Checkbox = BsInputGroup.Checkbox;
WTInputGroup.Append = BsInputGroup.Append;
WTInputGroup.Prepend = BsInputGroup.Prepend;

mapDisplayNames(WTInputGroup);

WTInputGroup.defaultProps = {
  as: 'div',
};

export default WTInputGroup;
