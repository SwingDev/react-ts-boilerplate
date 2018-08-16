# React TypeScript Boilerplate

This boilerplate aims to provide quick bootstrap for new projects in React with TypeScript.

Features:
* [React][react] framework
* [TypeScript][typescript] support
* Linting with [TSLint][tslint] and [Stylelint][stylelint]
* Testing with [Jest][jest]
* Bundled with [Webpack][webpack]

---

## Quickstart

* clone this repository
* run `yarn setup`

You're ready to go!

## Development

* run `yarn start`
* go to [http://localhost:3000](http://localhost:3000)

**Tip:**
Wonder what's the size of your bundle? Run `yarn start:analyze` to use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) tool.

## Testing

Single run
* run `yarn test`

Watch mode (re-run tests on file change)
* run `yarn test:watch`

## Build

* run `yarn build`

Bundled files are in `./dist` directory

---

## Useful commands

* `yarn lint` - lint scripts and styles
* `yarn start:analyze` - starts the app with [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* `yarn generate <name>` - generates boilerplate code (available generators: **view**, **component**, **container**)
* `yarn clean` - cleans `./dist` directory

---

## Project structure

Base directory of source code is `./src` folder. Only this path is processed by Webpack.

```scss
├── containers // connected components
├── components // dumb components
├── fonts // local fonts
├── images // images processed by Webpack
├── public // files here are not processed
├── styles // base styles
├── utils // directory for helpers and utils
├── views // views in application
├── constants.ts // file for configuration constants
├── index.hbs // html template
├── index.tsx // root file
└── routes.ts // file with routes configuration
```

[react]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[tslint]: https://palantir.github.io/tslint/
[stylelint]: https://github.com/stylelint/stylelint
[jest]: https://facebook.github.io/jest/
[webpack]: https://webpack.js.org/
