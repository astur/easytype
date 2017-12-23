# easytype

Just something better then `typeof`

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i easytype
```

## Usage

```js
const type = require('easytype');

type()                           //'Undefined'
type(undefined)                  //'Undefined'
type(null)                       //'Null'
type('')                         //'String'
type(true)                       //'Boolean'
type(false)                      //'Boolean'
type(0)                          //'Number'
type(-1.5)                       //'Number'
type(NaN)                        //'Number'
type(Infinity)                   //'Number'
type([])                         //'Array'
type({})                         //'Object'
type(Object.create(null))        //'Object'
type(() => {})                   //'Function'
type(/^.*$/)                     //'RegExp'
type(new Date())                 //'Date'
type(new Set())                  //'Set'
type(new Map())                  //'Map'
type(new WeakSet())              //'WeakSet'
type(new WeakMap())              //'WeakMap'
type(Symbol('test'))             //'Symbol'
type(new Error())                //'Error'
type(Math)                       //'Math'
type(JSON)                       //'JSON'
type(new Int8Array())            //'Int8Array'
type(new Uint8Array())           //'Uint8Array'
type(new Uint8ClampedArray())    //'Uint8ClampedArray'
type(new Int16Array())           //'Int16Array'
type(new Uint16Array())          //'Uint16Array'
type(new Int32Array())           //'Int32Array'
type(new Uint32Array())          //'Uint32Array'
type(new Float32Array())         //'Float32Array'
type(new Float64Array())         //'Float64Array'
type(new Promise(() => {}))      //'Promise'
```

## License

MIT

[npm-url]: https://npmjs.org/package/easytype
[npm-image]: https://badge.fury.io/js/easytype.svg
[travis-url]: https://travis-ci.org/astur/easytype
[travis-image]: https://travis-ci.org/astur/easytype.svg?branch=master