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
    - `git clone git@github.com/colinmeinke/package.git __PROJECT_NAME__`
2. Change to your new project directory
    - `cd __PROJECT_NAME__`
3. Kill the existing `.git` directory and reinitialise with a new repository:
    - `rm -rf .git`
    - `git init`
    - `git remote add origin git@github.com:__USER_OR_ORGANISATION_NAME__/__PROJECT_NAME__.git`
4. Install dependencies:
    - `yarn install`
5. Replace all placeholders* in:
    - `package.json`
    - `rollup.config.js`
6. Setup Semantic Release using the CLI:
    - `yarn setup:semantic-release`
        - Use `https://registry.npmjs.org/` as your npm registry
        - You will need [npm login credentials](https://www.npmjs.com/signup)
        - Select **Travis CI** when asked which CI you wish to use
        - Select **no** when asked about adding a `.travis.yml` file

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
