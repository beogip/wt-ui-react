/* @flow */
import React from 'react';
import BsMenu from 'react-bootstrap/lib/DropdownMenu';


type PropsType = {
  /** Controls the visibility of the Dropdown menu  */
  show?: boolean,

  /** Aligns the Dropdown menu to the right of it's container. */
  alignRight: boolean,

  onSelect?: () => void,

  /**
   * Which event when fired outside the component will cause it to be closed
   *
   */
  rootCloseEvent: 'click' | 'mousedown',

  /**
   * Control the rendering of the DropdownMenu. All non-menu props
   * (listed here) are passed through to the `as` Component.
   *
   * If providing a custom, non DOM, component. the `show`, `close` and `alignRight` props
   * are also injected and should be handled appropriatedly.
   */
  as: React$Element<*> | string
};

const WTMenu = (props: PropsType) => <BsMenu {...props} />;

WTMenu.defaultProps = {
  alignRight: false,
  as: 'div',
  rootCloseEvent: 'click',
};

export default WTMenu;
