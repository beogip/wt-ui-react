/* @flow */
import React from 'react';
import BSCard from 'react-bootstrap/lib/Card';
import mapDisplayNames from 'utils/componentNames';

import WTBody from './Body';
import WTImage from './Image';
import WTImageOverlay from './ImageOverlay';
import WTLink from './Link';
import WTSubtitle from './Subtitle';
import WTText from './Text';
import WTTitle from './Title';
import WTFooter from './Footer';
import WTHeader from './Header';

type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as: React$ComponentType<*> | string,
  /**
   * Sets card background.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light',
  /**
   * Creates a Card with a Card.Body inside passing the children directly to it.
   */
  body: boolean,
  /**
   * Sets card border color
   */
  border?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light',
  /**
   * Sets card text color
   */
  text?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'muted'
};

const WTCard = (props: PropsType) => (<BSCard {...props} />);

WTCard.Body = WTBody;
WTCard.Image = WTImage;
WTCard.ImageOverlay = WTImageOverlay;
WTCard.Link = WTLink;
WTCard.Subtitle = WTSubtitle;
WTCard.Title = WTTitle;
WTCard.Text = WTText;
WTCard.Footer = WTFooter;
WTCard.Header = WTHeader;
mapDisplayNames(WTCard);

WTCard.defaultProps = {
  as: 'div',
  body: false,
};


export default WTCard;
