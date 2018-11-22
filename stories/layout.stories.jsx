/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from 'components/layout/Container';
import Row from 'components/layout/Row';
import Col from 'components/layout/Col';
import Button from 'components/Button';

import '@windingtree/wt-ui/dist/styles.css';


storiesOf('Layout', module)
  .add('Container', () => (
    <Container>
      <Row>
        <Col sm><Button block style={{ margin: '1px 0px' }}>sm=true</Button></Col>
        <Col sm><Button block style={{ margin: '1px 0px' }}>sm=true</Button></Col>
        <Col sm><Button block style={{ margin: '1px 0px' }}>sm=true</Button></Col>
      </Row>
      <Row>
        <Col sm={7}><Button block style={{ margin: '1px 0px' }}>sm=7</Button></Col>
        <Col sm={5}><Button block style={{ margin: '1px 0px' }}>sm=5</Button></Col>
      </Row>
      <Row>
        <Col sm><Button block style={{ margin: '1px 0px' }}>sm=true</Button></Col>
        <Col sm><Button block style={{ margin: '1px 0px' }}>sm=true</Button></Col>
      </Row>
      <Row>
        <Col sm><Button block style={{ margin: '1px 0px' }}>sm=true</Button></Col>
      </Row>
    </Container>
  ));
