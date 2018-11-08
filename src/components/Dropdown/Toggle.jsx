/* @flow */
import React from 'react';
import BsToggle from 'react-bootstrap/lib/DropdownToggle';
// TODO we should replace this button by our Button,
// TODO but we cannot do it until this issue has been closed (https://github.com/facebook/flow/issues/6103)
import Button from 'react-bootstrap/lib/Button';

type PropsType = {
  title?: string,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   */
  id?: string | number,

  split?: boolean,
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*>
};

const WTToggle = (props: PropsType) => <BsToggle {...props} />;

WTToggle.defaultProps = {
  as: Button,
};

export default WTToggle;
