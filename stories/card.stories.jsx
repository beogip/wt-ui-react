/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@windingtree/wt-ui/dist/styles.css';

import Card from 'components/Card';



storiesOf('Card', module)
  .add('Baisc Image Card', () => (
  <Card>
    <Card.Image variant='top' src='https://raw.githubusercontent.com/windingtree/wt-ui-assets/master/logo-variants/sign/png/wt-grad.png' style={{width: '18rem'}}/>
    <Card.Body>
      Card body, can be a text or a hotel description
    </Card.Body>
  </Card>
  ));


  