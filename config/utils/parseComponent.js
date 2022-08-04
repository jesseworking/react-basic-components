/*
 * Parses component name from lint-staged argument (e.g. /Users/user/code/rbui/src/components/MultiValueInput/index.tsx),
 * or returns component if not a lint-staged argument
 */
const parseComponent = component => {
  if (!component.includes('/')) return component;

  const fp = component.split('/');
  return fp[fp.length - 2];
};

module.exports = parseComponent;
