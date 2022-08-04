import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Chip from '../../src/components/Chip';
import { StyleWrapper } from '../utils/StyleWrapper';

storiesOf('Chip', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .add('default', () => (
    <Chip onDelete={() => alert('Closing chip!')}>This is a Chip</Chip>
  ));
