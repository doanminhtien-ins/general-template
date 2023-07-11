function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('bootstrap/dist/css/bootstrap.min.css');
require('semantic-ui-css/semantic.min.css');
require('react-datepicker/dist/react-datepicker.css');
var PizZip = _interopDefault(require('pizzip'));
var JSZipUtils = _interopDefault(require('jszip-utils'));
var Docxtemplater = _interopDefault(require('docxtemplater'));
var expressions = _interopDefault(require('angular-expressions'));
var reactBootstrap = require('react-bootstrap');
var semanticUiReact = require('semantic-ui-react');
var DatePicker = _interopDefault(require('react-datepicker'));
var moment$1 = _interopDefault(require('moment'));
require('moment/locale/en-sg');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$3.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = _createAssigner(function(object, source) {
  if (_isPrototype(source) || isArrayLike_1(source)) {
    _copyObject(source, keys_1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$6.call(source, key)) {
      _assignValue(object, key, source[key]);
    }
  }
});

var assign_1 = assign;

var FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS = [{
  key: 'expired_date',
  value: 'expired_date',
  text: 'Expired Date',
  holderType: null,
  getter: function getter() {
    return moment().add(7, 'days)').format(stringDateFormat());
  }
}, {
  key: 'date',
  value: 'date',
  text: 'Date',
  holderType: null,
  getter: function getter() {
    return moment().add(7, 'days)').format(stringDateFormat());
  }
}, {
  key: 'startup_name',
  value: 'startup_name',
  text: 'Startup Name',
  holderType: 'startup',
  holderProperty: 'name',
  getter: function getter(valueHolder) {
    return valueHolder.name;
  }
}, {
  key: 'insignia_signer_title',
  value: 'insignia_signer_title',
  isDynamic: true,
  text: 'Insignia Signer Title',
  holderType: 'insigniaSigner',
  getter: function getter(valueHolder) {
    return valueHolder === null || valueHolder === void 0 ? void 0 : valueHolder.position_level;
  }
}, {
  key: 'startup_signer_title',
  value: 'startup_signer_title',
  isDynamic: true,
  text: 'Startup Signer Title',
  holderType: 'startupSigner',
  getter: function getter(valueHolder) {
    return valueHolder === null || valueHolder === void 0 ? void 0 : valueHolder.position;
  }
}, {
  key: 'startup_country',
  value: 'startup_country',
  text: 'Startup Country',
  holderType: 'startup',
  getter: function getter(valueHolder) {
    var country = COUNTRY_OPTIONS.find(function (c) {
      return c.value === valueHolder.country;
    });
    return country ? country.text : '';
  }
}, {
  key: 'startup_address',
  value: 'startup_address',
  text: 'Startup Address',
  holderType: 'startup',
  getter: function getter(valueHolder) {
    return valueHolder.address;
  }
}, {
  key: 'series',
  value: 'series',
  text: 'Series',
  holderType: 'deal',
  getter: function getter(valueHolder) {
    return valueHolder.round.toUpperCase();
  }
}, {
  key: 'fund_name',
  value: 'fund_name',
  text: 'Fund Name',
  holderType: 'deal',
  getter: function getter(valueHolder) {
    var _valueHolder$fund;

    return (_valueHolder$fund = valueHolder.fund) === null || _valueHolder$fund === void 0 ? void 0 : _valueHolder$fund.name;
  }
}, {
  key: 'pre_money_valuation',
  value: 'pre_money_valuation',
  text: 'Pre-Money Valuation',
  holderType: 'deal',
  getter: function getter(valueHolder) {
    return Formatter.fullCurrency(valueHolder.pre_valuation, '');
  }
}, {
  key: 'investment_amount',
  value: 'investment_amount',
  text: 'Investment Amount',
  holderType: 'deal',
  getter: function getter(valueHolder) {
    return Formatter.fullCurrency(valueHolder.total_raise, '');
  }
}, {
  key: 'ceo_name',
  value: 'ceo_name',
  text: 'CEO Name',
  holderType: 'startup',
  getter: function getter(valueHolder) {
    var _valueHolder$people;

    var CEO = (_valueHolder$people = valueHolder.people) === null || _valueHolder$people === void 0 ? void 0 : _valueHolder$people.filter(function (person) {
      return person.position === COMPANY_POSITION.CEO.value;
    })[0];

    if (CEO) {
      return CEO.name;
    }

    return '';
  }
}, {
  key: 'founders',
  value: 'founders',
  text: 'Founders',
  holderType: 'startup',
  getter: function getter(valueHolder) {
    var _valueHolder$people2;

    var FOUNDER_POSITIONS = ['ceo', 'founder'];
    var founders = (_valueHolder$people2 = valueHolder.people) === null || _valueHolder$people2 === void 0 ? void 0 : _valueHolder$people2.filter(function (person) {
      var byRoles = person.roles && Array.isArray(person.roles) && person.roles.includes(PEOPLE_STARTUP_ROLES.admin.value);
      var byPosition = person.position && FOUNDER_POSITIONS.filter(function (p) {
        var re = new RegExp(p, 'i');
        return person.position.match(re);
      }).length > 0;
      return byRoles || byPosition;
    });

    if ((founders === null || founders === void 0 ? void 0 : founders.length) > 0) {
      return founders.map(function (founder) {
        return founder.name;
      }).join(', ');
    }

    return '';
  }
}];
var FILE_TEMPLATE_FIELD_TYPES = {
  MATCH: {
    key: 'match',
    value: 'match',
    text: 'Match'
  },
  FIXED_TEXT: {
    key: 'fixed_text',
    value: 'fixed_text',
    text: 'Fixed Text'
  },
  FIXED_DATE: {
    key: 'fixed_date',
    value: 'fixed_date',
    text: 'Fixed Date'
  },
  COUNTRY_SELECT: {
    key: 'country_select',
    value: 'country_select',
    text: 'Country Select'
  },
  COUNTRY_SELECT_SINGLE: {
    key: 'country_select_single',
    value: 'country_select_single',
    text: 'Single Country Select'
  },
  SINGLE_CHOICE_OPTION: {
    key: 'single_choice_option',
    value: 'single_choice_option',
    text: 'Single Choice Option'
  }
};
var FIELD_IMPORTANCE = {
  VERY_HIGH: {
    key: 'very_high',
    value: 1,
    text: 'Very High'
  },
  HIGH: {
    key: 'high',
    value: 2,
    text: 'High'
  },
  MEDIUM: {
    key: 'medium',
    value: 3,
    text: 'Medium'
  },
  LOW: {
    key: 'low',
    value: 4,
    text: 'Low'
  }
};

