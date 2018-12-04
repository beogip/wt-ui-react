// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import Navbar from 'components/Navbar';
import Nav from 'components/Nav';
import Container from 'components/layout/Container';

import '@windingtree/wt-ui/dist/styles.css';

const stories = storiesOf('Navbar', module);
stories.addDecorator(withKnobs);

const variantOptions = {
  light: 'light',
  dark: 'dark',
  animated: 'animated',
};

stories.add('Base Example', () => (
  <div style={{ height: 600 }}>
    <Navbar expand="lg" variant={select('variant', variantOptions, 'animated')} bg={text('bg', '')} fixed="top">
      <Container>
        <Navbar.Brand href="#home" as="a" className="mr-2" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          {/* ! TODO CHANGE THE BELOW LINE WHEN WE HAVE GIPHY COMPONENT */}
          <i className="mdi mdi-24px mdi-menu" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" animated>
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
  </div>
));
