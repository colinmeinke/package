# Package

A quick start JS package template.

## Features

* Automated releases with
  [Travis CI](https://travis-ci.org) and
  [Semantic Release](https://github.com/semantic-release/semantic-release)
* CommonJS, ES2015 modules and UMD builds
* Testing with [Jest](https://github.com/facebook/jest)
* Automatic code formatting with [Prettier](https://prettier.io)

## Setup

1. Clone this repository
   * `git clone git@github.com:colinmeinke/package.git __PROJECT_NAME__`
2. Change to your new project directory
   * `cd __PROJECT_NAME__`
3. Kill the existing `.git` directory and reinitialise with a new repository:
   * `rm -rf .git`
   * `git init`
   * `git remote add origin git@github.com:__USER_OR_ORGANISATION_NAME__/__PROJECT_NAME__.git`
4. Install dependencies:
   * `yarn install`
5. Replace all placeholders\* in:
   * `package.json`
   * `rollup.config.js`
6. Setup Semantic Release using the CLI:
   * `yarn setup:semantic-release`
     * Use `https://registry.npmjs.org/` as your npm registry
     * You will need [npm login credentials](https://www.npmjs.com/signup)
       and to have verified your email with npm
     * You will need to [sign in to Travis CI](https://travis-ci.org/signin)
     * Select **Travis CI** when asked which CI you wish to use
     * Type **n** when asked about adding a `.travis.yml` file

\*_placeholders have a prefix and suffix of `__`_

## Usage

1. Write some code
2. Commit:
   * `yarn commit`
3. Push:
   * `git push`
4. Sit back and relax! If your build passes and you have committed fixes, features or breaking changes a new release will be rolled.

## Commands

### Commit

To initialise a command line helper to walk you through the process of writing
[conventional commits](https://conventionalcommits.org). This convention allows
us to automate our release process.

This command will also automatically format staged files using Prettier.

```
yarn commit
```

### Build

To manually run the build process and output:

* CommonJS to `/cjs`
* ES2015 modules to `/modules`
* UMD to `/dist`

```
yarn build
```

### Test

To manually run your tests.

```
yarn test
```

## Notes

* **Disable tests**: If you don't have any tests you can remove `- npm test`
  from the `script` section of `.travis.yml`
* **Disable code formatting**: To stop Prettier formatting files when you commit
  you can remove `"precommit": "pretty-quick --staged"` from the `scripts`
  section of `package.json`
