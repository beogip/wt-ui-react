/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, text } from '@storybook/addon-knobs';
import Navbar from 'components/Navbar';
import Nav from 'components/Nav';
import Container from 'components/Layout/Container';

import '@windingtree/wt-ui/dist/styles.css';

const stories = storiesOf('Navbar', module);
stories.addDecorator(withKnobs);

const variantOptions = {
  light: 'light',
  dark: 'dark',
};

stories.add('Base Example', () => (
  <Navbar expand="lg" variant={radios('variant', variantOptions, 'light')} bg={text('bg')}>
    <Container>
      <Navbar.Brand href="#home" as="a" className="mr-2" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
        {/* ! TODO CHANGE THE BELOW LINE WHEN WE HAVE GIPHY COMPONENT */}
        <i className="mdi mdi-24px mdi-menu" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
          <Nav.Dropdown title="Dropdown" id="basic-nav-dropdown">
            <Nav.Dropdown.Item href="#action/3.1">Action</Nav.Dropdown.Item>
            <Nav.Dropdown.Item href="#action/3.2">Another action</Nav.Dropdown.Item>
            <Nav.Dropdown.Item href="#action/3.3">Something</Nav.Dropdown.Item>
            <Nav.Dropdown.Divider />
            <Nav.Dropdown.Item href="#action/3.4">Separated link</Nav.Dropdown.Item>
          </Nav.Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
));
