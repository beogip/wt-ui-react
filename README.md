# WINDING TREE REACT UI
[![Build Status](https://travis-ci.org/windingtree/wt-ui.svg?branch=v1.0.0)](https://travis-ci.org/windingtree/wt-ui)

## What is it?
WT-REACT-UI is a front-end framework used to speed up the UI building and keep the design consistent across different projects.

## Quick start
### Installation
Add this npm package to dependencies.

```bash
$ npm i @windingtree/wt-react-ui
```

### Usage
[WIP]

### Documentation
Documentation is built with [Storybook](https://storybook.js.org/) , and hosted by [Github pages](https://ui.windingtree.com/).
You can run docs locally following steps detailed in Build storybook.

## Development
### Set-up
* Clone the repo.
* Use `npm i` to get the required dependencies.

### Develop
Before push, verify
* Use `npm run flow` to run static type check.
* Use `npm run lint` to ensure code style.
* Use `npm test` to run ful test suite

### Build Storybook
* Use `npm run build-storybook` to build the static version of Storybook.
* Use `npm run storybook` to run the static version of Storybook.

### Build npm
* Use `npm run build` to compile `scss` files.

### CI
CI will automatically run all test and builds.
