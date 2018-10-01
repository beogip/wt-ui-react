import React from 'react';
import { shallow } from 'enzyme';

import Button from '../src/components/Button';

it('Renders <Button /> component', () => {
  expect(true).toBe(true);
});

describe('<Button />', () => {
  it('Renders <Button /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});
