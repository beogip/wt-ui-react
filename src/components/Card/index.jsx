/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';

import WTBody from './Body';
import WTImage from './Image';
import WTImageOverlay from './image-overlay';

type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as?: string,
  /**
   * Sets card background.
   */
  kind?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light',
  /**
   * Creates a Card with a Card.Body inside passing the children directly to it.
   */
  body?: boolean,
  /**
   * Sets card border color
   */
  border?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light',
  /**
   * Sets card text color
   */
  text?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'muted'
};

const WTCard = (props: PropsType) => {
  const { kind, ...others } = props;

  return <BSCard variant={kind} {...others} />;
};

WTCard.Body = WTBody;
WTCard.Image = WTImage;
WTCard.ImageOverlay = WTImageOverlay;

WTCard.defaultProps = {
  as: 'div',
  body: false,
};


export default WTCard;
