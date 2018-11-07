/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import List from '../../src/components/List';


describe.only('List', () => {
  describe('<List.item />', () => {
    it('Renders <List.item /> inside of a List' , () => {
      const wrapper = shallow(
        <List>
          <List.Item variant='secondary'>
            Item 1
          </List.Item>
          <List.Item variant='secondary'>
            Item 2
          </List.Item>
        </List>);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
