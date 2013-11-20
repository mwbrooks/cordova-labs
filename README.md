# nodoc [![Build Status][travis-ci-img]][travis-ci-url]

> Node documentation engine.

## Overview

nodoc is a modular documentation system. It can parse any type of documentation
and render to any format.

## Goal

`npm doc` on steroids.

## Requirement

- Magic on `doc/`
- Magic fallback on `README.md`
- Node and CommonJS conventions
  - `directories.doc`
  - `directories.lib`
  - `directories.src`

## Additions

- Support other languages
- Support multiple languages at once

## Approach

1. Render markdown to themed HTML
  - compatible with `npm run doc`
2. Render multiple repositories to themed HTML
3. Render multiple languages

[travis-ci-img]: https://travis-ci.org/mwbrooks/cordova-labs.png?branch=nodoc
[travis-ci-url]: https://travis-ci.org/mwbrooks/cordova-labs

