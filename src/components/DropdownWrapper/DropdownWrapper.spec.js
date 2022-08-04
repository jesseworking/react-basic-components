/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { DropdownWrapper } from './index';

describe('DropdownWrapper', () => {
  let wrapper;

  const MockDropdown = () => <div />;

  beforeEach(() => {
    wrapper = mount(
      <DropdownWrapper dropdown={<MockDropdown />}>
        <div>Foo</div>
      </DropdownWrapper>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render its children', () => {
    expect(wrapper.find('div[children="Foo"]')).to.have.length(1);
  });

  it('should render a dropped-down component if isOpen is true', () => {
    wrapper.setProps({ isOpen: true });
    expect(wrapper.find(MockDropdown)).to.have.length(1);
  });

  it('should not render a dropped-down component if isOpen is false', () => {
    wrapper.setProps({ isOpen: false });
    expect(wrapper.find(MockDropdown)).to.have.length(0);
  });
});
