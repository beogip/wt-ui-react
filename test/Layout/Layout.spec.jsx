/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import Container from 'components/Layout/Container';
import Col from 'components/Layout/Col';
import Row from 'components/Layout/Row';

describe('Layout', () => {
  describe('<Container />', () => {
    it('Renders <Container />', () => {
      const wrapper = shallow(<Container><Row>Test</Row></Container>);
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('<Row />', () => {
    it('Renders <Row />', () => {
      const wrapper = shallow(<Row>Test</Row>);
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('<Col />', () => {
    it('Renders <Col />', () => {
      const wrapper = shallow(<Col>Test</Col>);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
