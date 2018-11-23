/* @flow */
import React from 'react';
import BSCardDeck from 'react-bootstrap/lib/CardDeck';


type PropsType = {
  /**
   * You can use a custom element type for this component.
   */
  as?: string,
  /**
   * Defines image position inside the card.
   */
  variant?: 'top' | 'bottom'
};

const WTCardDeck = (props: PropsType) => (<BSCardDeck {...props} />);

WTCardDeck.defaultProps = {
  as: 'div',
};


export default WTCardDeck;
