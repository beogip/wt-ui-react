/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string
};

const WTSubtitle = (props: PropsType) => (<BSCard.Subtitle {...props} />);

WTSubtitle.defaultProps = {
  as: 'h6',
};


export default WTSubtitle;
