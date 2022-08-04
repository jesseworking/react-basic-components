/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { TextField } from './index';

describe('TextField', () => {
  let mockOnChange, wrapper;

  beforeEach(() => {
    mockOnChange = sinon.stub();

    wrapper = mount(
      <TextField input={{ value: 'foo', onChange: mockOnChange }} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render an input with the given value', () => {
    expect(wrapper.find('input[value="foo"]')).to.have.length(1);
  });

  it('should run a given onChange function when the text field input changes', () => {
    const event = { target: { value: 'f' } };

    wrapper.find('input').simulate('change', event);

    expect(mockOnChange).to.have.been.called();
  });
});
