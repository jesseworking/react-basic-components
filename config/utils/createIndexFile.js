const fs = require('fs');

const createIndexFile = (components, path) => {
  const importComponent = component =>
    `export { default as ${component} } from './${component}';\n`;

  const index = components
    .map(component => importComponent(component))
    .join('');

  fs.writeFileSync(`${path}/index.js`, index);
};

module.exports = createIndexFile;
