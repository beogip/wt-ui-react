// @flow
import React from 'react';
import BsTabPane from 'react-bootstrap/lib/TabPane';
import { Transition } from 'react-transition-group';

type PropsType = {
  as?: React$Element<*>,

  /**
   * A key that associates the `TabPane` with it's controlling `NavLink`.
   */
  // eslint-disable-next-line flowtype/no-weak-types
  eventKey?: any,

  /**
   * Toggles the active state of the TabPane, this is generally controlled by a
   * TabContainer.
   */
  active?: boolean,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  transition?: Transition | false,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter?: () => void,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering?: () => void,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered?: () => void,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit?: () => void,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting?: () => void,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited?: () => void,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter?: boolean,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit?: boolean
};

const WTPane = (props: PropsType) => (
  <BsTabPane {...props} />
);

export default WTPane;