var DocxTemplateHelper = /*#__PURE__*/function () {
  function DocxTemplateHelper() {
    var _this = this;

    this.loadedDoc = void 0;
    this.defaultFieldValueBuilders = [];

    this.setDefaultFieldValueBuilders = function (builders) {
      _this.defaultFieldValueBuilders = builders;
    };

    this.setDoc = function (doc) {
      _this.loadedDoc = doc;
    };

    this.getTranslatedValueFromKey = function (key, valueHolders) {
      var field = _this.defaultFieldValueBuilders.filter(function (field) {
        return field.key === key;
      })[0];

      if (!field) {
        return null;
      }

      return field.getter(valueHolders[field.holderType]);
    };

    this.fillPlaceHolders = function (templateValues, savedValues, valueHolders, onlyValueHolderName) {
      var _templateValues$field, _templateValues$hidea, _templateValues$condi;

      if (savedValues === void 0) {
        savedValues = null;
      }

      if (valueHolders === void 0) {
        valueHolders = null;
      }

      if (onlyValueHolderName === void 0) {
        onlyValueHolderName = null;
      }

      if (!_this.loadedDoc) {
        throw new Error('Loaded Doc has not been loaded, use loadDoc to load a Doc');
      }

      var docTextOnly = _this.loadedDoc.getFullText();

      templateValues = {
        fields: (_templateValues$field = templateValues.fields) != null ? _templateValues$field : {},
        hideableFields: (_templateValues$hidea = templateValues.hideable_fields) != null ? _templateValues$hidea : {},
        conditionFields: (_templateValues$condi = templateValues.condition_fields) != null ? _templateValues$condi : {}
      };
      var fields = {
        fields: _this.extractNormalFields(docTextOnly) || [],
        hideableFields: _this.extractHideableFields(docTextOnly) || [],
        conditionFields: _this.extractConditionalOptionFields(docTextOnly) || []
      };
      var fieldValues = {
        fields: {},
        hideableFields: {},
        conditionFields: {}
      };
      var fieldCategories = ['fields', 'hideableFields', 'conditionFields'];
      fieldCategories.forEach(function (c) {
        var cTemplateValues = templateValues ? templateValues[c] : {};
        var cSavedValues = savedValues ? savedValues[c] ? savedValues[c] : {} : {};
        fields[c].map(function (fieldName) {
          var templateField = cTemplateValues[fieldName] || {};

          if (onlyValueHolderName && !_this.valueHolderHasFieldName(onlyValueHolderName, fieldName)) {
            return fieldName;
          }

          var savedField = cSavedValues[fieldName];
          var realField = savedField || templateField;
          var realValue = '';
          var type = templateField ? templateField.type : FILE_TEMPLATE_FIELD_TYPES.FIXED_TEXT.value;
          var importance = templateField ? templateField.importance : realField ? realField.importance : FIELD_IMPORTANCE.LOW.value;
          var explanation = templateField ? templateField.explanation : realField ? realField.explanation : '';
          var required = templateField ? templateField.required : 0;

          if (!realField) {
            realValue = '';
          } else if (realField.type === FILE_TEMPLATE_FIELD_TYPES.MATCH.value) {
            realValue = _this.getTranslatedValueFromKey(realField.value, valueHolders);
          } else if (realField.type === FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT.value || realField.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_TEXT.value || realField.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value || realField.type === FILE_TEMPLATE_FIELD_TYPES.SINGLE_CHOICE_OPTION.value) {
            realValue = realField.value;
          }

          fieldValues[c][fieldName] = {
            key: fieldName,
            type: type,
            importance: importance,
            label: templateField.label,
            explanation: explanation,
            group_name: templateField.group_name,
            required: required,
            name: fieldName,
            options: templateField.options || [],
            value: templateField ? templateField.value : null,
            translated_value: realValue,
            modified_value: onlyValueHolderName ? realValue : realField ? realField ? realField.modified_value : null : null
          };
        });
      });
      return fieldValues;
    };

    this.loadDoc = function (url, callbackSuccess, callbackFailed) {
      if (callbackSuccess === void 0) {
        callbackSuccess = function callbackSuccess() {};
      }

      if (callbackFailed === void 0) {
        callbackFailed = function callbackFailed() {};
      }

      JSZipUtils.getBinaryContent("" + url, function (err, data) {
        if (err) {
          return callbackFailed(err);
        }

        var zip = new PizZip(data);
        var doc;

        try {
          doc = new Docxtemplater(zip, {
            parser: angularParser
          });

          _this.setDoc(doc);
        } catch (error) {
          callbackFailed(err);
          return;
        }

        callbackSuccess(doc);
      });
    };

    this.setData = function (data) {
      _this.loadedDoc.setData(data);

      _this.loadedDoc.render();
    };

    this.createAndDownloadBlobFile = function (filename, extension) {
      if (extension === void 0) {
        extension = 'docx';
      }

      var body = _this.loadedDoc.getZip().generate({
        type: 'blob'
      });

      var blob = new Blob([body]);
      var fileName = filename + "." + extension;

      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, fileName);
      } else {
        var link = document.createElement('a');

        if (link.download !== undefined) {
          var url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', fileName);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    };

    this.extractNormalFields = function () {
      var text = _this.loadedDoc.getFullText();

      var fields = text.match(/{[^#^/][^{^}]+}/g);
      console.log('field: ', fields);
      var conditionalFields = text.match(/{#((?!hide\.|option\.).)[^{^}]+}/g);
      console.log('conditionalFields: ', conditionalFields);

      if (!fields) {
        fields = [];
      } else {
        fields = fields.map(function (field) {
          return field.replace('{', '').replace('}', '');
        });
      }

      if (!conditionalFields) {
        conditionalFields = [];
      } else {
        conditionalFields = conditionalFields.map(function (field) {
          return field.replace('{', '').replace('}', '').replace('#', '').split('!=')[0].split('==')[0].trim();
        });
      }

      fields = fields.concat(conditionalFields);
      fields = fields.filter(function (v, i, a) {
        return a.indexOf(v) === i;
      });
      return fields;
    };

    this.extractConditionalOptionFields = function () {
      var text = _this.loadedDoc.getFullText();

      var fields = text.match(/{#option.[^{^}]+}/g);

      if (!fields) {
        fields = [];
      } else {
        fields = fields.map(function (field) {
          return field.replace('{', '').replace('}', '');
        });
      }

      fields = fields.map(function (field) {
        return field.replace('#option.', '').split('!=')[0].split('==')[0].trim();
      });
      fields = fields.filter(function (v, i, a) {
        return a.indexOf(v) === i;
      });
      return fields;
    };

    this.extractHideableFields = function () {
      var text = _this.loadedDoc.getFullText();

      var fields = text.match(/{#hide.[^{^}]+}/g);

      if (!fields) {
        fields = [];
      } else {
        fields = fields.map(function (field) {
          return field.replace('{', '').replace('}', '');
        });
      }

      fields = fields.map(function (field) {
        return field.replace('#hide.', '').split('!=')[0].split('==')[0].trim();
      });
      fields = fields.filter(function (v, i, a) {
        return a.indexOf(v) === i;
      });
      return fields;
    };
  }

  var _proto = DocxTemplateHelper.prototype;

  _proto.valueHolderHasFieldName = function valueHolderHasFieldName(valueHolderName, fieldName) {
    var field = this.defaultFieldValueBuilders.filter(function (field) {
      return field.key === fieldName;
    })[0];

    if (!field) {
      return false;
    }

    return field.holderType === valueHolderName;
  };

  return DocxTemplateHelper;
}();

expressions.filters.lower = function (input) {
  if (!input) return input;
  return input.toLowerCase();
};

function angularParser(tag) {
  if (tag === '.') {
    return {
      get: function get(s) {
        return s;
      }
    };
  }

  var expr = expressions.compile(tag.replace(/(’|‘)/g, "'").replace(/(“|”)/g, '"'));
  return {
    get: function get(scope, context) {
      var obj = {};
      var scopeList = context.scopeList;
      var num = context.num;

      for (var i = 0, len = num + 1; i < len; i++) {
        obj = assign_1(obj, scopeList[i]);
      }

      return expr(scope, obj);
    }
  };
}

var COUNTRY_OPTIONS$1 = [{
  key: 'af',
  value: 'af',
  flag: 'af',
  text: 'Afghanistan'
}, {
  key: 'ax',
  value: 'ax',
  flag: 'ax',
  text: 'Aland Islands'
}, {
  key: 'al',
  value: 'al',
  flag: 'al',
  text: 'Albania'
}, {
  key: 'dz',
  value: 'dz',
  flag: 'dz',
  text: 'Algeria'
}, {
  key: 'as',
  value: 'as',
  flag: 'as',
  text: 'American Samoa'
}, {
  key: 'ad',
  value: 'ad',
  flag: 'ad',
  text: 'Andorra'
}, {
  key: 'ao',
  value: 'ao',
  flag: 'ao',
  text: 'Angola'
}, {
  key: 'ai',
  value: 'ai',
  flag: 'ai',
  text: 'Anguilla'
}, {
  key: 'ag',
  value: 'ag',
  flag: 'ag',
  text: 'Antigua'
}, {
  key: 'ar',
  value: 'ar',
  flag: 'ar',
  text: 'Argentina'
}, {
  key: 'am',
  value: 'am',
  flag: 'am',
  text: 'Armenia'
}, {
  key: 'aw',
  value: 'aw',
  flag: 'aw',
  text: 'Aruba'
}, {
  key: 'au',
  value: 'au',
  flag: 'au',
  text: 'Australia'
}, {
  key: 'at',
  value: 'at',
  flag: 'at',
  text: 'Austria'
}, {
  key: 'az',
  value: 'az',
  flag: 'az',
  text: 'Azerbaijan'
}, {
  key: 'bs',
  value: 'bs',
  flag: 'bs',
  text: 'Bahamas'
}, {
  key: 'bh',
  value: 'bh',
  flag: 'bh',
  text: 'Bahrain'
}, {
  key: 'bd',
  value: 'bd',
  flag: 'bd',
  text: 'Bangladesh'
}, {
  key: 'bb',
  value: 'bb',
  flag: 'bb',
  text: 'Barbados'
}, {
  key: 'by',
  value: 'by',
  flag: 'by',
  text: 'Belarus'
}, {
  key: 'be',
  value: 'be',
  flag: 'be',
  text: 'Belgium'
}, {
  key: 'bz',
  value: 'bz',
  flag: 'bz',
  text: 'Belize'
}, {
  key: 'bj',
  value: 'bj',
  flag: 'bj',
  text: 'Benin'
}, {
  key: 'bm',
  value: 'bm',
  flag: 'bm',
  text: 'Bermuda'
}, {
  key: 'bt',
  value: 'bt',
  flag: 'bt',
  text: 'Bhutan'
}, {
  key: 'bo',
  value: 'bo',
  flag: 'bo',
  text: 'Bolivia'
}, {
  key: 'ba',
  value: 'ba',
  flag: 'ba',
  text: 'Bosnia'
}, {
  key: 'bw',
  value: 'bw',
  flag: 'bw',
  text: 'Botswana'
}, {
  key: 'bv',
  value: 'bv',
  flag: 'bv',
  text: 'Bouvet Island'
}, {
  key: 'br',
  value: 'br',
  flag: 'br',
  text: 'Brazil'
}, {
  key: 'vg',
  value: 'vg',
  flag: 'vg',
  text: 'British Virgin Islands'
}, {
  key: 'bn',
  value: 'bn',
  flag: 'bn',
  text: 'Brunei'
}, {
  key: 'bg',
  value: 'bg',
  flag: 'bg',
  text: 'Bulgaria'
}, {
  key: 'bf',
  value: 'bf',
  flag: 'bf',
  text: 'Burkina Faso'
}, {
  key: 'bi',
  value: 'bi',
  flag: 'bi',
  text: 'Burundi'
}, {
  key: 'tc',
  value: 'tc',
  flag: 'tc',
  text: 'Caicos Islands'
}, {
  key: 'kh',
  value: 'kh',
  flag: 'kh',
  text: 'Cambodia'
}, {
  key: 'cm',
  value: 'cm',
  flag: 'cm',
  text: 'Cameroon'
}, {
  key: 'ca',
  value: 'ca',
  flag: 'ca',
  text: 'Canada'
}, {
  key: 'cv',
  value: 'cv',
  flag: 'cv',
  text: 'Cape Verde'
}, {
  key: 'ky',
  value: 'ky',
  flag: 'ky',
  text: 'Cayman Islands'
}, {
  key: 'cf',
  value: 'cf',
  flag: 'cf',
  text: 'Central African Republic'
}, {
  key: 'td',
  value: 'td',
  flag: 'td',
  text: 'Chad'
}, {
  key: 'cl',
  value: 'cl',
  flag: 'cl',
  text: 'Chile'
}, {
  key: 'cn',
  value: 'cn',
  flag: 'cn',
  text: 'China'
}, {
  key: 'cx',
  value: 'cx',
  flag: 'cx',
  text: 'Christmas Island'
}, {
  key: 'cc',
  value: 'cc',
  flag: 'cc',
  text: 'Cocos Islands'
}, {
  key: 'co',
  value: 'co',
  flag: 'co',
  text: 'Colombia'
}, {
  key: 'km',
  value: 'km',
  flag: 'km',
  text: 'Comoros'
}, {
  key: 'cg',
  value: 'cg',
  flag: 'cg',
  text: 'Congo Brazzaville'
}, {
  key: 'cd',
  value: 'cd',
  flag: 'cd',
  text: 'Congo'
}, {
  key: 'ck',
  value: 'ck',
  flag: 'ck',
  text: 'Cook Islands'
}, {
  key: 'cr',
  value: 'cr',
  flag: 'cr',
  text: 'Costa Rica'
}, {
  key: 'ci',
  value: 'ci',
  flag: 'ci',
  text: 'Cote Divoire'
}, {
  key: 'hr',
  value: 'hr',
  flag: 'hr',
  text: 'Croatia'
}, {
  key: 'cu',
  value: 'cu',
  flag: 'cu',
  text: 'Cuba'
}, {
  key: 'cy',
  value: 'cy',
  flag: 'cy',
  text: 'Cyprus'
}, {
  key: 'cz',
  value: 'cz',
  flag: 'cz',
  text: 'Czech Republic'
}, {
  key: 'dk',
  value: 'dk',
  flag: 'dk',
  text: 'Denmark'
}, {
  key: 'dj',
  value: 'dj',
  flag: 'dj',
  text: 'Djibouti'
}, {
  key: 'dm',
  value: 'dm',
  flag: 'dm',
  text: 'Dominica'
}, {
  key: 'do',
  value: 'do',
  flag: 'do',
  text: 'Dominican Republic'
}, {
  key: 'ec',
  value: 'ec',
  flag: 'ec',
  text: 'Ecuador'
}, {
  key: 'eg',
  value: 'eg',
  flag: 'eg',
  text: 'Egypt'
}, {
  key: 'sv',
  value: 'sv',
  flag: 'sv',
  text: 'El Salvador'
}, {
  key: 'gb',
  value: 'gb',
  flag: 'gb',
  text: 'United Kingdom'
}, {
  key: 'gq',
  value: 'gq',
  flag: 'gq',
  text: 'Equatorial Guinea'
}, {
  key: 'er',
  value: 'er',
  flag: 'er',
  text: 'Eritrea'
}, {
  key: 'ee',
  value: 'ee',
  flag: 'ee',
  text: 'Estonia'
}, {
  key: 'et',
  value: 'et',
  flag: 'et',
  text: 'Ethiopia'
}, {
  key: 'eu',
  value: 'eu',
  flag: 'eu',
  text: 'European Union'
}, {
  key: 'fk',
  value: 'fk',
  flag: 'fk',
  text: 'Falkland Islands'
}, {
  key: 'fo',
  value: 'fo',
  flag: 'fo',
  text: 'Faroe Islands'
}, {
  key: 'fj',
  value: 'fj',
  flag: 'fj',
  text: 'Fiji'
}, {
  key: 'fi',
  value: 'fi',
  flag: 'fi',
  text: 'Finland'
}, {
  key: 'fr',
  value: 'fr',
  flag: 'fr',
  text: 'France'
}, {
  key: 'gf',
  value: 'gf',
  flag: 'gf',
  text: 'French Guiana'
}, {
  key: 'pf',
  value: 'pf',
  flag: 'pf',
  text: 'French Polynesia'
}, {
  key: 'tf',
  value: 'tf',
  flag: 'tf',
  text: 'French Territories'
}, {
  key: 'ga',
  value: 'ga',
  flag: 'ga',
  text: 'Gabon'
}, {
  key: 'gm',
  value: 'gm',
  flag: 'gm',
  text: 'Gambia'
}, {
  key: 'ge',
  value: 'ge',
  flag: 'ge',
  text: 'Georgia'
}, {
  key: 'de',
  value: 'de',
  flag: 'de',
  text: 'Germany'
}, {
  key: 'gh',
  value: 'gh',
  flag: 'gh',
  text: 'Ghana'
}, {
  key: 'gi',
  value: 'gi',
  flag: 'gi',
  text: 'Gibraltar'
}, {
  key: 'gr',
  value: 'gr',
  flag: 'gr',
  text: 'Greece'
}, {
  key: 'gl',
  value: 'gl',
  flag: 'gl',
  text: 'Greenland'
}, {
  key: 'gd',
  value: 'gd',
  flag: 'gd',
  text: 'Grenada'
}, {
  key: 'gp',
  value: 'gp',
  flag: 'gp',
  text: 'Guadeloupe'
}, {
  key: 'gu',
  value: 'gu',
  flag: 'gu',
  text: 'Guam'
}, {
  key: 'gt',
  value: 'gt',
  flag: 'gt',
  text: 'Guatemala'
}, {
  key: 'gw',
  value: 'gw',
  flag: 'gw',
  text: 'Guinea-Bissau'
}, {
  key: 'gn',
  value: 'gn',
  flag: 'gn',
  text: 'Guinea'
}, {
  key: 'gy',
  value: 'gy',
  flag: 'gy',
  text: 'Guyana'
}, {
  key: 'ht',
  value: 'ht',
  flag: 'ht',
  text: 'Haiti'
}, {
  key: 'hm',
  value: 'hm',
  flag: 'hm',
  text: 'Heard Island'
}, {
  key: 'hn',
  value: 'hn',
  flag: 'hn',
  text: 'Honduras'
}, {
  key: 'hk',
  value: 'hk',
  flag: 'hk',
  text: 'Hong Kong'
}, {
  key: 'hu',
  value: 'hu',
  flag: 'hu',
  text: 'Hungary'
}, {
  key: 'is',
  value: 'is',
  flag: 'is',
  text: 'Iceland'
}, {
  key: 'in',
  value: 'in',
  flag: 'in',
  text: 'India'
}, {
  key: 'io',
  value: 'io',
  flag: 'io',
  text: 'Indian Ocean Territory'
}, {
  key: 'id',
  value: 'id',
  flag: 'id',
  text: 'Indonesia'
}, {
  key: 'ir',
  value: 'ir',
  flag: 'ir',
  text: 'Iran'
}, {
  key: 'iq',
  value: 'iq',
  flag: 'iq',
  text: 'Iraq'
}, {
  key: 'ie',
  value: 'ie',
  flag: 'ie',
  text: 'Ireland'
}, {
  key: 'il',
  value: 'il',
  flag: 'il',
  text: 'Israel'
}, {
  key: 'it',
  value: 'it',
  flag: 'it',
  text: 'Italy'
}, {
  key: 'jm',
  value: 'jm',
  flag: 'jm',
  text: 'Jamaica'
}, {
  key: 'jp',
  value: 'jp',
  flag: 'jp',
  text: 'Japan'
}, {
  key: 'jo',
  value: 'jo',
  flag: 'jo',
  text: 'Jordan'
}, {
  key: 'kz',
  value: 'kz',
  flag: 'kz',
  text: 'Kazakhstan'
}, {
  key: 'ke',
  value: 'ke',
  flag: 'ke',
  text: 'Kenya'
}, {
  key: 'ki',
  value: 'ki',
  flag: 'ki',
  text: 'Kiribati'
}, {
  key: 'kw',
  value: 'kw',
  flag: 'kw',
  text: 'Kuwait'
}, {
  key: 'kg',
  value: 'kg',
  flag: 'kg',
  text: 'Kyrgyzstan'
}, {
  key: 'la',
  value: 'la',
  flag: 'la',
  text: 'Laos'
}, {
  key: 'lv',
  value: 'lv',
  flag: 'lv',
  text: 'Latvia'
}, {
  key: 'lb',
  value: 'lb',
  flag: 'lb',
  text: 'Lebanon'
}, {
  key: 'ls',
  value: 'ls',
  flag: 'ls',
  text: 'Lesotho'
}, {
  key: 'lr',
  value: 'lr',
  flag: 'lr',
  text: 'Liberia'
}, {
  key: 'ly',
  value: 'ly',
  flag: 'ly',
  text: 'Libya'
}, {
  key: 'li',
  value: 'li',
  flag: 'li',
  text: 'Liechtenstein'
}, {
  key: 'lt',
  value: 'lt',
  flag: 'lt',
  text: 'Lithuania'
}, {
  key: 'lu',
  value: 'lu',
  flag: 'lu',
  text: 'Luxembourg'
}, {
  key: 'mo',
  value: 'mo',
  flag: 'mo',
  text: 'Macau'
}, {
  key: 'mk',
  value: 'mk',
  flag: 'mk',
  text: 'Macedonia'
}, {
  key: 'mg',
  value: 'mg',
  flag: 'mg',
  text: 'Madagascar'
}, {
  key: 'mw',
  value: 'mw',
  flag: 'mw',
  text: 'Malawi'
}, {
  key: 'my',
  value: 'my',
  flag: 'my',
  text: 'Malaysia'
}, {
  key: 'mv',
  value: 'mv',
  flag: 'mv',
  text: 'Maldives'
}, {
  key: 'ml',
  value: 'ml',
  flag: 'ml',
  text: 'Mali'
}, {
  key: 'mt',
  value: 'mt',
  flag: 'mt',
  text: 'Malta'
}, {
  key: 'mh',
  value: 'mh',
  flag: 'mh',
  text: 'Marshall Islands'
}, {
  key: 'mq',
  value: 'mq',
  flag: 'mq',
  text: 'Martinique'
}, {
  key: 'mr',
  value: 'mr',
  flag: 'mr',
  text: 'Mauritania'
}, {
  key: 'mu',
  value: 'mu',
  flag: 'mu',
  text: 'Mauritius'
}, {
  key: 'yt',
  value: 'yt',
  flag: 'yt',
  text: 'Mayotte'
}, {
  key: 'mx',
  value: 'mx',
  flag: 'mx',
  text: 'Mexico'
}, {
  key: 'fm',
  value: 'fm',
  flag: 'fm',
  text: 'Micronesia'
}, {
  key: 'md',
  value: 'md',
  flag: 'md',
  text: 'Moldova'
}, {
  key: 'mc',
  value: 'mc',
  flag: 'mc',
  text: 'Monaco'
}, {
  key: 'mn',
  value: 'mn',
  flag: 'mn',
  text: 'Mongolia'
}, {
  key: 'me',
  value: 'me',
  flag: 'me',
  text: 'Montenegro'
}, {
  key: 'ms',
  value: 'ms',
  flag: 'ms',
  text: 'Montserrat'
}, {
  key: 'ma',
  value: 'ma',
  flag: 'ma',
  text: 'Morocco'
}, {
  key: 'mz',
  value: 'mz',
  flag: 'mz',
  text: 'Mozambique'
}, {
  key: 'mm',
  value: 'mm',
  flag: 'mm',
  text: 'Myanmar'
}, {
  key: 'na',
  value: 'na',
  flag: 'na',
  text: 'Namibia'
}, {
  key: 'nr',
  value: 'nr',
  flag: 'nr',
  text: 'Nauru'
}, {
  key: 'np',
  value: 'np',
  flag: 'np',
  text: 'Nepal'
}, {
  key: 'an',
  value: 'an',
  flag: 'an',
  text: 'Netherlands Antilles'
}, {
  key: 'nl',
  value: 'nl',
  flag: 'nl',
  text: 'Netherlands'
}, {
  key: 'nc',
  value: 'nc',
  flag: 'nc',
  text: 'New Caledonia'
}, {
  key: 'pg',
  value: 'pg',
  flag: 'pg',
  text: 'New Guinea'
}, {
  key: 'nz',
  value: 'nz',
  flag: 'nz',
  text: 'New Zealand'
}, {
  key: 'ni',
  value: 'ni',
  flag: 'ni',
  text: 'Nicaragua'
}, {
  key: 'ne',
  value: 'ne',
  flag: 'ne',
  text: 'Niger'
}, {
  key: 'ng',
  value: 'ng',
  flag: 'ng',
  text: 'Nigeria'
}, {
  key: 'nu',
  value: 'nu',
  flag: 'nu',
  text: 'Niue'
}, {
  key: 'nf',
  value: 'nf',
  flag: 'nf',
  text: 'Norfolk Island'
}, {
  key: 'kp',
  value: 'kp',
  flag: 'kp',
  text: 'North Korea'
}, {
  key: 'mp',
  value: 'mp',
  flag: 'mp',
  text: 'Northern Mariana Islands'
}, {
  key: 'no',
  value: 'no',
  flag: 'no',
  text: 'Norway'
}, {
  key: 'om',
  value: 'om',
  flag: 'om',
  text: 'Oman'
}, {
  key: 'pk',
  value: 'pk',
  flag: 'pk',
  text: 'Pakistan'
}, {
  key: 'pw',
  value: 'pw',
  flag: 'pw',
  text: 'Palau'
}, {
  key: 'ps',
  value: 'ps',
  flag: 'ps',
  text: 'Palestine'
}, {
  key: 'pa',
  value: 'pa',
  flag: 'pa',
  text: 'Panama'
}, {
  key: 'py',
  value: 'py',
  flag: 'py',
  text: 'Paraguay'
}, {
  key: 'pe',
  value: 'pe',
  flag: 'pe',
  text: 'Peru'
}, {
  key: 'ph',
  value: 'ph',
  flag: 'ph',
  text: 'Philippines'
}, {
  key: 'pn',
  value: 'pn',
  flag: 'pn',
  text: 'Pitcairn Islands'
}, {
  key: 'pl',
  value: 'pl',
  flag: 'pl',
  text: 'Poland'
}, {
  key: 'pt',
  value: 'pt',
  flag: 'pt',
  text: 'Portugal'
}, {
  key: 'pr',
  value: 'pr',
  flag: 'pr',
  text: 'Puerto Rico'
}, {
  key: 'qa',
  value: 'qa',
  flag: 'qa',
  text: 'Qatar'
}, {
  key: 're',
  value: 're',
  flag: 're',
  text: 'Reunion'
}, {
  key: 'ro',
  value: 'ro',
  flag: 'ro',
  text: 'Romania'
}, {
  key: 'ru',
  value: 'ru',
  flag: 'ru',
  text: 'Russia'
}, {
  key: 'rw',
  value: 'rw',
  flag: 'rw',
  text: 'Rwanda'
}, {
  key: 'sh',
  value: 'sh',
  flag: 'sh',
  text: 'Saint Helena'
}, {
  key: 'kn',
  value: 'kn',
  flag: 'kn',
  text: 'Saint Kitts and Nevis'
}, {
  key: 'lc',
  value: 'lc',
  flag: 'lc',
  text: 'Saint Lucia'
}, {
  key: 'pm',
  value: 'pm',
  flag: 'pm',
  text: 'Saint Pierre'
}, {
  key: 'vc',
  value: 'vc',
  flag: 'vc',
  text: 'Saint Vincent'
}, {
  key: 'ws',
  value: 'ws',
  flag: 'ws',
  text: 'Samoa'
}, {
  key: 'sm',
  value: 'sm',
  flag: 'sm',
  text: 'San Marino'
}, {
  key: 'gs',
  value: 'gs',
  flag: 'gs',
  text: 'Sandwich Islands'
}, {
  key: 'st',
  value: 'st',
  flag: 'st',
  text: 'Sao Tome'
}, {
  key: 'sa',
  value: 'sa',
  flag: 'sa',
  text: 'Saudi Arabia'
}, {
  key: 'sn',
  value: 'sn',
  flag: 'sn',
  text: 'Senegal'
}, {
  key: 'cs',
  value: 'cs',
  flag: 'cs',
  text: 'Serbia'
}, {
  key: 'rs',
  value: 'rs',
  flag: 'rs',
  text: 'Serbia'
}, {
  key: 'sc',
  value: 'sc',
  flag: 'sc',
  text: 'Seychelles'
}, {
  key: 'sl',
  value: 'sl',
  flag: 'sl',
  text: 'Sierra Leone'
}, {
  key: 'sg',
  value: 'sg',
  flag: 'sg',
  text: 'Singapore'
}, {
  key: 'sk',
  value: 'sk',
  flag: 'sk',
  text: 'Slovakia'
}, {
  key: 'si',
  value: 'si',
  flag: 'si',
  text: 'Slovenia'
}, {
  key: 'sb',
  value: 'sb',
  flag: 'sb',
  text: 'Solomon Islands'
}, {
  key: 'so',
  value: 'so',
  flag: 'so',
  text: 'Somalia'
}, {
  key: 'za',
  value: 'za',
  flag: 'za',
  text: 'South Africa'
}, {
  key: 'kr',
  value: 'kr',
  flag: 'kr',
  text: 'South Korea'
}, {
  key: 'es',
  value: 'es',
  flag: 'es',
  text: 'Spain'
}, {
  key: 'lk',
  value: 'lk',
  flag: 'lk',
  text: 'Sri Lanka'
}, {
  key: 'sd',
  value: 'sd',
  flag: 'sd',
  text: 'Sudan'
}, {
  key: 'sr',
  value: 'sr',
  flag: 'sr',
  text: 'Suriname'
}, {
  key: 'sj',
  value: 'sj',
  flag: 'sj',
  text: 'Svalbard'
}, {
  key: 'sz',
  value: 'sz',
  flag: 'sz',
  text: 'Swaziland'
}, {
  key: 'se',
  value: 'se',
  flag: 'se',
  text: 'Sweden'
}, {
  key: 'ch',
  value: 'ch',
  flag: 'ch',
  text: 'Switzerland'
}, {
  key: 'sy',
  value: 'sy',
  flag: 'sy',
  text: 'Syria'
}, {
  key: 'tw',
  value: 'tw',
  flag: 'tw',
  text: 'Taiwan'
}, {
  key: 'tj',
  value: 'tj',
  flag: 'tj',
  text: 'Tajikistan'
}, {
  key: 'tz',
  value: 'tz',
  flag: 'tz',
  text: 'Tanzania'
}, {
  key: 'th',
  value: 'th',
  flag: 'th',
  text: 'Thailand'
}, {
  key: 'tl',
  value: 'tl',
  flag: 'tl',
  text: 'Timorleste'
}, {
  key: 'tg',
  value: 'tg',
  flag: 'tg',
  text: 'Togo'
}, {
  key: 'tk',
  value: 'tk',
  flag: 'tk',
  text: 'Tokelau'
}, {
  key: 'to',
  value: 'to',
  flag: 'to',
  text: 'Tonga'
}, {
  key: 'tt',
  value: 'tt',
  flag: 'tt',
  text: 'Trinidad'
}, {
  key: 'tn',
  value: 'tn',
  flag: 'tn',
  text: 'Tunisia'
}, {
  key: 'tr',
  value: 'tr',
  flag: 'tr',
  text: 'Turkey'
}, {
  key: 'tm',
  value: 'tm',
  flag: 'tm',
  text: 'Turkmenistan'
}, {
  key: 'tv',
  value: 'tv',
  flag: 'tv',
  text: 'Tuvalu'
}, {
  key: 'ug',
  value: 'ug',
  flag: 'ug',
  text: 'Uganda'
}, {
  key: 'ua',
  value: 'ua',
  flag: 'ua',
  text: 'Ukraine'
}, {
  key: 'ae',
  value: 'ae',
  flag: 'ae',
  text: 'United Arab Emirates'
}, {
  key: 'us',
  value: 'us',
  flag: 'us',
  text: 'United States'
}, {
  key: 'uy',
  value: 'uy',
  flag: 'uy',
  text: 'Uruguay'
}, {
  key: 'um',
  value: 'um',
  flag: 'um',
  text: 'Us Minor Islands'
}, {
  key: 'vi',
  value: 'vi',
  flag: 'vi',
  text: 'Us Virgin Islands'
}, {
  key: 'uz',
  value: 'uz',
  flag: 'uz',
  text: 'Uzbekistan'
}, {
  key: 'vu',
  value: 'vu',
  flag: 'vu',
  text: 'Vanuatu'
}, {
  key: 'va',
  value: 'va',
  flag: 'va',
  text: 'Vatican City'
}, {
  key: 've',
  value: 've',
  flag: 've',
  text: 'Venezuela'
}, {
  key: 'vn',
  value: 'vn',
  flag: 'vn',
  text: 'Vietnam'
}, {
  key: 'wf',
  value: 'wf',
  flag: 'wf',
  text: 'Wallis and Futuna'
}, {
  key: 'eh',
  value: 'eh',
  flag: 'eh',
  text: 'Western Sahara'
}, {
  key: 'ye',
  value: 'ye',
  flag: 'ye',
  text: 'Yemen'
}, {
  key: 'zm',
  value: 'zm',
  flag: 'zm',
  text: 'Zambia'
}, {
  key: 'zw',
  value: 'zw',
  flag: 'zw',
  text: 'Zimbabwe'
}];

var GenerateFormField = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(GenerateFormField, _PureComponent);

  function GenerateFormField(_props) {
    var _this;

    _this = _PureComponent.call(this, _props) || this;

    _this.getValue = function (props) {
      return props.modifiedValue !== undefined ? props.modifiedValue : props.translatedValue;
    };

    _this.rollBackValue = function () {
      _this.setState({
        value: _this.props.translatedValue
      });

      var name = _this.props.name;

      _this.props.handleChangeFieldValue(null, {
        name: name,
        undefined: undefined
      });

      _this.props.hookFieldUpdate(_this.props.name, _this.props.translatedValue);
    };

    _this.handleChangeFieldValue = function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      _this.setState({
        value: value
      });

      _this.props.handleChangeFieldValue(e, {
        name: name,
        value: value
      });

      _this.props.hookFieldUpdate(_this.props.name, value);
    };

    var initValue = _this.getValue(_props);

    _this.state = {
      value: initValue
    };

    _this.props.hookFieldUpdate(_this.props.name, initValue);

    return _this;
  }

  var _proto = GenerateFormField.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.modifiedValue !== this.props.modifiedValue || nextProps.translatedValue !== this.props.translatedValue) {
      this.setState({
        value: this.getValue(nextProps)
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.props.group && /*#__PURE__*/React__default.createElement("div", {
      className: "docx-template__group-name"
    }, this.props.group), /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Group, {
      className: "fluid",
      key: 'field_' + this.props.name
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Label, {
      className: "mt-2"
    }, /*#__PURE__*/React__default.createElement("span", {
      style: {
        textTransform: 'capitalize'
      }
    }, this.props.label, " ", this.props.required === 1 && /*#__PURE__*/React__default.createElement("span", {
      style: {
        color: 'red'
      }
    }, "*"))), this.props.type !== FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value && this.props.type !== FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT.value && this.props.type !== FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT_SINGLE.value && this.props.type !== FILE_TEMPLATE_FIELD_TYPES.SINGLE_CHOICE_OPTION.value && /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
      value: this.state.value ? this.state.value : '',
      name: this.props.name,
      fluid: true,
      onChange: function onChange(e) {
        return _this2.handleChangeFieldValue(null, {
          name: _this2.props.name,
          value: e.target.value
        });
      }
    }), this.props.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value && /*#__PURE__*/React__default.createElement(DatePicker, {
      className: "form-control",
      selected: isNaN(Date.parse(this.state.value)) ? '' : new Date(moment$1(this.state.value).format('YYYY-MM-DD')),
      onChange: function onChange(value) {
        var name = _this2.props.name;

        _this2.handleChangeFieldValue(null, {
          name: name,
          value: value
        });
      },
      dateFormat: "MMMM dd, yyy"
    }), this.props.type === FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT.value && /*#__PURE__*/React__default.createElement(semanticUiReact.Dropdown, {
      className: "form-control",
      value: this.state.value ? this.state.value.split(', ') : [],
      name: this.props.name,
      selection: true,
      search: true,
      multiple: true,
      options: COUNTRY_OPTIONS$1.map(function (c) {
        return {
          value: c.text,
          text: c.text,
          key: c.key
        };
      }),
      onChange: function onChange(e, _ref2) {
        var name = _ref2.name,
            value = _ref2.value;
        value = value.join(', ');

        _this2.handleChangeFieldValue(e, {
          name: name,
          value: value
        });
      }
    }), this.props.type === FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT_SINGLE.value && /*#__PURE__*/React__default.createElement(semanticUiReact.Dropdown, {
      className: "form-control",
      value: this.state.value,
      name: this.props.name,
      selection: true,
      search: true,
      options: COUNTRY_OPTIONS$1.map(function (c) {
        return {
          value: c.text,
          text: c.text,
          key: c.key
        };
      }),
      onChange: function onChange(e, _ref3) {
        var name = _ref3.name,
            value = _ref3.value;

        _this2.handleChangeFieldValue(e, {
          name: name,
          value: value
        });
      }
    }), this.props.type === FILE_TEMPLATE_FIELD_TYPES.SINGLE_CHOICE_OPTION.value && /*#__PURE__*/React__default.createElement(semanticUiReact.Dropdown, {
      className: "form-control",
      value: this.state.value ? this.state.value : null,
      name: this.props.name,
      selection: true,
      search: true,
      options: this.props.options.map(function (o) {
        return {
          key: o,
          text: o,
          value: o
        };
      }),
      onChange: this.handleChangeFieldValue
    }), this.props.explanation && this.props.explanation !== '' && /*#__PURE__*/React__default.createElement("div", {
      className: "docx-template__explanation"
    }, "* ", this.props.explanation)));
  };

  return GenerateFormField;
}(React.PureComponent);

var GenerateForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(GenerateForm, _Component);

  function GenerateForm(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.getData = function () {
      _this.setState({
        isLoading: true
      });

      var getTemplate = function getTemplate() {
        _this.docxTemplateHelper = new DocxTemplateHelper();

        _this.docxTemplateHelper.setDefaultFieldValueBuilders(FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS);

        _this.docxTemplateHelper.loadDoc(_this.props.url, function (doc) {
          _this.setState({
            isLoadingTemplateFailed: false
          });

          _this.fillValueToFields();
        }, _this.onDocDownloadFailed);
      };

      _this.setState({
        valueHolders: _extends({}, _this.state.valueHolders)
      }, function () {
        getTemplate();
      });
    };

    _this.onChangeFieldValue = function (name, modifiedValue, translatedValue) {
      var _extends2;

      _this.setState(_extends({}, _this.state, {
        docFields: _extends({}, _this.state.docFields, (_extends2 = {}, _extends2[name] = _extends({}, _this.state.docFields[name], {
          modified_value: modifiedValue !== translatedValue ? modifiedValue : null
        }), _extends2))
      }));
    };

    _this.handleChangeHidableField = function (fieldName) {
      var _this$state$hideableF, _extends3;

      _this.setState(_extends({}, _this.state, {
        hideableFields: _extends({}, _this.state.hideableFields, (_extends3 = {}, _extends3[fieldName] = _extends({}, _this.state.hideableFields[fieldName], {
          value: _this.state.hideableFields[fieldName] === 1 || ((_this$state$hideableF = _this.state.hideableFields[fieldName]) === null || _this$state$hideableF === void 0 ? void 0 : _this$state$hideableF.value) === 1 ? 0 : 1
        }), _extends3))
      }));
    };

    _this.fillDoc = function () {
      var fieldAndValues = {};
      var hideableFieldAndValues = {};
      Object.values(_this.state.docFields).map(function (field) {
        if (field.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value) {
          fieldAndValues[field.name] = field.modified_value ? moment$1(field.modified_value).format('MMM DD, YYYY') : moment$1(field.translated_value).format('MMM DD, YYYY');
        } else {
          fieldAndValues[field.name] = field.modified_value ? field.modified_value : field.translated_value ? field.translated_value : '';
        }

        return field;
      });
      Object.values(_this.state.hideableFields).map(function (field) {
        hideableFieldAndValues[field.name] = field.modified_value ? field.modified_value : field.value ? field.value : 0;
        return field;
      });

      try {
        _this.docxTemplateHelper.setData(_extends({}, fieldAndValues, {
          hide: hideableFieldAndValues
        }));

        return fieldAndValues;
      } catch (error) {
        _this.onDocDownloadFailed(error);
      }
    };

    _this.downloadFile = function (skipDownload) {
      if (skipDownload === void 0) {
        skipDownload = false;
      }

      var fieldAndValues = _this.fillDoc();

      if (!skipDownload) {
        _this.docxTemplateHelper.createAndDownloadBlobFile((_this.props.fileName || 'Downloaded_') + "_" + moment$1().format('YYYY_MM_DD_HH_mm_ss'));
      }

      if (_this.props.onAfterDownload) {
        _this.props.onAfterDownload(fieldAndValues);
      }
    };

    _this.fillValueToFields = function (savedFieldValues, valueHolders, changedValueHolder) {
      var _savedFieldValues;

      if (savedFieldValues === void 0) {
        savedFieldValues = null;
      }

      if (valueHolders === void 0) {
        valueHolders = null;
      }

      if (changedValueHolder === void 0) {
        changedValueHolder = null;
      }

      if (!valueHolders) {
        valueHolders = _this.state.valueHolders;
      }

      var filledData = _this.docxTemplateHelper.fillPlaceHolders(_this.props.settings, (_savedFieldValues = savedFieldValues) === null || _savedFieldValues === void 0 ? void 0 : _savedFieldValues.data, valueHolders, changedValueHolder);

      _this.setState({
        isLoading: false,
        docFields: _extends({}, _this.state.docFields, filledData.fields),
        hideableFields: _extends({}, _this.state.hideableFields, filledData.hideableFields)
      });
    };

    _this.onDocDownloadFailed = function (err) {
      _this.setState({
        isLoadingTemplateFailed: true,
        isLoading: false
      });
    };

    _this.hookFieldGenerate = function (fieldName, value) {};

    _this.renderFields = function (fields) {
      return fields.map(function (field) {
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(GenerateFormField, {
          hookFieldUpdate: _this.hookFieldGenerate,
          key: 'field_' + field.name,
          label: field.label ? field.label : field.name ? field.name.split('_').join(' ') : 'Unknown Field',
          name: field.name,
          options: field.options || [],
          type: field.type || FILE_TEMPLATE_FIELD_TYPES.FIXED_TEXT.value,
          required: field.required,
          explanation: field.explanation,
          group: field.group_name,
          modifiedValue: field.modified_value,
          translatedValue: field.translated_value,
          handleChangeFieldValue: function handleChangeFieldValue(e, _ref) {
            var name = _ref.name,
                value = _ref.value;

            _this.onChangeFieldValue(name, value, field.translated_value);
          }
        }));
      });
    };

    _this.state = {
      doc: null,
      isLoading: false,
      templatePrefilledFields: {},
      docFields: {},
      hideableFields: {},
      savedFieldValues: null,
      isLoadingTemplateFailed: false,
      valueHolders: {
        startup: props.startup || {},
        deal: props.deal || {},
        insigniaSigner: props.currentUser,
        startupSigner: null
      },
      insigniaSignerId: null,
      startupSignerId: null
    };
    _this.docxTemplateHelper = null;
    return _this;
  }

  var _proto = GenerateForm.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.getData();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        isLoading = _this$state.isLoading,
        isLoadingTemplateFailed = _this$state.isLoadingTemplateFailed;
    var errorFields = [];
    var content = null;

    if (isLoading) {
      content = /*#__PURE__*/React__default.createElement("div", null, "Loading");
    } else if (isLoadingTemplateFailed) {
      content = /*#__PURE__*/React__default.createElement(reactBootstrap.Alert, {
        variant: "danger"
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.Alert.Heading, null, "We're sorry, something went wrong"), /*#__PURE__*/React__default.createElement("p", null, "Template file can not be loaded"));
    } else {
      var docFields = Object.values(this.state.docFields);
      docFields.sort(function (a, b) {
        if (!a && !b) return 0;
        if (!a) return 1;
        if (!b) return -1;
        return a.importance - b.importance;
      });
      errorFields = docFields.filter(function (field) {
        return field.modified_value === undefined && field.required === 1 && !field.translated_value || field.modified_value !== undefined && !field.modified_value && field.required === 1;
      });
      var buttons = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.props.onClose && /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
        className: "docx-template__btn-close",
        disabled: isLoading,
        color: "gray",
        onClick: function onClick() {
          return _this2.props.onClose();
        }
      }, "Close"), /*#__PURE__*/React__default.createElement("div", {
        style: {
          flex: 1
        }
      }), !isLoading && !isLoadingTemplateFailed && /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
        className: "docx-template__btn-download",
        disabled: errorFields.length > 0 || isLoading || !this.props.canDownload,
        color: "blue",
        onClick: this.downloadFile
      }, "Download Docx"), !isLoading && !isLoadingTemplateFailed && /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
        className: "docx-template__btn-save",
        disabled: isLoading,
        color: "blue",
        onClick: function onClick() {
          return _this2.downloadFile(true);
        }
      }, "Save"), !(typeof this.props.noModal !== 'undefined') && /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
        disabled: isLoading,
        onClick: this.props.onClose
      }, ' ', "Close"));
      var hiddenFieldsArr = Object.entries(this.state.hideableFields);
      content = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Form, {
        name: "generateTestTemplateForm"
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.Container, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, !!this.props.injectedFieldsBefore && this.props.injectedFieldsBefore, this.renderFields(docFields), hiddenFieldsArr.length > 0 && /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Group, null, /*#__PURE__*/React__default.createElement("label", null, "Optional Clauses"), Object.entries(this.state.hideableFields).map(function (field) {
        var _this2$state$hideable;

        var fieldName = field[0];
        return /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Group, {
          key: fieldName
        }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Check, {
          checked: ((_this2$state$hideable = _this2.state.hideableFields[fieldName]) === null || _this2$state$hideable === void 0 ? void 0 : _this2$state$hideable.value) !== 1,
          onChange: function onChange() {
            return _this2.handleChangeHidableField(fieldName);
          },
          toggle: true,
          label: /*#__PURE__*/React__default.createElement("label", {
            style: {
              textTransform: 'capitalize'
            }
          }, fieldName.split('_').join(' '))
        }));
      })), !!this.props.injectedFieldsAfter && this.props.injectedFieldsAfter)), /*#__PURE__*/React__default.createElement(reactBootstrap.Row, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement("div", {
        className: "docx-template__download-btn"
      }, buttons))))));
    }

    return /*#__PURE__*/React__default.createElement("div", null, content);
  };

  return GenerateForm;
}(React.Component);

var GenerateForm$1 = React.memo(GenerateForm);

var DocxTemplate = React.memo(function (_ref) {
  var url = _ref.url,
      settings = _ref.settings,
      canDownload = _ref.canDownload,
      onAfterDownload = _ref.onAfterDownload,
      injectedFieldsBefore = _ref.injectedFieldsBefore,
      injectedFieldsAfter = _ref.injectedFieldsAfter,
      fileName = _ref.fileName,
      onClose = _ref.onClose;
  return React__default.createElement(GenerateForm$1, {
    noModal: true,
    url: url,
    settings: settings,
    canDownload: canDownload,
    onAfterDownload: onAfterDownload,
    injectedFieldsBefore: injectedFieldsBefore,
    injectedFieldsAfter: injectedFieldsAfter,
    fileName: fileName,
    onClose: onClose
  });
});

exports.DocxTemplate = DocxTemplate;
//# sourceMappingURL=index.js.map
