import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import Select from '../../src/components/Select';
import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';

const store = new Store({
  value: 'foo'
});

storiesOf('Select', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('default', () => (
    <Select
      input={{
        value: store.get('value'),
        onChange: value => store.set({ value })
      }}
    >
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </Select>
  ));
