/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@windingtree/wt-ui/dist/styles.css';
import Button from 'components/Button';

storiesOf('Button', module)
  .add('Primary', () => <Button onClick={action('clicked')}>Primary Button</Button>)
  .add('Accent', () => <Button onClick={action('clicked')} variant="accent">Primary Button</Button>)
  .add('Light', () => <Button onClick={action('clicked')} variant="light">Light Button</Button>)
  .add('Primary outlined', () => <Button onClick={action('clicked')} outlined>Primary Button</Button>)
  .add('Accent outlined', () => <Button onClick={action('clicked')} variant="accent" outlined>Primary Button</Button>)
  .add('Light outlined', () => <Button onClick={action('clicked')} variant="light" outlined>Light Button</Button>)
  .add('Active', () => <Button onClick={action('clicked')} active>Active Button</Button>)
  .add('Block', () => <Button onClick={action('clicked')} block>Block Button</Button>)
  .add('Disabled', () => <Button onClick={action('clicked')} disabled>Disabled Button</Button>)
  .add('Link', () => <Button href="#">Link Button</Button>)
  .add('Small', () => <Button onClick={action('clicked')} size="sm">Small Button</Button>)
  .add('Large', () => <Button onClick={action('clicked')} size="lg">Large Button</Button>)
  .add('All', () => <Button href="#" active block disabled size="lg">All Button</Button>);
