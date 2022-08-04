import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StyleWrapper } from '../utils/StyleWrapper';
import Image from '../../src/components/Image';
import cog from './cog.svg';

storiesOf('Image', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .add('default', () => (
    <Image src={cog} size={{ height: '200px', width: '200px' }} />
  ));
