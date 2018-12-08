/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@windingtree/wt-ui/dist/styles.css';

import Card from 'components/Card';


storiesOf('Card', module)
  .add('Baisc Image Card', () => (
    <Card>
      <Card.Header>
        <Card.Image variant="top" src="https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/sign/png/wt-grad.png" style={{ width: '18rem' }} />
      </Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Card body, can be a text or a hotel description
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          Some footer
        </Card.Text>
      </Card.Footer>
    </Card>
  ));
