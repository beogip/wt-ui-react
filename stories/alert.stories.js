// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs/react';
import Alert from 'components/Alert';

import '@windingtree/wt-ui/dist/styles.css';

const variantOptions = {
  primary: 'primary',
  accent: 'accent',
  secondary: 'secondary',
  light: 'light',
  dark: 'dark',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  info: 'info',
};
const stories = storiesOf('Alert', module);
stories.addDecorator(withKnobs);

stories
  .add('Alert', () => (
    <Alert
      onClose={action('closed')}
      variant={select('variant', variantOptions, 'primary')}
      show={boolean('show', true)}
      dismissible={boolean('dismissible', false)}
      closeLabel={text('closeLabel', 'Some close label')}
    >
      {text('children', 'WTAlert primary')}
    </Alert>
  ));
