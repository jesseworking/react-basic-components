# React Basic UI Components

- AutocompleteTextField
- Button
- Chip
- ClosableWrapper
- DropwdownWrapper
- FileDropzone
- FilePreviewer
- FileUploader
- Image
- Link
- MultiValueInput
- Select
- Stepper
- TextArea
- TextField

## Tech Stack

- Modern JavaScript syntax ([ES2015](http://babeljs.io/docs/learn-es2015/)+) via [Babel](http://babeljs.io/)
- Modular UI components via [React](http://facebook.github.io/react/) and [Webpack](https://webpack.github.io/)
- Extendable component styling via [styled-components](https://www.styled-components.com/).

### Extending component styles

Component styles can be extended through the `className` prop.

With plain CSS classes:

```jsx
<Link className="link" to="http://example.com">{`I'm a Link!!!`}</Link>
```

With CSS Modules:

```jsx
import s from "./styles.css";

// ...

<Link className={s.link} to="http://example.com">{`I'm a Link!!!`}</Link>;
```

### Building

The library can be built using Webpack with:

```shell
$ npm run build
```

The build script can be found at [./src/config/builder.js](./src/config/builder.js). It uses the Webpack Node API and [multicompiler](https://webpack.js.org/api/node/#multicompiler) to generate bundled and transpiled `.js` files for each component, as well as an `index.js` file contaning all of the components.

### Testing

The unit tests are powered by [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/), with [Enzyme](https://github.com/airbnb/enzyme).

```shell
$ npm test # Run unit tests
$ npm run test:watch # Run unit tests with a watcher
```

To manually test the app against development and production environments builds.

```shell
$ npm run build # Run development/debug build
$ npm run build:prod # Run production build
```

Note: [`.env`](.env) contains our default environment variables.

### Code style

We use [ESLint](https://eslint.org/) for JavaScript, [stylelint](http://stylelint.io/) for CSS, and [Prettier](https://github.com/prettier/prettier) to automatically format both.

```shell
$ npm run lint # Check JavaScript and CSS code, and fix any issues that can be corrected automatically
$ npm run prettier # Format all CSS and JS files
```

These commands are automatically run by a pre-commit hook via [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged), so there is usually no need to run them manually.
