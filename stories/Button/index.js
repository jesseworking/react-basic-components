import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StyleWrapper } from '../utils/StyleWrapper';
import Button from '../../src/components/Button';

storiesOf('Button', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .add('default', () => (
    <Button onClick={() => alert('Clicked button!')}>This is a Button</Button>
  ))
  .add('native', () => (
    <Button onClick={() => alert('Clicked button!')} native>
      This is a native Button
    </Button>
  ));
