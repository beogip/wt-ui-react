import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import Nav from 'components/Nav';

import '@windingtree/wt-ui/dist/styles.css';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Navs', module);
stories.addDecorator(withKnobs);

const variantOptions = {
  tabs: 'tabs',
  pills: 'pills',
};

stories.add('Basic Example', () => (
  <Nav justify variant={radios('variant', variantOptions)} defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
      Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
));

stories.add('Dropdown Example', () => (
  <Nav variant="pills" activeKey="1" onSelect={action('itemSelected')}>
    <Nav.Item>
      <Nav.Link eventKey="1" href="#/home">
            NavLink 1 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="2" title="Item">
            NavLink 2 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="3" disabled>
            NavLink 3 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Dropdown title="Dropdown" id="nav-dropdown">
      <Nav.Dropdown.Item eventKey="4.1">Action</Nav.Dropdown.Item>
      <Nav.Dropdown.Item eventKey="4.2">Another action</Nav.Dropdown.Item>
      <Nav.Dropdown.Item eventKey="4.3">
            Something else here
      </Nav.Dropdown.Item>
      <Nav.Dropdown.Divider />
      <Nav.Dropdown.Item eventKey="4.4">Separated link</Nav.Dropdown.Item>
    </Nav.Dropdown>
  </Nav>
));
