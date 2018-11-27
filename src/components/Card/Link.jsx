/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string
};

const WTLink = (props: PropsType) => (<BSCard.Link {...props} />);

WTLink.defaultProps = {
  as: 'a',
};


export default WTLink;
