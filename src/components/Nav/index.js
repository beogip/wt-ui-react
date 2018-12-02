// @flow
import React from 'react';
import BsNav from 'react-bootstrap/lib/Nav';
import mapDisplayNames from 'utils/componentNames';
import WTItem from './Item';
import WTLink from './Link';
import WTNavDropdown from './Dropdown';

type PropsType = {
    /**
     * The visual variant of the nav items.
     */
    variant?: 'tabs' | 'pills',

    /**
     * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
     */
    // eslint-disable-next-line flowtype/no-weak-types
    activeKey?: any,

    /**
     * Have all `NavItem`s to proportionatly fill all available width.
     */
    fill: boolean,

    /**
     * Have all `NavItem`s to evenly fill all available width.
     */
    justify: boolean,

    /**
     * A callback fired when a NavItem is selected.
     *
     * ```js
     * function (
     *  Any eventKey,
     *  SyntheticEvent event?
     * )
     * ```
     */
    // eslint-disable-next-line flowtype/no-weak-types
    onSelect?: (eventKey: any, SyntheticEvent<*>) => void,

    /**
     * ARIA role for the Nav, in the context of a TabContainer, the default will
     * be set to "tablist", but can be overridden by the Nav when set explicitly.
     *
     * When the role is "tablist", NavLink focus is managed according to
     * the ARIA authoring practices for tabs:
     * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
     */
    role?: string,

    /**
     * Apply styling an alignment for use in a Navbar. This prop will be set
     * automatically when the Nav is used inside a Navbar.
     */
    navbar?: boolean,

    as: React$Element<*> | string,
    animated: boolean
  };

const WTNav = (props: PropsType) => {
  const { animated, ...restProps } = props;
  const style = animated ? { transform: 'translateX(126px)' } : {};

  return (
    <BsNav {...restProps} style={style} />
  );
};
WTNav.Item = WTItem;
WTNav.Link = WTLink;
WTNav.Dropdown = WTNavDropdown;

mapDisplayNames(WTNav);

WTNav.defaultProps = {
  animated: false,
  justify: false,
  fill: false,
  as: 'ul',
};

export default WTNav;
