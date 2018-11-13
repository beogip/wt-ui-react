/* @flow */
import React from 'react';
import BsDropdown from 'react-bootstrap/lib/Dropdown';
import mapDisplayNames from 'utils/componentNames';
import Item from './Item';
import Menu from './Menu';
import Toggle from './Toggle';
import Divider from './Divider';
import Header from './Header';

type PropsType = {
  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop?: 'up' | 'left' | 'right' | 'down',
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  alignRight?: boolean,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show?: boolean,

  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element.
   * For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled).
   *
   */
  flip?: boolean,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it:
   *  `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   */

  onToggle?: (
       isOpen: boolean,
       event: SyntheticEvent<*>,
       metadata: {
       source: 'select' | 'click' | 'rootCloose' | 'keydown'
       }
     ) => void,

  /**
   * A callback fired when a menu item is selected.
   *
   */

  // eslint-disable-next-line flowtype/no-weak-types
  onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void
};

const WTDropdown = (props: PropsType) => <BsDropdown {...props} />;

WTDropdown.Toggle = Toggle;
WTDropdown.Item = Item;
WTDropdown.Menu = Menu;
WTDropdown.Divider = Divider;
WTDropdown.Header = Header;

mapDisplayNames(WTDropdown);

WTDropdown.defaultProps = {
  as: 'div',
  navbar: false,
};

export default WTDropdown;
