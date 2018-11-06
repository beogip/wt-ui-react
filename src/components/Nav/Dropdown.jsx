// @flow
import React from 'react';
import BsNavDropdown from 'react-bootstrap/lib/NavDropdown';
import mapDisplayNames from 'utils/componentNames';
import WTDivider from 'components/Dropdown/Divider';
import WTItem from 'components/Dropdown/Item';
import WTHeader from 'components/Dropdown/Header';

type PropsType = {
  /**
   * An html id attribute for the Toggle button,
   * necessary for assistive technologies, such as screen readers.
   */
  id?: string | number,

  /** An `onClick` handler passed to the Toggle component */
  onClick?: (SyntheticMouseEvent<*>) => void,

  /** The content of the non-toggle Button.  */
  title: React$Node,

  /** Disables the toggle NavLink  */
  disabled?: boolean,

  /** Style the toggle NavLink as active  */
  active?: boolean,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole?: string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: 'click' | 'mousedown'
};


const WTDropdown = (props: PropsType) => (
  <BsNavDropdown {...props} />
);

WTDropdown.Item = WTItem;
WTDropdown.Divider = WTDivider;
WTDropdown.Header = WTHeader;

mapDisplayNames(WTDropdown);

export default WTDropdown;
