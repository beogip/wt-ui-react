/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, radios } from '@storybook/addon-knobs';
import Dropdown from 'components/Dropdown';

import '@windingtree/wt-ui/dist/styles.css';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

const variantOptions = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
  light: 'light',
  dark: 'dark',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  info: 'info',
};

stories.add('Primary', () => (
  <Dropdown>
    <Dropdown.Toggle id="toggle" variant={radios('variant', variantOptions)}>
        Some button
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onSelect={action('itemClicked')} eventKey="1">
          Some Item 1
      </Dropdown.Item>
      <Dropdown.Item>
          Some Item 2
      </Dropdown.Item>
      <Dropdown.Item>
          Some Item 3
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
));
