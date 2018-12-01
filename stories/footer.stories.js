/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@windingtree/wt-ui/dist/styles.css';

import Footer from 'components/Footer';


storiesOf('Footer', module)
  .add('Baisc Footer', () => (
    <Footer>
      <Footer.About />
      <Footer.Developers />
    </Footer>
  ))
  .add('Full Footer', () => (
    <Footer>
      <Footer.About />
      <Footer.LifToken />
      <Footer.Comunity />
      <Footer.Developers />
      <Footer.Solutions />
      <Footer.Contacts />
    </Footer>
  ));
