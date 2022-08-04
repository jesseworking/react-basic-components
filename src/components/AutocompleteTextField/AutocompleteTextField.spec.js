/* eslint-env mocha */

import * as React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme/build';
import * as sinon from 'sinon';

import { AutocompleteTextField } from './index';
import TextField from '../TextField';

describe('AutocompleteTextField', () => {
  let mockFetch,
    mockFormatTextInputValue,
    mockFormatItemKey,
    mockOnChange,
    mockRenderItem,
    wrapper;

  beforeEach(() => {
    mockFetch = sinon
      .stub()
      .resolves([
        { name: 'foo', count: 12 },
        { name: 'bar', count: 23 },
        { name: 'baz', count: 34 }
      ]);
    mockOnChange = sinon.stub();
    mockFormatTextInputValue = item => item.name;
    mockRenderItem = item => item.name;
    mockFormatItemKey = item => item.name;

    wrapper = mount(
      <AutocompleteTextField
        dropdownItemProps={{
          renderItem: mockRenderItem,
          formatKey: mockFormatItemKey
        }}
        fetcher={mockFetch}
        input={{ value: { name: 'foo', count: 12 }, onChange: mockOnChange }}
        textFieldProps={{
          formatValue: mockFormatTextInputValue
        }}
      />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a TextField', () => {
    expect(wrapper.find(TextField)).to.have.length(1);
  });

  it('should run a fetch function when the text field input changes', () => {
    const event = { target: { value: 'f' } };

    wrapper
      .find(TextField)
      .prop('input')
      .onChange(event);

    expect(mockFetch).to.have.been.called();
  });

  it('should drop down a list of items when after running the fetch function', done => {
    const event = { target: { value: 'f' } };

    wrapper
      .find(TextField)
      .prop('input')
      .onChange(event);

    setTimeout(() => {
      const { isOpen, items } = wrapper.update().state();

      expect(isOpen).to.be.true();
      expect(items).to.deep.equal([
        { name: 'foo', count: 12 },
        { name: 'bar', count: 23 },
        { name: 'baz', count: 34 }
      ]);

      done();
    }, 10);
  });

  it('should run input.onChange when a dropdown item is clicked', () => {
    wrapper.setProps({ input: { value: 'foo', onChange: mockOnChange } });
    wrapper.setState({
      isOpen: true,
      items: [
        { name: 'foo', count: 12 },
        { name: 'bar', count: 23 },
        { name: 'baz', count: 34 }
      ]
    });

    wrapper
      .find('[data-test-id="dropdownItem"]')
      .first()
      .simulate('click');

    expect(mockOnChange).to.have.been.called();
  });
});
