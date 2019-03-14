# Commands

This documents includes several useful commands, that you might want to use during development.

> We prefer to use [yarn](https://yarnpkg.com/en/) and you should also. If you don't like it, just replace every `yarn` with `npm` to run the specific command.

## Quickstart

```
yarn setup
```

Runs setup process for new project. As a result it removes `react-ts-boilerplate` git history, install dependecies and initialize new repository.

## Generators

```
yarn generate [name]
```

Runs one of specified generators:
- `view`
- `component`
- `container`

## Development

```
yarn start
```

Starts development server, that runs on [http://localhost:3000](http://localhost:3000)

**Tip:**
Wonder what's the size of your bundle? Run `yarn start:analyze` to use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) tool.

## Testing

```
yarn test
```

Initializes single test run

```
yarn test:watch
```

Runs tests in watch mode using Jest's [watch option](https://jestjs.io/docs/en/cli#watchall).

## Building

```
yarn build
```

Creates production bundle, which is stored in `./dist` directory.

## Cleaning

```
yarn clean
```

Cleans `./dist` directory.

## Linting

```
yarn lint
```

Lints your code using [TSLint][tslint] and [Stylelint][stylelint].


**Tip:**
To run one linter at the time, use following commands: `yarn tslint` or `yarn:stylelint`

[tslint]: https://palantir.github.io/tslint/
[stylelint]: https://github.com/stylelint/stylelint
