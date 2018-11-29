/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@windingtree/wt-ui/dist/styles.css';
import CardDeck from 'components/CardDeck';
import Card from 'components/Card';


storiesOf('Card Deck', module)
  .add('Baisc Card Deck', () => (
    <CardDeck>
      <Card>
        <Card.Image variant="top" src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/sign/png/wt-grad.png" style={{ width: '18rem' }} />
        <Card.Body>
          Card 1. Card body, can be a text or a hotel description
        </Card.Body>
      </Card>
      <Card>
        <Card.Image variant="top" src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/sign/png/wt-grad.png" style={{ width: '18rem' }} />
        <Card.Body>
          Card 2. Card body, can be a text or a hotel description
        </Card.Body>
      </Card>
      <Card>
        <Card.Image variant="top" src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/sign/png/wt-grad.png" style={{ width: '18rem' }} />
        <Card.Body>
          Card 3. Card body, can be a text or a hotel description
        </Card.Body>
      </Card>
    </CardDeck>
  ));
