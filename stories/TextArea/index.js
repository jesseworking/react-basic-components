import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import TextArea from '../../src/components/TextArea';
import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';

const store = new Store({
  defaultStoryValue: 'foo',
  passwordStoryValue: '',
  textAreaStoryValue: ''
});

storiesOf('TextArea', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('default', () => (
    <TextArea
      input={{
        value: store.get('defaultStoryValue'),
        onChange: value => store.set({ defaultStoryValue: value })
      }}
    />
  ));
