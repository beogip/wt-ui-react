/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$Element<*> | string,
  /**
   * Defines image position inside the card.
   */
  variant?: 'top' | 'bottom'
};

const WTImage = (props: PropsType) => (<BSCard.Img {...props} />);

WTImage.defaultProps = {
  as: 'img',
};


export default WTImage;
