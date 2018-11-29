/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@windingtree/wt-ui/dist/styles.css';

import Footer from 'components/Footer';
import About from 'components/Footer/About';
import Comunity from 'components/Footer/Comunity';
import Contacts from 'components/Footer/Contacts';
import Developers from 'components/Footer/Developers';
import LifToken from 'components/Footer/Lif-token';
import Solutions from 'components/Footer/Solutions';


storiesOf('Footer', module)
  .add('Baisc Footer', () => (
    <Footer>
      <About />
      <Developers />
    </Footer>
  ))
  .add('Full Footer', () => (
    <Footer>
      <About />
      <LifToken />
      <Comunity />
      <Developers />
      <Solutions />
      <Contacts />
    </Footer>
  ));
