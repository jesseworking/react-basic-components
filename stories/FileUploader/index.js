import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import FileUploader from '../../src/components/FileUploader';
import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';

const store = new Store({
  value: []
});

storiesOf('FileUploader', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('default', () => (
    <FileUploader
      input={{
        value: store.get('value'),
        onChange: value => store.set({ value })
      }}
    />
  ));
