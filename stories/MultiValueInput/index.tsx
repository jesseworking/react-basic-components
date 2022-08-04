import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import MultiValueInput from '../../src/components/MultiValueInput';
import TextField from '../../src/components/TextField';
import AutocompleteTextField from '../../src/components/AutocompleteTextField';

import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';
import mockFetch from '../utils/mockFetch';

const store = new Store({
  textFieldStoryItems: [],
  autocompleteTextFieldStoryItems: []
});

storiesOf('MultiValueInput', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('with TextField', () => (
    <MultiValueInput
      input={{
        value: store.get('textFieldStoryItems'),
        onChange: items => store.set({ textFieldStoryItems: items })
      }}
      itemProps={{
        renderItem: item => item,
        formatKey: (item, i) => `${item}_${i}`
      }}
    >
      {({ innerInput, handleAddItem }) => (
        <TextField
          input={innerInput}
          onEnter={() => {
            handleAddItem(innerInput.value);
            innerInput.onChange('');
          }}
        />
      )}
    </MultiValueInput>
  ))
  .add('with AutocompleteTextField', () => (
    <MultiValueInput
      input={{
        value: store.get('autocompleteTextFieldStoryItems'),
        onChange: items => store.set({ autocompleteTextFieldStoryItems: items })
      }}
      itemProps={{
        renderItem: item => item.label,
        formatKey: item => item.label
      }}
    >
      {({ innerInput, handleAddItem }) => (
        <AutocompleteTextField
          input={{
            onChange: handleAddItem,
            value: innerInput.value,
            clearOnSelect: true
          }}
          dropdownItemProps={{
            formatKey: item => item.label,
            renderItem: (item, key) => <div key={key}>{item.label}</div>
          }}
          textFieldProps={{
            formatValue: value => value.label
          }}
          fetcher={mockFetch}
        />
      )}
    </MultiValueInput>
  ));
