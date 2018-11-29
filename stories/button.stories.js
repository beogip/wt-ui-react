// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs/react';
import Button from 'components/Button';
import ToggleButton from 'components/ToggleButton';

import '@windingtree/wt-ui/dist/styles.css';
import ToggleButtonGroup from 'components/ToggleButtonGroup';

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
const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('Button', () => (
    <Button
      onClick={action('clicked')}
      variant={select('variant', variantOptions, 'primary')}
      active={boolean('active', false)}
      block={boolean('block', false)}
      disabled={boolean('disabled', false)}
      outlined={boolean('outlined', false)}
      className={text('className', '')}
      size={select('size', [undefined, 'sm', 'lg'], undefined)}
    >
      {text('children', 'WTButton')}
    </Button>
  ))
  .add('ToggleButton', () => (
    <ToggleButtonGroup type="checkbox" defaultValue="test">
      <ToggleButton
        value={{ test: 'test' }}
        onClick={action('clicked')}
        variant={select('variant', variantOptions, 'primary')}
        active={boolean('active', false)}
        block={boolean('block', false)}
        disabled={boolean('disabled', false)}
        outlined={boolean('outlined', false)}
        className={text('className', '')}
        size={select('size', [undefined, 'sm', 'lg'], undefined)}
      >
        {text('children', 'Customizable Button')}
      </ToggleButton>
      <ToggleButton
        value="test"
        onClick={action('fixedButton clicked')}
        variant="accent"
      >
        Fixed Button
      </ToggleButton>
    </ToggleButtonGroup>
  ));
