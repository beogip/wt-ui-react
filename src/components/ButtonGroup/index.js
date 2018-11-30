// @flow
import React from 'react';
import BsButtonGroup from 'react-bootstrap/lib/ButtonGroup';

type PropsType = {
    /**
     * Sets the size for all Buttons in the group.
     */
    size?: 'sm' | 'lg',

    /** Make the set of Buttons appear vertically stacked. */
    vertical: boolean,

    /**
     * Display as a button toggle group.
     * (Generally it's better to use `ToggleButtonGroup` directly)
     */
    toggle: boolean,

    /**
     * An ARIA role describing the button group. Usually the default
     * "group" role is fine. An `aria-label` or `aria-labelledby`
     * prop is also recommended.
     */
    role: string,
    children: React$Node,
    as: React$Element<*> | string
  };

const WTButtonGroup = (props: PropsType) => (
  <BsButtonGroup {...props} />
);

WTButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div',
};

export default WTButtonGroup;
