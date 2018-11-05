/* @flow */
import React from 'react';
import BsDropdown from 'react-bootstrap/lib/Dropdown';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*>
};

const WTDivider = (props: PropsType) => <BsDropdown.Divider {...props} />;

export default WTDivider;
