// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs/react';
import ButtonGroup from 'components/ButtonGroup';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import ButtonToolbar from 'components/ButtonToolbar';
import ToggleButton from 'components/ToggleButton';
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
      <Button variant="secondary" value="1">Left</Button>
      <Button variant="secondary" value="2">Middle</Button>
      <Button variant="secondary" value="3">Right</Button>
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
    <ButtonToolbar>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
        <ToggleButton value={2}>Radio 2</ToggleButton>
        <ToggleButton value={3}>Radio 3</ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
  ));
