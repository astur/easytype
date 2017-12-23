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

// Shortcuts: //

// returns true:
type.isUndefined()
type.isDefined('test')
type.isNull(null)
type.isString('')
type.isBoolean(true)
type.isNumber(1)
type.isArray([])
type.isObject({})
type.isFunction(() => {})
type.isRegExp(/^.*$/)
type.isDate(new Date())
type.isSet(new Set())
type.isMap(new Map())
type.isWeakSet(new WeakSet())
type.isWeakMap(new WeakMap())
type.isSymbol(Symbol('test'))
type.isError(new Error())
type.isPromise(new Promise(() => {}))

// returns false:
type.isUndefined('test')
type.isDefined()
type.isNull('null')
type.isString(true)
type.isBoolean('true')
type.isNumber('1')
type.isArray({length: 1})
type.isObject(null)
type.isFunction(global)
type.isRegExp('/^.*$/')
type.isDate('Sat Dec 23 2017 18:44:45 GMT+0300 (MSK)')
type.isSet(new WeakSet())
type.isMap(new WeakMap())
type.isWeakSet(new Set())
type.isWeakMap(new Map())
type.isSymbol([Symbol('test')])
type.isError(Error)
type.isPromise(Promise.all)

```

## License

MIT

[npm-url]: https://npmjs.org/package/easytype
[npm-image]: https://badge.fury.io/js/easytype.svg
[travis-url]: https://travis-ci.org/astur/easytype
[travis-image]: https://travis-ci.org/astur/easytype.svg?branch=master