/* eslint-env mocha */

import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme/build';
import * as sinon from 'sinon';

import { Stepper } from './index';

describe('Stepper', () => {
  let mockSteps, mockOnStepClick, wrapper;

  beforeEach('foo', () => {
    mockSteps = [
      {
        label: 'First do Step 1',
        className: 'step'
      },
      {
        label: 'Then do Step 2',
        className: 'step'
      },
      {
        label: 'Finally do Step 3',
        className: 'step'
      }
    ];
    mockOnStepClick = sinon.stub();

    wrapper = shallow(<Stepper activeStep={0} steps={mockSteps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a step', () => {
    expect(wrapper.html()).to.contain('First do Step 1');
  });

  it('should handle clicks to a label', () => {
    wrapper.setProps({ onStepClick: mockOnStepClick });

    wrapper
      .find('.step')
      .at(0)
      .simulate('click');
    expect(mockOnStepClick).to.have.been.called.with(0);

    wrapper
      .find('.step')
      .at(1)
      .simulate('click');
    expect(mockOnStepClick).to.have.been.called.with(1);
  });

  it('should render previous steps as completed, if linear');

  it('should render completed steps as completed');
});
