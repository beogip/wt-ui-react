// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs/react';
import ButtonGroup from 'components/ButtonGroup';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import ButtonToolbar from 'components/ButtonToolbar';
import Button from 'components/Button';

import '@windingtree/wt-ui/dist/styles.css';

const stories = storiesOf('ButtonGroup', module);
stories.addDecorator(withKnobs);

stories
  .add('Button Group', () => (
    <ButtonGroup
      vertical={boolean('vertical', false)}
      toggle={boolean('toggle', false)}
      className={text('className', '')}
      size={select('size', [undefined, 'sm', 'lg'], undefined)}
    >
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  ))
  .add('ButtonToolbar', () => (
    <ButtonToolbar>
      <ButtonGroup className="mr-2">
        <Button variant="primary">Left</Button>
        <Button variant="primary">Middle</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="accent">Left</Button>
        <Button variant="accent">Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ))
  .add('ToggleButtonGroup', () => (
    <ToggleButtonGroup>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ToggleButtonGroup>
  ));
