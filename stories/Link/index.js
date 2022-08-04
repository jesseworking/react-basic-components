import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Link from '../../src/components/Link';
import { StyleWrapper } from '../utils/StyleWrapper';

storiesOf('Link', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .add('default', () => (
    <Link to="http://example.com" target="_blank">
      This is a Link
    </Link>
  ));
