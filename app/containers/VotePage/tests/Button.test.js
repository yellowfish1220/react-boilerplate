import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const renderedComponent = shallow(<Button />);
    expect(renderedComponent.type()).toEqual('button');
  });
});
