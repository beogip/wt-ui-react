// @flow
import React from 'react';
import { Transition } from 'react-transition-group';
import BsTabContainer from 'react-bootstrap/lib/TabContainer';

type PropsType = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id?: string,
  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  transition?: Transition | false,
  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter?: boolean,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit?: boolean,

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${eventKey}`
   */
  // eslint-disable-next-line flowtype/no-weak-types
  generateChildId?: (eventKey: any, type: 'tab' | 'pane') => string,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  // eslint-disable-next-line flowtype/no-weak-types
  onSelect?: (key: any) => void,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  // eslint-disable-next-line flowtype/no-weak-types
  activeKey?: any
};

const WTContainer = (props: PropsType) => (
  <BsTabContainer {...props} />
);

export default WTContainer;
