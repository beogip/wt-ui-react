// @flow
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import InputGroup from 'components/InputGroup';

import '@windingtree/wt-ui/dist/styles.css';

const stories = storiesOf('InputGroup', module);
stories.addDecorator(withKnobs);
// TODO IMPROVE THIS STORY WHEN WE HAVE FORMS
stories
  .add('Base Example', () => (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>));
