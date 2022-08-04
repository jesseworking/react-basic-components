import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jsdom-global')();

/*
 * Initializing adapter for Enzyme that
 * provide compatibility with React 16.x
 */
Enzyme.configure({ adapter: new Adapter() });

// This ensures the hot module reloading code doesn't run for tests
process.env.NODE_ENV = 'production';

/*
 * Disable webpack-specific features for tests since
 * Mocha doesn't know what to do with them
 */

/* eslint-disable */
require.extensions['.css'] = function() {
  return null;
};
require.extensions['.svg'] = function() {
  return null;
};
require.extensions['.png'] = function() {
  return null;
};
require.extensions['.jpg'] = function() {
  return null;
};

/* eslint-enable */
chai.use(dirtyChai);
chai.use(sinonChai);
