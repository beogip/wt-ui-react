/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string
};

const WTImageOverlay = (props: PropsType) => (<BSCard.ImgOverlay {...props} />);

WTImageOverlay.defaultProps = {
  as: 'div',
};


export default WTImageOverlay;
