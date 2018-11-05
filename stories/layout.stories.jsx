/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@windingtree/wt-ui/dist/styles.css';

import Container from 'components/Layout/Container';
import Row from 'components/Layout/Row';
import Col from 'components/Layout/Col';
import Button from 'components/Button';

storiesOf('Layout', module)
  .add('Container', () => (
    <Container>
      <Row>
        <Col sm><Button block style={{margin: '1px 0px'}}>sm=true</ Button></Col>
        <Col sm><Button block style={{margin: '1px 0px'}}>sm=true</ Button></Col>
        <Col sm><Button block style={{margin: '1px 0px'}}>sm=true</ Button></Col>
      </Row>
      <Row>
        <Col sm={7}><Button block style={{margin: '1px 0px'}}>sm=7</ Button></Col>
        <Col sm={5}><Button block style={{margin: '1px 0px'}}>sm=5</ Button></Col>
      </Row>
      <Row>
        <Col sm><Button block style={{margin: '1px 0px'}}>sm=true</ Button></Col>
        <Col sm><Button block style={{margin: '1px 0px'}}>sm=true</ Button></Col>
      </Row>
      <Row>
        <Col sm><Button block style={{margin: '1px 0px'}}>sm=true</ Button></Col>
      </Row>
    </Container>
  ));
