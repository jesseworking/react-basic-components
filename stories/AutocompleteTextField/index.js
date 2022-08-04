/* eslint-disable react/display-name */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import AutocompleteTextField from '../../src/components/AutocompleteTextField';
import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';
import mockFetch from '../utils/mockFetch';

import s from './CustomStyling.css';

const store = new Store({
  value: {
    label: ''
  }
});

storiesOf('AutocompleteTextField', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('default', () => (
    <AutocompleteTextField
      dropdownItemProps={{
        renderItem: item => item.label,
        formatKey: item => item.label
      }}
      fetcher={mockFetch}
      input={{
        value: store.get('value'),
        onChange: value => store.set({ value })
      }}
      textFieldProps={{
        formatValue: value => value.label
      }}
    />
  ))
  .add('with styling', () => (
    <AutocompleteTextField
      className={s.textField}
      dropdownItemProps={{
        className: s.dropdownItem,
        renderItem: item => item.label,
        formatKey: item => item.label
      }}
      dropdownClassName={s.dropdown}
      fetcher={mockFetch}
      input={{
        value: store.get('value'),
        onChange: value => store.set({ value })
      }}
      textFieldProps={{
        formatValue: value => value.label
      }}
    />
  ));
