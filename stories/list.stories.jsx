/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@windingtree/wt-ui/dist/styles.css';

import List from 'components/List';

storiesOf('List', module)
  .add('List group', () => (
    <List variant='flush'>
      <List.Item>
        Item 1
      </List.Item>
      <List.Item>
        Item 2
      </List.Item>
    </List>
  ))
  .add('Action list group', () => (
    <List>
      <List.Item variant='secondary' action>
        Item 1
      </List.Item>
      <List.Item variant='secondary' action>
        Item 2
      </List.Item>
      <List.Item variant='secondary' action disabled>
        Item 3
      </List.Item>
    </List>
  ));