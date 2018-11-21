// @flow
import React from 'react';
import BsTabs from 'react-bootstrap/lib/Tabs';
import { Transition } from 'react-transition-group';

type PropsType = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  // eslint-disable-next-line flowtype/no-weak-types
  activeKey?: any,

  // eslint-disable-next-line flowtype/no-weak-types
  defaultActiveKey?: any,

  /**
   * Navigation style
   */
  variant: 'tabs' | 'pills',

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  transition?: Transition | false,

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   */
  id: string,

  /**
   * Callback fired when a Tab is selected.
   *
   * @controllable activeKey
   */
  // eslint-disable-next-line flowtype/no-weak-types
  onSelect?: (eventKey: any, event?: SyntheticEvent<*>) => void,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: boolean,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: boolean
};

const WTTabs = (props: PropsType) => (<BsTabs {...props} />);

WTTabs.defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false,
};

export default WTTabs;
