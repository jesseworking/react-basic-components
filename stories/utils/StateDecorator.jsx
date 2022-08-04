/* eslint-disable react/display-name */

import React from 'react';
import { State } from '@sambego/storybook-state';

export const StateDecorator = store => storyFn => (
  <div>
    <State store={store}>{state => storyFn(state)}</State>
  </div>
);
