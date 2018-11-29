// @flow
import React from 'react';
import BsNavbar from 'react-bootstrap/lib/Navbar';
import mapDisplayNames from 'utils/componentNames';
import WTBrand from './Brand';
import WTCollapse from './Collapse';
import WTToggle from './Toggle';

type PropsType = {
  /**
   * The general visual variant a the Navbar.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   */
  variant: 'light' | 'dark',

  /**
   * The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: true | 'sm' | 'md' | 'lg' | 'xl',

  /**
   * A convenience prop for adding `bg-*` utility classes since they are so commonly used here.
   * `light` and `dark` are common choices but any `bg-*` class is supported,
   * including any custom ones you might define.
   * Pairs nicely with the `variant` prop.
   */
  bg?: string,

  /**
   * Create a fixed navbar along the top or bottom of the screen, that scrolls with the
   * page. A convenience prop for the `fixed-*` positioning classes.
   */
  fixed?: 'top' | 'bottom',

  /**
   * Position the navbar at the top or bottom of the viewport,
   * but only after scrolling past it. . A convenience prop for the `sticky-*` positioning classes.
   *
   *  __Not supported in <= IE11 and other older browsers without a polyfill__
   */
  sticky?: 'top' | 'bottom',

  /**
   * Set a custom element for this component.
   */
  as: React$Element<*> | string,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle?: () => void,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect?: (eventKey: mixed, event?: SyntheticEvent<*>) => void,

  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: boolean,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded?: boolean,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * Navbars whose `as` is something other than `<nav>`.
   */
  role?: string
};

const WTNavbar = (props: PropsType) => (
  <BsNavbar {...props} />
);

WTNavbar.Brand = WTBrand;
WTNavbar.Toggle = WTToggle;
WTNavbar.Collapse = WTCollapse;

mapDisplayNames(WTNavbar);

WTNavbar.defaultProps = {
  as: 'nav',
  expand: true,
  variant: 'light',
  collapseOnSelect: false,
};


export default WTNavbar;
