/* @flow */
import React from 'react';
import BSForm from 'react-bootstrap/lib/Form';

type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string
};

const WTRow = (props: PropsType) => (<BSForm.Row {...props} />);

WTRow.defaultProps = {
  as: 'div',
};


export default WTRow;
