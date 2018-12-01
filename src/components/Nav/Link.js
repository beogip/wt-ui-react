// @flow
import React from 'react';
import NavLink from 'react-bootstrap/lib/NavLink';
import SafeAnchor from 'react-bootstrap/lib/SafeAnchor';

type PropsType = {
  /**
   * The active state of the NavItem item.
   */
  active?: boolean,

  /**
   * The disabled state of the NavItem item.
   */
  disabled: boolean,

  /**
   * The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,
   * the role defaults to 'tab'
   * */
  role?: string,

  /** The HTML href attribute for the `NavLink` */
  href?: string,

  /** A callback fired when the `NavLink` is selected.
   */
  // eslint-disable-next-line flowtype/no-weak-types
  onSelect?: (eventKey: any, event: SyntheticEvent<*>) => void,

  /**
   * Uniquely idenifies the `NavItem` amoungst its siblings,
   * used to determine and control the active state ofthe parent `Nav`
   */
  // eslint-disable-next-line flowtype/no-weak-types
  eventKey?: any,

  as: React$ComponentType<*> | string
};

const WTLink = (props: PropsType) => (
  <NavLink {...props} />
);

WTLink.defaultProps = {
  disabled: false,
  as: SafeAnchor,
};


export default WTLink;
