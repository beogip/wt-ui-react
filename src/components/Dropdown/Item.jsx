/* @flow */
import React from 'react';
import BsItem from 'react-bootstrap/lib/DropdownItem';
import SafeAnchor from 'react-bootstrap/lib/SafeAnchor';


type PropsType<EK> = {
  /**
   * Highlight the menu item as active.
   */
  active?: boolean,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: boolean,

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  // eslint-disable-next-line flowtype/no-weak-types
  eventKey?: EK,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick?: () => void,

  /**
   * Callback fired when the menu item is selected.
   *
   */
  onSelect?: (eventKey: EK, event: SyntheticEvent<*>) => void,
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*>
};

const WTItem = <EK>(props: PropsType<EK>) => <BsItem {...props} />;

WTItem.defaultProps = {
  as: SafeAnchor,
  disabled: false,
};


export default WTItem;
