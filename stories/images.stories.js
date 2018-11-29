/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import '@windingtree/wt-ui/dist/styles.css';

import Image from 'components/Image';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('Baisc Image', () => (
    <Image
      src="http://via.placeholder.com/250"
      fluid={boolean('fluid', false)}
      rounded={boolean('rounded', false)}
      roundedCircle={boolean('roundedCircle', false)}
      thumbnail={boolean('thumbnail', false)}
    />
  ));
