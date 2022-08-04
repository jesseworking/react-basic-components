import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import TextField from '../../src/components/TextField';
import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';

const store = new Store({
  defaultStoryValue: 'foo',
  passwordStoryValue: '',
  textAreaStoryValue: ''
});

storiesOf('TextField', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('default', () => (
    <TextField
      input={{
        value: store.get('defaultStoryValue'),
        onChange: value => store.set({ defaultStoryValue: value })
      }}
    />
  ))
  .add('with placeholder', () => (
    <TextField
      input={{
        value: store.get('defaultStoryValue'),
        onChange: value => store.set({ defaultStoryValue: value })
      }}
      placeholder="Enter a value"
    />
  ))
  .add('password input', () => (
    <TextField
      input={{
        value: store.get('passwordStoryValue'),
        onChange: value => store.set({ passwordStoryValue: value })
      }}
      type="password"
    />
  ))
  .add('text area', () => (
    <TextField
      input={{
        value: store.get('textAreaStoryValue'),
        onChange: value => store.set({ textAreaStoryValue: value })
      }}
      type="textarea"
    />
  ))
  .add('required', () => (
    <TextField
      input={{
        value: store.get('defaultStoryValue'),
        onChange: value => store.set({ defaultStoryValue: value })
      }}
      required
    />
  ));
