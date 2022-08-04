/* eslint-disable react/display-name */

import React from 'react';

import s from './StyleWrapper.css';

export const StyleWrapper = storyFn => (
  <div className={s.styleWrapper}>{storyFn()}</div>
);

export default StyleWrapper;
