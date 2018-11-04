import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Container from '../../src/components/Layout/Container';
import Col from '../../src/components/Layout/Col';
import Row from '../../src/components/Layout/Row';

describe('Layout', () => {
  describe('<Container />', () => {
    it('Renders <Container />', () => {
      const wrapper = shallow(<Container />);
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('<Row />', () => {
    it('Renders <Container />' , () => {
      const wrapper = shallow(<Row />);
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('<Col />', () => {
    const basicProps = {

    };
    const fake = sinon.fake();
    it('Renders <Col />' , () => {
      const wrapper = shallow(<Col />);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
