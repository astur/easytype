const type = v => ({}).toString.call(v).slice(8, -1);

type.isUndefined = v => type(v) === 'Undefined';
type.isDefined = v => type(v) !== 'Undefined';
type.isNull = v => type(v) === 'Null';
type.isString = v => type(v) === 'String';
type.isBoolean = v => type(v) === 'Boolean';
type.isNumber = v => type(v) === 'Number';
type.isArray = v => type(v) === 'Array';
type.isObject = v => type(v) === 'Object';
type.isFunction = v => type(v) === 'Function';
type.isRegExp = v => type(v) === 'RegExp';
type.isDate = v => type(v) === 'Date';
type.isSet = v => type(v) === 'Set';
type.isMap = v => type(v) === 'Map';
type.isWeakSet = v => type(v) === 'WeakSet';
type.isWeakMap = v => type(v) === 'WeakMap';
type.isSymbol = v => type(v) === 'Symbol';
type.isError = v => type(v) === 'Error';
type.isPromise = v => type(v) === 'Promise';

module.exports = type;
