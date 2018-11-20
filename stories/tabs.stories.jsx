// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
  withKnobs, select,
} from '@storybook/addon-knobs/react';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import Col from 'components/layout/Col';
import Row from 'components/layout/Row';
import Nav from 'components/Nav';

import '@windingtree/wt-ui/dist/styles.css';

const variantOptions = {
  tabs: 'tabs',
  pills: 'pills',
};
const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

stories
  .add('Basic example', () => (
    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" variant={select('variant', variantOptions, 'tabs')}>
      <Tab eventKey="home" title="Home">
        <p>Tab Home</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Tab Profile</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>Tab Contact</p>
      </Tab>
    </Tabs>
  ))
  .add('Custom Tabs', () => (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p>First</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>Second</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  ));
