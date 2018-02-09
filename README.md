# Package

A quick start JS package template.

**Currently a work in progress, do not use yet.**

## Features

- Automated releases with
  [Semantic Release](https://github.com/semantic-release/semantic-release).
- CommonJS, ES2015 modules and UMD builds.
- Testing with [Jest](https://github.com/facebook/jest).

## Setup

1. Clone this repository
2. Update the git remote:
  - `git remote set-url origin git@github.com:<user_or_organisation_name>/<project_name>.git`
3. Install dependencies:
  - `yarn install`
4. Replace all placeholders* in:
  - `package.json`
  - `rollup.config.js`

**placeholders have a prefix and suffix of `__`*

## Usage

1. Write some code
2. Commit:
  - `yarn commit`
3. Push:
  - `git push`
4. Sit back and relax! If your build passes and you have committed fixes, features or breaking changes a new release will be rolled.

## Commands

### Commit

To initialise a command line helper to walk you through the process of writing
[conventional commits](https://conventionalcommits.org). This convention allows
us to automate our release process.

```
yarn commit
```

### Build

To output:

- CommonJS to `/cjs`
- ES2015 modules to `/modules`
- UMD to `/dist`

```
yarn build
```

### Test

To manually run your tests.
```
yarn test
```
