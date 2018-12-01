import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../src/components/Button';

describe('<Button />', () => {
  const fake = sinon.fake();
  it('Renders <Button /> component with <button ...>', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Renders <Button /> component <a ...>', () => {
    const wrapper = shallow(<Button href="#" />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Must call function onClick', () => {
    const wrapper = shallow(<Button onClick={fake} />);
    wrapper.simulate('click');
    expect(fake.callCount).toBe(1);
  });
});
