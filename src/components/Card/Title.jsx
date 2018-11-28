/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string
};

const WTTitle = (props: PropsType) => (<BSCard.Title {...props} />);

WTTitle.defaultProps = {
  as: 'h5',
};


export default WTTitle;
