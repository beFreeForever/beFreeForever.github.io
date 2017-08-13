/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(6);
var isBuffer = __webpack_require__(26);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(28);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(7);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(23),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\TotalWorkspace\\Node.js\\vuetify_template\\src\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06c5fb71", Component.options)
  } else {
    hotAPI.reload("data-v-06c5fb71", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(29);
var buildURL = __webpack_require__(31);
var parseHeaders = __webpack_require__(32);
var isURLSameOrigin = __webpack_require__(33);
var createError = __webpack_require__(8);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(34);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(35);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(30);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__info_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
    routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_4__index_vue___default.a }, { path: '/Info', component: __WEBPACK_IMPORTED_MODULE_5__info_vue___default.a }]
});

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    router: router,
    components: {
        'index': __WEBPACK_IMPORTED_MODULE_4__index_vue___default.a
    },
    el: '#app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_3__app_vue___default.a);
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.1
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !hasOwn(result, key)) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // keep listeners
  var listeners = data.on;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', parentData && parentData.on, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.1';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  var isComponentRoot = isDef(vnode.componentOptions);
  var oldOn = isComponentRoot ? oldVnode.data.nativeOn : oldVnode.data.on;
  var on = isComponentRoot ? vnode.data.nativeOn : vnode.data.on;
  if (isUndef(oldOn) && isUndef(on)) {
    return
  }
  on = on || {};
  oldOn = oldOn || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1 && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1 && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      if (shouldIgnoreFirstNewline(lastTag, html)) {
        advance(1);
      }
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (!el.component && (
          isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e('" + (comment.text) + "')")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vuetify"] = factory();
	else
		root["Vuetify"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = createSimpleFunctional;
/* harmony export (immutable) */ __webpack_exports__["e"] = createSimpleTransition;
/* harmony export (immutable) */ __webpack_exports__["b"] = createJavaScriptTransition;
/* harmony export (immutable) */ __webpack_exports__["f"] = directiveConfig;
/* harmony export (immutable) */ __webpack_exports__["a"] = addOnceEventListener;
/* harmony export (immutable) */ __webpack_exports__["g"] = getObjectValueByPath;
/* harmony export (immutable) */ __webpack_exports__["c"] = createRange;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createSimpleFunctional(c) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';

  return {
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (c + ' ' + (data.staticClass || '')).trim();

      return h(el, data, children);
    }
  };
}

function createSimpleTransition(name) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top center 0';
  var mode = arguments[2];

  return {
    functional: true,

    props: {
      origin: {
        type: String,
        default: origin
      }
    },

    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};

      if (mode) context.data.props.mode = mode;

      context.data.on.beforeEnter = function (el) {
        el.style.transformOrigin = origin;
        el.style.webkitTransformOrigin = origin;
      };

      return h('transition', context.data, context.children);
    }
  };
}

function createJavaScriptTransition(name, functions) {
  var css = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'in-out';

  return {
    functional: true,

    props: {
      css: {
        type: Boolean,
        default: css
      },
      mode: {
        type: String,
        default: mode
      }
    },

    render: function render(h, context) {
      var data = {
        props: _extends({}, context.props, {
          name: name
        }),
        on: functions
      };

      return h('transition', data, context.children);
    }
  };
}

function directiveConfig(binding) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.assign({}, defaults, binding.modifiers, { value: binding.arg }, binding.value || {});
}

function addOnceEventListener(el, event, cb) {
  var once = function once() {
    cb();
    el.removeEventListener(event, once, false);
  };

  el.addEventListener(event, once, false);
}

function getObjectValueByPath(obj, path) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (!path || path.constructor !== String) return;
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  var a = path.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (obj.constructor === Object && k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }
  return obj;
}

function createRange(length) {
  return [].concat(_toConsumableArray(Array.from({ length: length }, function (v, k) {
    return k;
  })));
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    dark: Boolean,
    light: Boolean
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isActive: !!this.value
    };
  },


  props: {
    value: {
      required: false
    }
  },

  watch: {
    value: function value(val) {
      this.isActive = !!val;
    },
    isActive: function isActive(val) {
      !!val !== this.value && this.$emit('input', val);
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__["a" /* default */]],

  props: {
    disabled: Boolean,
    fa: Boolean,
    mdi: Boolean,
    large: Boolean,
    left: Boolean,
    medium: Boolean,
    right: Boolean,
    xLarge: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var icon = props.fa ? 'fa' : props.mdi ? 'mdi' : 'material-icons';
    data.staticClass = (icon + ' icon ' + (data.staticClass || '')).trim();
    data.attrs = data.attrs || {};

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.light) data.staticClass += ' theme--light';

    var classes = {
      'icon--large': props.large,
      'icon--left': props.left,
      'icon--medium': props.medium,
      'icon--right': props.right,
      'icon--x-large': props.xLarge,
      'primary--text': props.primary,
      'secondary--text': props.secondary,
      'success--text': props.success,
      'info--text': props.info,
      'warning--text': props.warning,
      'error--text': props.error
    };

    var iconClasses = Object.keys(classes).filter(function (k) {
      return classes[k];
    }).join(' ');
    iconClasses && (data.staticClass += ' ' + iconClasses);

    if (props.fa || props.mdi) {
      var comparison = props.fa ? 'fa' : 'mdi';
      var text = children.pop().text;

      if (text.indexOf(' ') > -1) data.staticClass += ' ' + comparison + '-' + text;else data.staticClass += ' ' + comparison + '-' + text.split(' ').join('-');
    }

    if (props.disabled) data.attrs.disabled = props.disabled;

    return h('i', data, children);
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeable__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__themeable__["a" /* default */]],

  data: function data() {
    return {
      errorBucket: [],
      focused: false,
      tabFocused: false,
      lazyValue: this.value
    };
  },


  props: {
    appendIcon: String,
    appendIconCb: Function,
    disabled: Boolean,
    error: Boolean,
    errorMessages: {
      type: [String, Array],
      default: function _default() {
        return [];
      }
    },
    hint: String,
    hideDetails: Boolean,
    label: String,
    persistentHint: Boolean,
    placeholder: String,
    prependIcon: String,
    prependIconCb: Function,
    required: Boolean,
    rules: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tabindex: {
      default: 0
    },
    value: {
      required: false
    }
  },

  computed: {
    hasError: function hasError() {
      return this.validations.length || this.error;
    },
    inputGroupClasses: function inputGroupClasses() {
      return Object.assign({
        'input-group': true,
        'input-group--focused': this.focused,
        'input-group--dirty': this.isDirty,
        'input-group--tab-focused': this.tabFocused,
        'input-group--disabled': this.disabled,
        'input-group--error': this.hasError,
        'input-group--append-icon': this.appendIcon,
        'input-group--prepend-icon': this.prependIcon,
        'input-group--required': this.required,
        'input-group--hide-details': this.hideDetails,
        'input-group--placeholder': !!this.placeholder,
        'theme--dark': this.dark,
        'theme--light': this.light
      }, this.classes);
    },
    isDirty: function isDirty() {
      return this.inputValue;
    },
    modifiers: function modifiers() {
      var modifiers = {
        lazy: false,
        number: false,
        trim: false
      };

      if (!this.$vnode.data.directives) {
        return modifiers;
      }

      var model = this.$vnode.data.directives.find(function (i) {
        return i.name === 'model';
      });

      if (!model) {
        return modifiers;
      }

      return Object.assign(modifiers, model.modifiers);
    },
    validations: function validations() {
      return (!Array.isArray(this.errorMessages) ? [this.errorMessages] : this.errorMessages).concat(this.errorBucket);
    }
  },

  watch: {
    rules: function rules() {
      this.validate();
    }
  },

  mounted: function mounted() {
    this.validate();
  },


  methods: {
    genLabel: function genLabel() {
      var data = {};

      if (this.id) data.attrs = { for: this.id };

      return this.$createElement('label', data, this.label);
    },
    genMessages: function genMessages() {
      var _this = this;

      var messages = [];

      if ((this.hint && this.focused || this.hint && this.persistentHint) && this.validations.length === 0) {
        messages = [this.genHint()];
      } else if (this.validations.length) {
        messages = this.validations.map(function (i) {
          return _this.genError(i);
        });
      }

      return this.$createElement('transition-group', {
        'class': 'input-group__messages',
        props: {
          tag: 'div',
          name: 'slide-y-transition'
        }
      }, messages);
    },
    genHint: function genHint() {
      return this.$createElement('div', {
        'class': 'input-group__hint',
        key: this.hint,
        domProps: { innerHTML: this.hint }
      });
    },
    genError: function genError(error) {
      return this.$createElement('div', {
        'class': 'input-group__error',
        key: error
      }, error);
    },
    genIcon: function genIcon(type) {
      var _class;

      var icon = this[type + 'Icon'];
      var cb = this[type + 'IconCb'];
      var hasCallback = typeof cb === 'function';

      return this.$createElement('v-icon', {
        'class': (_class = {}, _defineProperty(_class, 'input-group__' + type + '-icon', true), _defineProperty(_class, 'input-group__icon-cb', hasCallback), _class),
        on: {
          click: function click(e) {
            hasCallback && cb(e);
          }
        }
      }, icon);
    },
    genInputGroup: function genInputGroup(input) {
      var _this2 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var children = [];
      var wrapperChildren = [];
      var detailsChildren = [];

      data = Object.assign({}, {
        'class': this.inputGroupClasses,
        attrs: {
          tabindex: this.tabindex
        },
        on: {
          blur: function blur() {
            return _this2.tabFocused = false;
          },
          click: function click() {
            return _this2.tabFocused = false;
          },
          keyup: function keyup(e) {
            if ([9, 16].includes(e.keyCode)) {
              _this2.tabFocused = true;
            }
          },
          keydown: function keydown(e) {
            if (!_this2.toggle) return;

            if ([13, 32].includes(e.keyCode)) {
              e.preventDefault();
              _this2.toggle();
            }
          }
        }
      }, data);

      if (this.label) {
        children.push(this.genLabel());
      }

      wrapperChildren.push(input);

      if (this.prependIcon) {
        wrapperChildren.unshift(this.genIcon('prepend'));
      }

      if (this.appendIcon) {
        wrapperChildren.push(this.genIcon('append'));
      }

      children.push(this.$createElement('div', {
        'class': 'input-group__input'
      }, wrapperChildren));

      detailsChildren.push(this.genMessages());
      this.counter && detailsChildren.push(this.genCounter());

      children.push(this.$createElement('div', {
        'class': 'input-group__details'
      }, detailsChildren));

      return this.$createElement('div', data, children);
    },
    validate: function validate() {
      var _this3 = this;

      this.errorBucket = [];

      this.rules.forEach(function (rule) {
        var valid = typeof rule === 'function' ? rule(_this3.value) : rule;

        if (valid !== true) {
          _this3.errorBucket.push(valid);
        }
      });
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    primary: Boolean,
    secondary: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    error: Boolean
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    append: Boolean,
    disabled: Boolean,
    exact: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    router: Boolean,
    ripple: Boolean,
    tag: String
  },

  methods: {
    click: function click() {},
    generateRouteLink: function generateRouteLink() {
      var exact = this.exact;
      var tag = void 0;

      var data = {
        attrs: { disabled: this.disabled },
        class: this.classes,
        props: {},
        directives: [{
          name: 'ripple',
          value: this.ripple || false
        }],
        on: Object.assign({
          click: this.click
        }, this.$listeners || {})
      };

      if (!this.exact) {
        exact = this.href === '/' || this.to === '/' || this.href === Object(this.href) && this.href.path === '/' || this.to === Object(this.to) && this.to.path === '/';
      }

      if (this.to) {
        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        data.props.to = this.to;
        data.props.exact = exact;
        data.props.activeClass = this.activeClass;
        data.props.append = this.append;
        data.props.replace = this.replace;
      } else {
        tag = this.href && 'a' || this.tag || 'a';

        if (tag === 'a') {
          data.attrs.href = this.href || 'javascript:;';
        }
      }

      return { tag: tag, data: data };
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CarouselTransition */
/* unused harmony export CarouselReverseTransition */
/* unused harmony export TabTransition */
/* unused harmony export TabReverseTransition */
/* unused harmony export MenuTransition */
/* unused harmony export FabTransition */
/* unused harmony export DialogTransition */
/* unused harmony export DialogBottomTransition */
/* unused harmony export FadeTransition */
/* unused harmony export ScaleTransition */
/* unused harmony export SlideXTransition */
/* unused harmony export SlideXReverseTransition */
/* unused harmony export SlideYTransition */
/* unused harmony export SlideYReverseTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expand_transition__ = __webpack_require__(67);




// Component specific transitions
var CarouselTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('carousel-transition');
var CarouselReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('carousel-reverse-transition');
var TabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('tab-transition');
var TabReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('tab-reverse-transition');
var MenuTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('menu-transition');
var FabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('fab-transition', 'center center', 'out-in');

// Generic transitions
var DialogTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('dialog-transition');
var DialogBottomTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('dialog-bottom-transition');
var FadeTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('fade-transition');
var ScaleTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('scale-transition');
var SlideXTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-x-transition');
var SlideXReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-x-reverse-transition');
var SlideYTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-y-transition');
var SlideYReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* createSimpleTransition */])('slide-y-reverse-transition');

// JavaScript transitions
var ExpandTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["b" /* createJavaScriptTransition */])('expand-transition', __WEBPACK_IMPORTED_MODULE_1__expand_transition__["a" /* default */]);

/* harmony default export */ __webpack_exports__["b"] = ({
  CarouselTransition: CarouselTransition,
  CarouselReverseTransition: CarouselReverseTransition,
  DialogTransition: DialogTransition,
  DialogBottomTransition: DialogBottomTransition,
  FabTransition: FabTransition,
  FadeTransition: FadeTransition,
  MenuTransition: MenuTransition,
  ScaleTransition: ScaleTransition,
  SlideXTransition: SlideXTransition,
  SlideXReverseTransition: SlideXReverseTransition,
  SlideYTransition: SlideYTransition,
  SlideYReverseTransition: SlideYReverseTransition,
  TabReverseTransition: TabReverseTransition,
  TabTransition: TabTransition,
  ExpandTransition: ExpandTransition
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_route_link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__ = __webpack_require__(2);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'btn',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_route_link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__["a" /* default */]],

  props: {
    activeClass: {
      type: String,
      default: 'btn--active'
    },
    block: Boolean,
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    large: Boolean,
    loading: Boolean,
    outline: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    round: Boolean,
    small: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'btn': true,
        'btn--absolute': this.absolute,
        'btn--active': this.isActive,
        'btn--block': this.block,
        'btn--bottom': this.bottom,
        'btn--disabled': this.disabled,
        'btn--flat': this.flat,
        'btn--floating': this.fab,
        'btn--fixed': this.fixed,
        'btn--hover': this.hover,
        'btn--icon': this.icon,
        'btn--large': this.large,
        'btn--left': this.left,
        'btn--loader': this.loading,
        'btn--outline': this.outline,
        'btn--raised': !this.flat,
        'btn--right': this.right,
        'btn--round': this.round,
        'btn--small': this.small,
        'btn--top': this.top,
        'theme--dark dark--bg': this.dark,
        'theme--light light--bg': this.light,
        'primary': this.primary && !this.outline,
        'secondary': this.secondary && !this.outline,
        'success': this.success && !this.outline,
        'info': this.info && !this.outline,
        'warning': this.warning && !this.outline,
        'error': this.error && !this.outline,
        'primary--text': this.primary && (this.outline || this.flat),
        'secondary--text': this.secondary && (this.outline || this.flat),
        'success--text': this.success && (this.outline || this.flat),
        'info--text': this.info && (this.outline || this.flat),
        'warning--text': this.warning && (this.outline || this.flat),
        'error--text': this.error && (this.outline || this.flat)
      };
    }
  },

  methods: {
    // Prevent focus to match md spec
    click: function click(e) {
      !this.fab && e.detail && this.$el.blur();

      this.$emit('click', e);
    },
    genContent: function genContent() {
      return this.$createElement('div', { 'class': 'btn__content' }, [this.$slots.default]);
    },
    genLoader: function genLoader() {
      var children = [];

      if (!this.$slots.loader) {
        children.push(this.$createElement('v-progress-circular', {
          props: {
            indeterminate: true,
            size: 26
          }
        }));
      } else {
        children.push(this.$slots.loader);
      }

      return this.$createElement('span', { 'class': 'btn__loading' }, children);
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    var children = [this.genContent()];

    tag === 'button' && (data.attrs.type = this.type);
    this.loading && children.push(this.genLoader());

    return h(tag, data, children);
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    absolute: Boolean,
    bottom: Boolean,
    fixed: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    tile: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('card ' + (data.staticClass || '')).trim();
    data.style = data.style || {};
    data.style.height = props.height;

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.flat) data.staticClass += ' card--flat';
    if (props.horizontal) data.staticClass += ' card--horizontal';
    if (props.hover) data.staticClass += ' card--hover';
    if (props.light) data.staticClass += ' theme--light';
    if (props.raised) data.staticClass += ' card--raised';
    if (props.tile) data.staticClass += ' card--tile';

    if (props.img) {
      data.style.background = 'url(' + props.img + ') center center / cover no-repeat';
    }

    return h('div', data, children);
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isBooted: false
    };
  },


  watch: {
    isActive: function isActive() {
      this.isBooted = true;
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isSaving: false
    };
  },


  props: {
    actions: Boolean,
    autosave: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    scrollable: Boolean,
    value: {
      required: true
    },
    light: {
      type: Boolean,
      default: true
    },
    dark: Boolean
  },

  methods: {
    save: function save() {},
    cancel: function cancel() {},
    genSlot: function genSlot() {
      return this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      });
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    contentClass: {
      default: ''
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      var app = document.querySelector('[data-app]');

      if (!app) {
        return console.warn('Application is missing <v-app> component.');
      }

      app.insertBefore(_this.$refs.content, app.firstChild);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.$refs.content) return;

    // IE11 Fix
    try {
      this.$refs.content.parentNode.removeChild(this.$refs.content);
    } catch (e) {}
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      overlay: null,
      overlayOffset: 0,
      overlayTransitionDuration: 500
    };
  },


  props: {
    hideOverlay: Boolean
  },

  beforeDestroy: function beforeDestroy() {
    this.removeOverlay();
  },


  methods: {
    genOverlay: function genOverlay() {
      var _this = this;

      if (!this.isActive || this.hideOverlay || this.isActive && this.overlay) return;

      this.overlay = document.createElement('div');
      this.overlay.className = 'overlay';
      this.overlay.onclick = function () {
        if (_this.permanent) return;else if (!_this.persistent) _this.isActive = false;else if (_this.isMobile) _this.isActive = false;
      };

      if (this.absolute) this.overlay.className += ' overlay--absolute';

      this.hideScroll();

      if (this.absolute) {
        // Required for IE11
        this.$el.parentNode.insertBefore(this.overlay, this.$el.parentNode.firstChild);
      } else {
        document.querySelector('[data-app]').appendChild(this.overlay);
      }

      this.overlay.clientHeight; // Force repaint
      requestAnimationFrame(function () {
        _this.overlay.className += ' overlay--active';
      });

      return true;
    },
    removeOverlay: function removeOverlay() {
      var _this2 = this;

      if (!this.overlay) {
        return this.showScroll();
      }

      this.overlay.className = this.overlay.className.replace('overlay--active', '');

      setTimeout(function () {
        // IE11 Fix
        try {
          _this2.overlay.parentNode.removeChild(_this2.overlay);
          _this2.overlay = null;
          _this2.showScroll();
        } catch (e) {}
      }, this.overlayTransitionDuration);
    },
    hideScroll: function hideScroll() {
      // Check documentElement first for IE11
      // this.overlayOffset = document.documentElement &&
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop

      // document.body.style.top = `-${this.overlayOffset}px`
      // document.body.style.position = 'fixed'
      document.documentElement.style.overflow = 'hidden';
    },
    showScroll: function showScroll() {
      document.documentElement.removeAttribute('style');

      // if (!this.overlayOffset) return
      // document.body.scrollTop = this.overlayOffset
      // document.documentElement.scrollTop = this.overlayOffset
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'list',

  provide: function provide() {
    return {
      listClick: this.listClick,
      listClose: this.listClose
    };
  },


  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      uid: null,
      groups: []
    };
  },


  props: {
    dense: Boolean,
    subheader: Boolean,
    threeLine: Boolean,
    twoLine: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list': true,
        'list--two-line': this.twoLine,
        'list--dense': this.dense,
        'list--three-line': this.threeLine,
        'list--subheader': this.subheader,
        'theme--dark dark--bg': this.dark,
        'theme--light light--bg': this.light
      };
    }
  },

  watch: {
    uid: function uid() {
      var _this = this;

      this.$children.filter(function (i) {
        return i.$options._componentTag === 'v-list-group';
      }).forEach(function (i) {
        return i.toggle(_this.uid);
      });
    }
  },

  methods: {
    listClick: function listClick(uid, force) {
      if (force) {
        this.uid = uid;
      } else {
        this.uid = this.uid === uid ? null : uid;
      }
    },
    listClose: function listClose(uid) {
      if (this.uid === uid) {
        this.uid = null;
      }
    }
  },

  render: function render(h) {
    var data = {
      'class': this.classes,
      attrs: { 'data-uid': this._uid }
    };

    return h('ul', data, [this.$slots.default]);
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'list-tile',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  inheritAttrs: false,

  props: {
    activeClass: {
      type: String,
      default: 'list__tile--active'
    },
    avatar: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list__tile': true,
        'list__tile--active': this.isActive,
        'list__tile--avatar': this.avatar,
        'list__tile--disabled': this.disabled
      };
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    data.attrs = Object.assign({}, data.attrs, this.$attrs);

    return h('li', [h(tag, data, [this.$slots.default])]);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_activator__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_generators__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_position__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_utils__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_keyable__ = __webpack_require__(80);








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'menu',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_activator__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_generators__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_keyable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_position__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_utils__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      autoIndex: null,
      dimensions: {
        activator: {
          top: 0, left: 0,
          bottom: 0, right: 0,
          width: 0, height: 0,
          offsetTop: 0, scrollHeight: 0
        },
        content: {
          top: 0, left: 0,
          bottom: 0, right: 0,
          width: 0, height: 0,
          offsetTop: 0, scrollHeight: 0
        },
        list: null,
        selected: null
      },
      direction: { vert: 'bottom', horiz: 'right' },
      isContentActive: false,
      isBooted: false,
      maxHeightAutoDefault: '200px',
      resizeTimeout: {},
      startIndex: 3,
      stopIndex: 0,
      tileLength: 0,
      window: {},
      absoluteX: 0,
      absoluteY: 0,
      insideContent: false,
      hasJustFocused: false,
      focusedTimeout: {}
    };
  },


  props: {
    top: Boolean,
    left: Boolean,
    bottom: Boolean,
    right: Boolean,
    fullWidth: Boolean,
    auto: Boolean,
    offsetX: Boolean,
    offsetY: Boolean,
    disabled: Boolean,
    maxHeight: {
      default: 'auto'
    },
    nudgeTop: {
      type: Number,
      default: 0
    },
    nudgeBottom: {
      type: Number,
      default: 0
    },
    nudgeLeft: {
      type: Number,
      default: 0
    },
    nudgeRight: {
      type: Number,
      default: 0
    },
    nudgeWidth: {
      type: Number,
      default: 0
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnHover: {
      type: Boolean,
      default: false
    },
    lazy: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    activator: {
      default: null
    },
    origin: {
      type: String,
      default: 'top left'
    },
    transition: {
      type: String,
      default: 'menu-transition'
    },
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    positionAbsolutely: {
      type: Boolean,
      default: false
    },
    maxWidth: [Number, String],
    minWidth: [Number, String]
  },

  computed: {
    calculatedMinWidth: function calculatedMinWidth() {
      var minWidth = parseInt(this.minWidth) || this.dimensions.activator.width + this.nudgeWidth + (this.auto ? 16 : 0);

      if (!this.maxWidth) return minWidth;

      var maxWidth = parseInt(this.maxWidth);

      return maxWidth < minWidth ? maxWidth : minWidth;
    },
    styles: function styles() {
      return {
        maxHeight: this.auto ? '200px' : isNaN(this.maxHeight) ? this.maxHeight : this.maxHeight + 'px',
        minWidth: this.calculatedMinWidth + 'px',
        maxWidth: parseInt(this.maxWidth) + 'px',
        top: this.calcTop() + 'px',
        left: this.calcLeft() + 'px'
      };
    },
    hasActivator: function hasActivator() {
      return !!this.$slots.activator || this.activator;
    }
  },

  watch: {
    activator: function activator(newActivator, oldActivator) {
      this.removeActivatorEvents(oldActivator);
      this.addActivatorEvents(newActivator);
    },
    disabled: function disabled(val) {
      val && this.deactivate();
    },
    hasJustFocused: function hasJustFocused(val) {
      var _this = this;

      if (!val) return;

      clearTimeout(this.focusedTimeout);
      this.focusedTimeout = setTimeout(function () {
        return _this.hasJustFocused = false;
      }, 100);
    },
    isActive: function isActive(val) {
      if (this.disabled) return;

      val && this.activate() || this.deactivate();
    },
    windowResizeHandler: function windowResizeHandler() {
      this.isBooted = false;
    }
  },

  mounted: function mounted() {
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize, { passive: true });
    window.removeEventListener('resize', this.windowResizeHandler);
  },


  methods: {
    activate: function activate() {
      if (typeof window === 'undefined') return;
      this.isBooted = true;
      this.insideContent = true;
      this.getTiles();
      this.updateDimensions();
      requestAnimationFrame(this.startTransition);
    },
    deactivate: function deactivate() {
      this.isContentActive = false;
    },
    onResize: function onResize() {
      clearTimeout(this.resizeTimeout);
      if (!this.isActive) return;
      this.resizeTimeout = setTimeout(this.updateDimensions, 200);
    },
    startTransition: function startTransition() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.isContentActive = true;
      });
      requestAnimationFrame(this.calculateScroll);
    }
  },

  render: function render(h) {
    var _this3 = this;

    var directives = !this.openOnHover ? [{
      name: 'click-outside',
      value: function value() {
        return _this3.closeOnClick;
      }
    }] : [];

    var data = {
      'class': 'menu',
      style: {
        display: this.fullWidth ? 'block' : 'inline-block'
      },
      directives: directives,
      on: {
        keydown: function keydown(e) {
          if (e.keyCode === 27) _this3.isActive = false;else _this3.changeListIndex(e);
        }
      }
    };

    return h('div', data, [this.genActivator(), this.genTransition()]);
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      debounceTimeout: null
    };
  },


  methods: {
    debouncedOnResize: function debouncedOnResize() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(this.onResize, 50);
    }
  },

  mounted: function mounted() {
    window.addEventListener('resize', this.debouncedOnResize, { passive: true });
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.debouncedOnResize, { passive: true });
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    noDataText: {
      type: String,
      default: 'No data available'
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__["a" /* default */]],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    inputValue: null,
    falseValue: null,
    trueValue: null
  },

  computed: {
    isActive: function isActive() {
      if (Array.isArray(this.inputValue)) {
        return this.inputValue.indexOf(this.value) !== -1;
      }

      if (!this.trueValue || !this.falseValue) {
        return this.value ? this.value === this.inputValue : Boolean(this.inputValue);
      }

      return this.inputValue === this.trueValue;
    }
  },

  watch: {
    indeterminate: function indeterminate(val) {
      this.inputDeterminate = val;
    }
  },

  methods: {
    genLabel: function genLabel() {
      return this.$createElement('label', { on: { click: this.toggle } }, this.label);
    },
    toggle: function toggle() {
      if (this.disabled) {
        return;
      }

      var input = this.inputValue;
      if (Array.isArray(input)) {
        input = input.slice();
        var i = input.indexOf(this.value);

        if (i === -1) {
          input.push(this.value);
        } else {
          input.splice(i, 1);
        }
      } else if (this.trueValue || this.falseValue) {
        input = input === this.trueValue ? this.falseValue : this.trueValue;
      } else if (this.value) {
        input = this.value === this.inputValue ? null : this.value;
      } else {
        input = !input;
      }

      this.$emit('change', input);
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    color: String
  },
  methods: {
    addColorClassChecks: function addColorClassChecks(classes) {
      var parts = this.color ? this.color.trim().split(' ') : [''];
      var color = parts[0] + '--text';
      if (parts.length > 1) color += ' text--' + parts[1];
      classes[color] = !!this.color;
      return classes;
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function style(el, value) {
  ['transform', 'webkitTransform'].forEach(function (i) {
    el.style[i] = value;
  });
}

var ripple = {
  show: function show(e, el, _ref) {
    var _ref$value = _ref.value,
        value = _ref$value === undefined ? {} : _ref$value;

    var container = document.createElement('span');
    var animation = document.createElement('span');

    container.appendChild(animation);
    container.className = 'ripple__container';

    if (value.class) {
      container.className += ' ' + value.class;
    }

    var size = el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight;
    animation.className = 'ripple__animation';
    animation.style.width = size * (value.center ? 1 : 2) + 'px';
    animation.style.height = animation.style.width;

    el.appendChild(container);
    var computed = window.getComputedStyle(el);
    if (computed.position !== 'absolute') el.style.position = 'relative';

    var offset = el.getBoundingClientRect();
    var x = value.center ? '50%' : e.clientX - offset.left + 'px';
    var y = value.center ? '50%' : e.clientY - offset.top + 'px';

    animation.classList.add('ripple__animation--enter');
    animation.classList.add('ripple__animation--visible');
    style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ') scale3d(0.01,0.01,0.01)');
    animation.dataset.activated = Date.now();

    setTimeout(function () {
      animation.classList.remove('ripple__animation--enter');
      style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ')  scale3d(0.99,0.99,0.99)');
    }, 0);
  },

  hide: function hide(el) {
    var ripples = el.getElementsByClassName('ripple__animation');

    if (ripples.length === 0) return;
    var animation = ripples[ripples.length - 1];
    var diff = Date.now() - Number(animation.dataset.activated);
    var delay = 400 - diff;

    delay = delay < 0 ? 0 : delay;

    setTimeout(function () {
      animation.classList.remove('ripple__animation--visible');

      setTimeout(function () {
        // Need to figure out a new way to do this
        try {
          if (ripples.length < 1) el.style.position = null;
          animation.parentNode && el.removeChild(animation.parentNode);
        } catch (e) {}
      }, 300);
    }, delay);
  }
};

function directive(el, binding, v) {
  if (binding.value === false) return;

  if ('ontouchstart' in window) {
    el.addEventListener('touchend', function () {
      return ripple.hide(el);
    }, false);
    el.addEventListener('touchcancel', function () {
      return ripple.hide(el);
    }, false);
  }

  el.addEventListener('mousedown', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.addEventListener('mouseup', function () {
    return ripple.hide(el);
  }, false);
  el.addEventListener('mouseleave', function () {
    return ripple.hide(el);
  }, false);
}

function unbind(el, binding) {
  el.removeEventListener('touchstart', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.removeEventListener('mousedown', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.removeEventListener('touchend', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('touchcancel', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('mouseup', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('mouseleave', function () {
    return ripple.hide(el);
  }, false);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: directive,
  unbind: unbind
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_load__ = __webpack_require__(132);
__webpack_require__(24);





function plugin(Vue) {
  Object.keys(__WEBPACK_IMPORTED_MODULE_0__components__["a" /* default */]).forEach(function (key) {
    Vue.component('V' + key, __WEBPACK_IMPORTED_MODULE_0__components__["a" /* default */][key]);
  });

  Object.keys(__WEBPACK_IMPORTED_MODULE_1__directives__["a" /* default */]).forEach(function (key) {
    Vue.directive(key, __WEBPACK_IMPORTED_MODULE_1__directives__["a" /* default */][key]);
  });

  Vue.prototype.$vuetify = {
    load: __WEBPACK_IMPORTED_MODULE_2__util_load__["a" /* default */]
  };
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alerts__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatars__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bottom_nav__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumbs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buttons__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carousel__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chips__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pickers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialogs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dividers__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__expansion_panel__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__grid__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lists__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menus__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__navigation_drawer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__toolbar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pagination__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__parallax__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__progress__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__selects__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__selection_controls__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sliders__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__subheaders__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__steppers__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tables__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tabs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__text_fields__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__transitions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__snackbars__ = __webpack_require__(125);


































/* harmony default export */ __webpack_exports__["a"] = (Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__alerts__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__app__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__avatars__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__bottom_nav__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__breadcrumbs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__buttons__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__cards__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__carousel__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__chips__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__pickers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__dialogs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__dividers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__expansion_panel__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__footer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__icons__["a" /* default */], __WEBPACK_IMPORTED_MODULE_16__lists__["a" /* default */], __WEBPACK_IMPORTED_MODULE_17__menus__["a" /* default */], __WEBPACK_IMPORTED_MODULE_18__navigation_drawer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_19__toolbar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_20__pagination__["a" /* default */], __WEBPACK_IMPORTED_MODULE_21__parallax__["a" /* default */], __WEBPACK_IMPORTED_MODULE_22__progress__["a" /* default */], __WEBPACK_IMPORTED_MODULE_23__selects__["a" /* default */], __WEBPACK_IMPORTED_MODULE_24__selection_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_25__sliders__["a" /* default */], __WEBPACK_IMPORTED_MODULE_26__subheaders__["a" /* default */], __WEBPACK_IMPORTED_MODULE_27__steppers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_28__tables__["a" /* default */], __WEBPACK_IMPORTED_MODULE_29__tabs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_30__text_fields__["a" /* default */], __WEBPACK_IMPORTED_MODULE_31__transitions__["b" /* default */], __WEBPACK_IMPORTED_MODULE_32__snackbars__["a" /* default */]));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = ({
  Alert: __WEBPACK_IMPORTED_MODULE_0__Alert__["a" /* default */]
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_transitionable__ = __webpack_require__(28);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'alert',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_transitionable__["a" /* default */]],

  props: {
    dismissible: Boolean,
    hideIcon: Boolean,
    icon: String
  },

  computed: {
    classes: function classes() {
      return {
        'alert': true,
        'alert--dismissible': this.dismissible,
        'error': this.error,
        'info': this.info,
        'primary': this.primary,
        'secondary': this.secondary,
        'success': this.success,
        'warning': this.warning
      };
    },
    mdIcon: function mdIcon() {
      switch (true) {
        case !!this.icon:
          return this.icon;
        case this.error:
          return 'warning';
        case this.info:
          return 'info';
        case this.success:
          return 'check_circle';
        case this.warning:
          return 'priority_high';
      }
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [h('div', this.$slots.default)];

    if (!this.hideIcon && this.mdIcon) {
      children.unshift(h('v-icon', {
        'class': 'alert__icon',
        props: { large: true }
      }, this.mdIcon));
    }

    if (this.dismissible) {
      var close = h('a', {
        'class': 'alert__dismissible',
        domProps: { href: 'javascript:;' },
        on: { click: function click() {
            return _this.$emit('input', false);
          } }
      }, [h('v-icon', {
        props: {
          right: true,
          large: true
        }
      }, 'cancel')]);

      children.push(close);
    }

    var alert = h('div', {
      'class': this.classes,
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    }, children);

    if (!this.transition) return alert;

    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [alert]);
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    mode: String,
    origin: String,
    transition: String
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = ({
  App: __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    fixedFooter: Boolean,
    footer: Boolean,
    id: {
      type: String,
      default: 'app'
    },
    toolbar: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    data.staticClass = ('application ' + (data.staticClass || '')).trim();
    data.staticClass += ' application--' + (props.dark ? 'dark' : 'light');

    props.footer && (data.staticClass += ' application--footer');
    props.fixedFooter && (data.staticClass += ' application--footer-fixed');
    props.toolbar && (data.staticClass += ' application--toolbar');

    data.attrs = { 'data-app': true };
    data.domProps = { id: props.id };

    return h('div', data, children);
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Avatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


var Avatar = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('avatar');

/* harmony default export */ __webpack_exports__["a"] = ({
  Avatar: Avatar
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BottomNav__ = __webpack_require__(33);


/* harmony default export */ __webpack_exports__["a"] = ({
  BottomNav: __WEBPACK_IMPORTED_MODULE_0__BottomNav__["a" /* default */]
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  props: {
    absolute: Boolean,
    shift: Boolean,
    value: { required: false }
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('bottom-nav ' + (data.staticClass || '')).trim();

    if (props.absolute) data.staticClass += ' bottom-nav--absolute';
    if (props.shift) data.staticClass += ' bottom-nav--shift';
    if (props.value) data.staticClass += ' bottom-nav--active';

    return h('div', data, children);
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumbs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbsItem__ = __webpack_require__(36);



/* harmony default export */ __webpack_exports__["a"] = ({
  Breadcrumbs: __WEBPACK_IMPORTED_MODULE_0__Breadcrumbs__["a" /* default */],
  BreadcrumbsItem: __WEBPACK_IMPORTED_MODULE_1__BreadcrumbsItem__["a" /* default */]
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'breadcrumbs',

  provide: function provide() {
    return {
      divider: this.divider
    };
  },


  props: {
    divider: {
      type: String,
      default: '/'
    },
    icons: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'breadcrumbs': true,
        'breadcrumbs--with-icons': this.icons
      };
    }
  },

  render: function render(h) {
    return h('ul', {
      'class': this.classes,
      props: { items: this.items }
    }, this.$slots.default);
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'breadcrumbs-item',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */]],

  inject: ['divider'],

  props: {
    activeClass: {
      type: String,
      default: 'breadcrumbs__item--active'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'breadcrumbs__item': true,
        'breadcrumbs__item--disabled': this.disabled
      };
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    return h('li', {
      attrs: { 'data-divider': this.divider }
    }, [h(tag, data, this.$slots.default)]);
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonToggle_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonToggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ButtonToggle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpeedDial__ = __webpack_require__(42);




/* harmony default export */ __webpack_exports__["a"] = ({
  Btn: __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
  BtnToggle: __WEBPACK_IMPORTED_MODULE_1__ButtonToggle_vue___default.a,
  SpeedDial: __WEBPACK_IMPORTED_MODULE_2__SpeedDial__["a" /* default */]
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'button-toggle',

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    multiple: Boolean,
    mandatory: Boolean,
    inputValue: {
      required: false
    }
  },

  computed: {
    classes: function classes() {
      return {
        'btn-toggle--selected': this.inputValue && !this.multiple || this.inputValue && this.inputValue.length > 0
      };
    }
  },

  methods: {
    isSelected: function isSelected(item) {
      if (!this.multiple) {
        return this.inputValue === item.value;
      }

      return this.inputValue.includes(item.value);
    },
    updateValue: function updateValue(item) {
      if (!this.multiple) {
        if (this.mandatory && this.inputValue === item.value) return;
        return this.$emit('change', this.inputValue === item.value ? null : item.value);
      }

      var items = this.inputValue.slice();

      var i = items.indexOf(item.value);
      if (i > -1) {
        items.length >= 1 && !this.mandatory && items.splice(i, 1);
      } else {
        items.push(item.value);
      }

      this.$emit('change', items);
    }
  }
});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-toggle",
    class: _vm.classes
  }, _vm._l((_vm.items), function(item, index) {
    return _c('v-btn', {
      key: index,
      attrs: {
        "data-selected": _vm.isSelected(item),
        "data-index": index,
        "data-only-child": _vm.isSelected(item) && (!_vm.multiple || _vm.inputValue.length === 1),
        "flat": "flat"
      },
      nativeOn: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.updateValue(item)
        }
      }
    }, [(item.text) ? _c('span', {
      domProps: {
        "textContent": _vm._s(item.text)
      }
    }) : _vm._e(), (item.icon) ? _c('v-icon', [_vm._v(_vm._s(item.icon))]) : _vm._e()], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__ = __webpack_require__(9);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'speed-dial',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  props: {
    direction: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    hover: Boolean,
    transition: {
      type: String,
      default: 'scale-transition'
    }
  },

  computed: {
    classes: function classes() {
      return _defineProperty({
        'speed-dial': true,
        'speed-dial--top': this.top,
        'speed-dial--right': this.right,
        'speed-dial--bottom': this.bottom,
        'speed-dial--left': this.left,
        'speed-dial--absolute': this.absolute,
        'speed-dial--fixed': this.fixed
      }, 'speed-dial--direction-' + this.direction, true);
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [];
    var data = {
      'class': this.classes,
      directives: [{
        name: 'click-outside'
      }],
      on: {
        click: function click() {
          return _this.isActive = !_this.isActive;
        }
      }
    };

    if (this.hover) {
      data.on.mouseenter = function () {
        return _this.isActive = true;
      };
      data.on.mouseleave = function () {
        return _this.isActive = false;
      };
    }

    if (this.isActive) {
      children = this.$slots.default.map(function (b, i) {
        b.key = i;

        return b;
      });
    }

    var list = h('transition-group', {
      'class': 'speed-dial__list',
      props: {
        name: this.transition,
        tag: 'div'
      }
    }, children);

    return h('div', data, [this.$slots.activator, list]);
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardMedia__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CardTitle__ = __webpack_require__(45);





var CardActions = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('card__actions');
var CardText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('card__text');

/* harmony default export */ __webpack_exports__["a"] = ({
  Card: __WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */],
  CardActions: CardActions,
  CardMedia: __WEBPACK_IMPORTED_MODULE_2__CardMedia__["a" /* default */],
  CardText: CardText,
  CardTitle: __WEBPACK_IMPORTED_MODULE_3__CardTitle__["a" /* default */]
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'card-media',

  props: {
    contain: Boolean,
    height: {
      type: [Number, String],
      default: 'auto'
    },
    src: {
      type: String
    }
  },

  render: function render(h) {
    var data = {
      'class': 'card__media',
      style: {
        height: !isNaN(this.height) ? this.height + 'px' : this.height
      },
      on: this.$listeners
    };

    var children = [];

    if (this.src) {
      children.push(h('div', {
        'class': 'card__media__background',
        style: {
          background: 'url(' + this.src + ') center center / ' + (this.contain ? 'contain' : 'cover') + ' no-repeat'
        }
      }));
    }

    children.push(h('div', {
      'class': 'card__media__content'
    }, this.$slots.default));

    return h('div', data, children);
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  props: {
    primaryTitle: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('card__title ' + (data.staticClass || '')).trim();

    if (props.primaryTitle) data.staticClass += ' card__title--primary';

    return h('div', data, children);
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Carousel__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselItem__ = __webpack_require__(48);



/* harmony default export */ __webpack_exports__["a"] = ({
  Carousel: __WEBPACK_IMPORTED_MODULE_0__Carousel__["a" /* default */],
  CarouselItem: __WEBPACK_IMPORTED_MODULE_1__CarouselItem__["a" /* default */]
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_bootable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_buttons_Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_icons_Icon__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'carousel',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_bootable__["a" /* default */]],

  data: function data() {
    return {
      current: null,
      items: [],
      slideInterval: {},
      reverse: false
    };
  },


  props: {
    cycle: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'fiber_manual_record'
    },
    interval: {
      type: Number,
      default: 6000
    }
  },

  computed: {
    defaultState: function defaultState() {
      return {
        current: null,
        reverse: false
      };
    }
  },

  watch: {
    current: function current() {
      var _this = this;

      // Evaluate items when current changes to account for
      // dynamic changing of children
      this.items = this.$children.filter(function (i) {
        return i.$el.classList && i.$el.classList.contains('carousel__item');
      });

      this.items.forEach(function (i) {
        return i.open(_this.items[_this.current]._uid, _this.reverse);
      });

      !this.isBooted && this.cycle && this.restartInterval();
      this.isBooted = true;
    },
    cycle: function cycle(val) {
      val && this.restartInterval() || clearInterval(this.slideInterval);
    }
  },

  mounted: function mounted() {
    this.init();
  },


  methods: {
    genControls: function genControls() {
      return this.$createElement('div', {
        staticClass: 'carousel__controls'
      }, this.genItems());
    },
    genIcon: function genIcon(direction, fn) {
      return this.$createElement('div', {
        staticClass: 'carousel__' + direction
      }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_1__components_buttons_Button__["a" /* default */], {
        props: {
          icon: true,
          dark: true
        },
        on: { click: fn }
      }, [this.$createElement(__WEBPACK_IMPORTED_MODULE_2__components_icons_Icon__["a" /* default */], 'chevron_' + direction)])]);
    },
    genItems: function genItems() {
      var _this2 = this;

      return this.items.map(function (item, index) {
        return _this2.$createElement(__WEBPACK_IMPORTED_MODULE_1__components_buttons_Button__["a" /* default */], {
          class: {
            'carousel__controls__item': true,
            'carousel__controls__item--active': index === _this2.current
          },
          props: {
            icon: true,
            dark: true
          },
          key: index,
          on: { click: _this2.select.bind(_this2, index) }
        }, [_this2.$createElement(__WEBPACK_IMPORTED_MODULE_2__components_icons_Icon__["a" /* default */], _this2.icon)]);
      });
    },
    restartInterval: function restartInterval() {
      clearInterval(this.slideInterval);
      this.$nextTick(this.startInterval);
    },
    init: function init() {
      this.current = 0;
    },
    next: function next() {
      this.reverse = false;

      if (this.current + 1 === this.items.length) {
        return this.current = 0;
      }

      this.current++;
    },
    prev: function prev() {
      this.reverse = true;

      if (this.current - 1 < 0) {
        return this.current = this.items.length - 1;
      }

      this.current--;
    },
    select: function select(index) {
      this.reverse = index < this.current;
      this.current = index;
    },
    startInterval: function startInterval() {
      this.slideInterval = setInterval(this.next, this.interval);
    }
  },

  render: function render(h) {
    return h('div', {
      staticClass: 'carousel',
      directives: [{
        name: 'touch',
        value: {
          left: this.next,
          right: this.prev
        }
      }]
    }, [this.genIcon('left', this.prev), this.genIcon('right', this.next), this.genControls(), this.$slots.default]);
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'carousel-item',

  data: function data() {
    return {
      active: false,
      reverse: false
    };
  },


  props: {
    src: {
      type: String,
      required: true
    },

    transition: {
      type: String,
      default: 'tab-transition'
    },

    reverseTransition: {
      type: String,
      default: 'tab-reverse-transition'
    }
  },

  computed: {
    computedTransition: function computedTransition() {
      return this.reverse ? this.reverseTransition : this.transition;
    },
    styles: function styles() {
      return {
        backgroundImage: 'url(' + this.src + ')'
      };
    }
  },

  methods: {
    open: function open(id, reverse) {
      this.active = this._uid === id;
      this.reverse = reverse;
    }
  },

  render: function render(h) {
    var item = h('div', {
      class: {
        'carousel__item': true,
        'reverse': this.reverse
      },
      style: this.styles,
      on: this.$listeners,
      directives: [{
        name: 'show',
        value: this.active
      }]
    }, [this.$slots.default]);

    return h('transition', { props: { name: this.computedTransition } }, [item]);
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chip__ = __webpack_require__(50);


/* harmony default export */ __webpack_exports__["a"] = ({
  Chip: __WEBPACK_IMPORTED_MODULE_0__Chip__["a" /* default */]
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'chip',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  props: {
    close: Boolean,
    label: Boolean,
    outline: Boolean,
    small: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'chip': true,
        'chip--label': this.label,
        'chip--outline': this.outline,
        'chip--small': this.small,
        'chip--removable': this.close
      };
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [this.$slots.default];
    var data = {
      'class': this.classes,
      attrs: { tabindex: -1 },
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    };

    if (this.close) {
      children.push(h('a', {
        'class': 'chip__close',
        domProps: { href: 'javascript:;' },
        on: {
          click: function click(e) {
            e.stopPropagation();

            _this.$emit('input', false);
          }
        }
      }, [h('v-icon', { props: { right: true } }, 'cancel')]));
    }

    return h('span', data, children);
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimePicker__ = __webpack_require__(57);



/* harmony default export */ __webpack_exports__["a"] = ({
  DatePicker: __WEBPACK_IMPORTED_MODULE_0__DatePicker__["a" /* default */],
  TimePicker: __WEBPACK_IMPORTED_MODULE_1__TimePicker__["a" /* default */]
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_date_title__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_date_header__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_date_table__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_date_years__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_picker__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helpers__ = __webpack_require__(0);







var defaultDateFormat = function defaultDateFormat(val) {
  return new Date(val).toISOString().substr(0, 10);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'date-picker',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_date_title__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_date_header__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_date_table__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_date_years__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_picker__["a" /* default */]],

  data: function data() {
    return {
      tableDate: new Date(),
      originalDate: this.value,
      currentDay: null,
      currentMonth: null,
      currentYear: null,
      isSelected: false,
      isReversing: false,
      narrowDays: []
    };
  },


  props: {
    locale: {
      type: String,
      default: 'en-us'
    },
    dateFormat: {
      type: Function,
      default: defaultDateFormat
    },
    titleDateFormat: {
      type: Object,
      default: function _default() {
        return { weekday: 'short', month: 'short', day: 'numeric' };
      }
    },
    headerDateFormat: {
      type: Object,
      default: function _default() {
        return { month: 'long', year: 'numeric' };
      }
    },
    formattedValue: {
      required: false
    },
    allowedDates: {
      type: [Array, Object, Function],
      default: function _default() {
        return null;
      }
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    firstAllowedDate: function firstAllowedDate() {
      var date = new Date();
      date.setHours(12, 0, 0, 0);

      if (this.allowedDates) {
        var millisecondOffset = 1 * 24 * 60 * 60 * 1000;
        var valid = new Date(date);
        for (var i = 0; i < 31; i++) {
          if (this.isAllowed(valid)) return valid;

          valid.setTime(valid.getTime() + millisecondOffset);
        }
      }

      return date;
    },

    inputDate: {
      get: function get() {
        if (!this.value) return this.firstAllowedDate;
        if (this.value instanceof Date) return this.value;
        if (!isNaN(this.value) || typeof this.value === 'string' && this.value.indexOf(':') !== -1) return new Date(this.value);

        return new Date(this.value + 'T12:00:00');
      },
      set: function set(val) {
        this.$emit('input', val ? defaultDateFormat(val) : this.originalDate);
        this.$emit('update:formattedValue', val ? this.dateFormat(val) : this.dateFormat(this.originalDate));
      }
    },
    day: function day() {
      return this.inputDate.getDate();
    },
    month: function month() {
      return this.inputDate.getMonth();
    },
    year: function year() {
      return this.inputDate.getFullYear();
    },
    tableMonth: function tableMonth() {
      return this.tableDate.getMonth();
    },
    tableYear: function tableYear() {
      return this.tableDate.getFullYear();
    },
    computedTransition: function computedTransition() {
      return this.isReversing ? 'v-tab-reverse-transition' : 'v-tab-transition';
    }
  },

  watch: {
    isSelected: function isSelected(val) {
      var _this = this;

      val && this.$nextTick(function () {
        _this.$refs.years.scrollTop = _this.$refs.years.scrollHeight / 2 - 125;
      });
    },
    tableDate: function tableDate(val, prev) {
      this.isReversing = val < prev;
    },
    value: function value(val) {
      if (val) this.tableDate = this.inputDate;
    }
  },

  methods: {
    save: function save() {
      if (this.originalDate) {
        this.originalDate = this.value;
      } else {
        this.originalDate = this.inputDate;
      }

      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    cancel: function cancel() {
      this.inputDate = this.originalDate;
      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    isAllowed: function isAllowed(date) {
      if (!this.allowedDates) return true;

      if (Array.isArray(this.allowedDates)) {
        return !!this.allowedDates.find(function (allowedDate) {
          var d = new Date(allowedDate);
          d.setHours(12, 0, 0, 0);

          return d - date === 0;
        });
      } else if (this.allowedDates instanceof Function) {
        return this.allowedDates(date);
      } else if (this.allowedDates instanceof Object) {
        var min = new Date(this.allowedDates.min);
        min.setHours(12, 0, 0, 0);
        var max = new Date(this.allowedDates.max);
        max.setHours(12, 0, 0, 0);

        return date >= min && date <= max;
      }

      return true;
    }
  },

  created: function created() {
    var _this2 = this;

    var date = new Date();
    date.setDate(date.getDate() - date.getDay() + parseInt(this.firstDayOfWeek));

    Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["c" /* createRange */])(7).forEach(function () {
      var narrow = date.toLocaleString(_this2.locale, { weekday: 'narrow' });
      _this2.narrowDays.push(narrow);

      date.setDate(date.getDate() + 1);
    });
  },
  mounted: function mounted() {
    this.currentDay = this.tableDate.getDate();
    this.currentMonth = this.tableDate.getMonth();
    this.currentYear = this.tableDate.getFullYear();
    this.tableDate = this.inputDate;
  },
  render: function render(h) {
    var children = [];

    !this.noTitle && children.push(this.genTitle());

    if (!this.isSelected) {
      var bodyChildren = [];

      bodyChildren.push(this.genHeader());
      bodyChildren.push(this.genTable());

      children.push(h('div', {
        'class': 'picker__body'
      }, bodyChildren));
    } else {
      children.push(this.genYears());
    }

    this.$scopedSlots.default && children.push(this.genSlot());

    return h('v-card', {
      'class': {
        'picker picker--date': true,
        'picker--landscape': this.landscape,
        'picker--dark': this.dark,
        'picker--light': this.light && !this.dark
      }
    }, children);
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTitle: function genTitle() {
      var _this = this;

      var date = new Date(this.year, this.month, this.day).toLocaleString(this.locale, this.titleDateFormat);
      if (this.landscape) {
        if (date.indexOf(',') > -1) date = date.replace(',', ',<br>');else if (date.indexOf(' ') > -1) date = date.replace(' ', '<br>');
      }

      var text = this.$createElement('transition', {
        props: {
          name: 'slide-x-transition',
          mode: 'out-in'
        }
      }, [this.$createElement('div', {
        domProps: { innerHTML: date },
        key: date
      })]);

      return this.$createElement('div', {
        'class': 'picker__title'
      }, [this.$createElement('div', {
        'class': {
          'picker--date__title-year': true,
          'active': this.isSelected
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this.isSelected = true;
          }
        }
      }, this.year), this.$createElement('div', {
        'class': {
          'picker--date__title-date': true,
          'active': !this.isSelected
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this.isSelected = false;
          }
        }
      }, [text])]);
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genHeader: function genHeader() {
      return this.$createElement('div', {
        'class': 'picker--date__header'
      }, [this.genSelector()]);
    },
    genSelector: function genSelector() {
      var _this = this;

      var genBtn = function genBtn(change, children) {
        return _this.$createElement('v-btn', {
          props: {
            dark: _this.dark,
            icon: true
          },
          nativeOn: {
            click: function click(e) {
              e.stopPropagation();
              _this.tableDate = new Date(_this.tableYear, change);
            }
          }
        }, children);
      };

      return this.$createElement('div', {
        'class': 'picker--date__header-selector'
      }, [genBtn(this.tableMonth - 1, [this.$createElement('v-icon', 'chevron_left')]), this.$createElement('div', {
        'class': 'picker--date__header-selector-date'
      }, [this.$createElement(this.computedTransition, [this.$createElement('strong', {
        key: this.tableMonth
      }, new Date(this.tableYear, this.tableMonth).toLocaleString(this.locale, this.headerDateFormat))])]), genBtn(this.tableMonth + 1, [this.$createElement('v-icon', 'chevron_right')])]);
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTable: function genTable() {
      var _this = this;

      var children = [];
      var data = {
        'class': 'picker--date__table',
        directives: [{
          name: 'touch',
          value: {
            left: function left() {
              return _this.tableDate = new Date(_this.tableYear, _this.tableMonth + 1);
            },
            right: function right() {
              return _this.tableDate = new Date(_this.tableYear, _this.tableMonth - 1);
            }
          }
        }]
      };

      if (this.scrollable) {
        data.on = {
          wheel: function wheel(e) {
            e.preventDefault();

            var month = _this.tableMonth;
            var year = _this.tableYear;
            var next = e.deltaY < 0;

            if (next) month++;else month--;

            _this.tableDate = new Date(year, month);
          }
        };
      }

      children.push(this.$createElement('table', {
        key: this.tableMonth
      }, [this.genTHead(), this.genTBody()]));

      return this.$createElement('div', data, [this.$createElement(this.computedTransition, children)]);
    },
    genTHead: function genTHead() {
      var _this2 = this;

      return this.$createElement('thead', {}, this.genTR(this.narrowDays.map(function (day) {
        return _this2.$createElement('th', day);
      })));
    },
    genTBody: function genTBody() {
      var _this3 = this;

      var children = [];
      var rows = [];
      var length = new Date(this.tableYear, this.tableMonth + 1, 0).getDate();

      var day = new Date(this.tableYear, this.tableMonth).getDay() - parseInt(this.firstDayOfWeek);

      for (var i = 0; i < day; i++) {
        rows.push(this.$createElement('td'));
      }

      var _loop = function _loop(_i) {
        rows.push(_this3.$createElement('td', [_this3.$createElement('button', {
          'class': {
            'btn btn--floating btn--small btn--flat': true,
            'btn--active': _this3.isActive(_i),
            'btn--current': _this3.isCurrent(_i),
            'btn--light': _this3.dark,
            'btn--disabled': !_this3.isAllowed(new Date(_this3.tableYear, _this3.tableMonth, _i, 12, 0, 0, 0))
          },
          attrs: {
            type: 'button'
          },
          domProps: {
            innerHTML: '<span class="btn__content">' + _i + '</span>'
          },
          on: {
            click: function click() {
              var day = _i < 10 ? '0' + _i : _i;
              var tableMonth = _this3.tableMonth + 1;
              tableMonth = tableMonth < 10 ? '0' + tableMonth : tableMonth;

              _this3.inputDate = _this3.tableYear + '-' + tableMonth + '-' + day + 'T12:00:00';
              _this3.$nextTick(function () {
                return _this3.autosave && _this3.save();
              });
            }
          }
        })]));

        if (rows.length % 7 === 0) {
          children.push(_this3.genTR(rows));
          rows = [];
        }
      };

      for (var _i = 1; _i <= length; _i++) {
        _loop(_i);
      }

      if (rows.length) {
        children.push(this.genTR(rows));
      }

      children.length < 6 && children.push(this.genTR([this.$createElement('td', { domProps: { innerHTML: '&nbsp;' } })]));

      return this.$createElement('tbody', children);
    },
    genTR: function genTR() {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return [this.$createElement('tr', data, children)];
    },
    isActive: function isActive(i) {
      return this.tableYear === this.year && this.tableMonth === this.month && this.day === i;
    },
    isCurrent: function isCurrent(i) {
      return this.currentYear === this.tableYear && this.currentMonth === this.tableMonth && this.currentDay === i;
    }
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genYears: function genYears() {
      return this.$createElement('ul', {
        'class': 'picker--date__years',
        ref: 'years'
      }, this.genYearItems());
    },
    genYearItems: function genYearItems() {
      var _this = this;

      var children = [];

      var _loop = function _loop(i, length) {
        children.push(_this.$createElement('li', {
          'class': {
            active: _this.year === i
          },
          on: {
            click: function click(e) {
              e.stopPropagation();

              var tableMonth = _this.tableMonth + 1;
              var day = _this.day;
              tableMonth = tableMonth < 10 ? '0' + tableMonth : tableMonth;
              day = day < 10 ? '0' + day : day;

              _this.inputDate = i + '-' + tableMonth + '-' + day;
              _this.isSelected = false;
            }
          }
        }, i));
      };

      for (var i = this.year + 100, length = this.year - 100; i > length; i--) {
        _loop(i, length);
      }
      return children;
    }
  }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_picker__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_time_title__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_time_body__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_helpers__ = __webpack_require__(0);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'time-picker',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_picker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_time_body__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_time_title__["a" /* default */]],

  data: function data() {
    return {
      isDragging: false,
      rotate: 0,
      originalTime: this.value,
      period: 'am',
      selectingHour: true,
      ranges: {
        hours: Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["c" /* createRange */])(24),
        minutes: Object(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["c" /* createRange */])(60)
      }
    };
  },


  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].includes(val);
      }
    },
    allowedHours: {
      type: [Array, Object, Function],
      default: function _default() {
        return null;
      }
    },
    allowedMinutes: {
      type: [Array, Object, Function],
      default: function _default() {
        return null;
      }
    }
  },

  computed: {
    is24hr: function is24hr() {
      return this.format !== 'ampm';
    },
    divider: function divider() {
      return this.selectingHour ? 12 : 60;
    },
    degrees: function degrees() {
      return this.degreesPerUnit * Math.PI / 180;
    },
    degreesPerUnit: function degreesPerUnit() {
      return 360 / this.divider;
    },

    inputTime: {
      get: function get() {
        if (this.value && !(this.value instanceof Date)) {
          if (!this.is24hr) {
            this.period = this.value.match(/pm/) ? 'pm' : 'am';
          }

          return this.value;
        }
        var value = new Date();

        if (this.value instanceof Date) {
          value = this.value;
        }

        var hour = value.getHours();
        var minute = value.getMinutes();
        this.period = hour > 12 ? 'pm' : 'am';

        if (!this.is24hr) {
          hour = hour > 12 ? hour - 12 : hour;
        }

        hour = this.firstAllowed('hour', hour);
        minute = this.firstAllowed('minute', minute);

        return hour + ':' + minute + this.period;
      },
      set: function set(val) {
        return this.$emit('input', val);
      }
    },
    timeArray: function timeArray() {
      return this.inputTime.replace(/(am|pm)/, '').split(':');
    },

    hour: {
      get: function get() {
        return parseInt(this.timeArray[0]);
      },
      set: function set(val) {
        if (!this.is24hr) {
          val = val > 12 ? val - 12 : val < 1 ? 12 : val;
        } else {
          val = val < 10 ? '0' + val : val > 23 ? '00' : val;
        }

        this.inputTime = val + ':' + this.minute + (!this.is24hr ? this.period : '');
      }
    },
    minute: {
      get: function get() {
        var minute = parseInt(this.timeArray[1]);

        return minute < 10 ? '0' + minute : minute > 59 ? '00' : minute;
      },
      set: function set(val) {
        val = val < 10 ? '0' + parseInt(val) : val > 59 ? '00' : val;
        var hour = this.hour;

        if (this.is24hr && hour < 10) {
          hour = '0' + hour;
        }

        this.inputTime = hour + ':' + val + (!this.is24hr ? this.period : '');
      }
    },
    clockHand: function clockHand() {
      if (this.selectingHour) return this.degreesPerUnit * this.hour;
      return this.degreesPerUnit * this.minute;
    },
    radius: function radius() {
      return this.clockSize / 2;
    },

    clockSize: {
      get: function get() {
        return this.size;
      },
      set: function set(val) {
        this.size = val;
      }
    },
    size: function size() {
      return this.landscape ? 250 : 280;
    }
  },

  watch: {
    period: function period(val) {
      var hour = !!this.allowedHours && this.selectingHour ? this.firstAllowed('hour', this.hour - 1) : this.hour;
      this.inputTime = hour + ':' + this.minute + val;
    },
    value: function value(val) {
      if (this.isSaving) {
        this.originalTime = this.inputTime;
        this.isSaving = false;
      }
    }
  },

  methods: {
    save: function save() {
      if (this.originalTime) {
        this.originalTime = this.value;
      } else {
        this.inputTime = this.inputTime;
        this.originalTime = this.inputTime;
      }

      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    cancel: function cancel() {
      this.inputTime = this.originalTime;
      if (this.$parent && this.$parent.isActive) this.$parent.isActive = false;
    },
    isAllowed: function isAllowed(type, value) {
      var allowed = this['allowed' + (type.charAt(0).toUpperCase() + type.slice(1)) + 's'];

      if (!allowed) return true;

      if (Array.isArray(allowed)) {
        return !!allowed.find(function (v) {
          return v === value;
        });
      } else if (allowed instanceof Function) {
        return allowed(value);
      } else if (allowed === Object(allowed)) {
        var range = type === 'minute' ? this.ranges.minutes : this.ranges.hours;
        var mod = type === 'minute' ? 60 : 24;

        if (allowed.min === String(allowed.min)) {
          allowed.min = this.convert12to24hr(allowed.min);
        }

        if (allowed.max === String(allowed.max)) {
          allowed.max = this.convert12to24hr(allowed.max);
        }

        var steps = allowed.max - allowed.min;
        value = type === 'hour' && !this.is24hr && this.period === 'pm' ? value + 12 : value;

        for (var i = 0; i <= steps; i++) {
          var index = (allowed.min + i) % mod;
          if (range[index] === value) return true;
        }

        return false;
      }

      return true;
    },
    convert12to24hr: function convert12to24hr(input) {
      input = input.toLowerCase();
      var pm = input.indexOf('pm') !== -1;
      var hour = parseInt(input.slice(0, input.indexOf(pm ? 'pm' : 'am')));

      return pm ? hour + 12 : hour;
    },
    generateRange: function generateRange(type, start) {
      var range = type === 'hour' ? this.ranges.hours : this.ranges.minutes;
      var offset = 1;

      if (type === 'hour' && !this.is24hr) {
        range = range.slice(1, 13);
        offset = 0;
      }

      return range.slice(start + offset, range.length).concat(range.slice(0, start + offset));
    },
    firstAllowed: function firstAllowed(type, value) {
      var _this = this;

      var allowed = this['allowed' + (type.charAt(0).toUpperCase() + type.slice(1)) + 's'];

      if (!allowed) return value;

      var range = this.generateRange(type, value);

      var first = range.find(function (v) {
        return _this.isAllowed(type, v);
      });

      return first || value;
    }
  },

  render: function render(h) {
    var children = [this.genBody()];

    !this.noTitle && children.unshift(this.genTitle());
    this.$scopedSlots.default && children.push(this.genSlot());

    return h('v-card', {
      'class': {
        'picker picker--time': true,
        'picker--landscape': this.landscape,
        'picker--dark': this.dark,
        'picker--light': this.light && !this.dark,
        'picker--time--hours': this.selectingHour
      }
    }, children);
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTitle: function genTitle() {
      var children = [this.genTime()];

      if (this.format === 'ampm') {
        children.push(this.genAMPM());
      }

      return this.$createElement('div', {
        'class': 'picker__title'
      }, children);
    },
    genTime: function genTime() {
      var _this = this;

      var hour = this.hour;

      if (this.is24hr && hour < 10) {
        hour = '0' + hour;
      }

      return this.$createElement('div', {
        'class': 'picker--time__title'
      }, [this.$createElement('span', {
        'class': { active: this.selectingHour },
        on: {
          click: function click() {
            return _this.selectingHour = true;
          }
        }
      }, hour), this.$createElement('span', {
        'class': { active: !this.selectingHour },
        on: {
          click: function click() {
            return _this.selectingHour = false;
          }
        }
      }, ':' + this.minute)]);
    },
    genAMPM: function genAMPM() {
      return this.$createElement('div', [this.genPeriod('am'), this.genPeriod('pm')]);
    },
    genPeriod: function genPeriod(period) {
      var _this2 = this;

      return this.$createElement('span', {
        'class': { active: this.period === period },
        on: { click: function click() {
            return _this2.period = period;
          } }
      }, period.toUpperCase());
    }
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      hasChanged: false
    };
  },

  methods: {
    genBody: function genBody() {
      var _this = this;

      var children = [this.genHand(this.selectingHour ? 'hour' : 'minute')];
      var data = {
        'class': 'picker--time__clock',
        on: {
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp,
          mouseleave: function mouseleave() {
            _this.isDragging && _this.onMouseUp();
          },
          touchstart: this.onMouseDown,
          touchend: this.onMouseUp,
          mousemove: this.onDragMove,
          touchmove: this.onDragMove
        },
        key: this.selectingHour ? 'hour' : 'minute',
        ref: 'clock'
      };

      this.selectingHour && children.push(this.genHours()) || children.push(this.genMinutes());

      if (this.scrollable) {
        data.on.wheel = function (e) {
          e.preventDefault();

          var diff = e.wheelDelta > 0 ? 1 : -1;
          var changing = _this.selectingHour ? 'changeHour' : 'changeMinute';

          _this[changing](diff);
        };
      }

      return this.$createElement('div', {
        'class': 'picker__body'
      }, [this.$createElement('v-fade-transition', {
        props: { mode: 'out-in' }
      }, [this.$createElement('div', data, children)])]);
    },
    genHand: function genHand(type) {
      return [this.$createElement('div', {
        'class': 'picker--time__clock-hand ' + type,
        style: {
          transform: 'rotate(' + this.clockHand + 'deg) ' + (this.selectingHour && this.is24hr && this.hour >= 12 ? 'scaleY(0.6)' : '')
        }
      })];
    },
    genHours: function genHours() {
      var hours = this.is24hr ? 24 : 12;
      var children = [];
      var start = 0;

      if (hours === 12) {
        hours++;
        start = 1;
      }

      for (var i = start; i < hours; i++) {
        children.push(this.$createElement('span', {
          'class': {
            'active': i === this.hour,
            'disabled': !this.isAllowed('hour', i)
          },
          style: this.getTransform(i),
          domProps: { innerHTML: '<span>' + i + '</span>' }
        }));
      }

      return children;
    },
    genMinutes: function genMinutes() {
      var children = [];

      for (var i = 0; i < 60; i = i + 5) {
        var num = i;

        if (num < 10) num = '0' + num;
        if (num === 60) num = '00';

        children.push(this.$createElement('span', {
          'class': {
            'active': num.toString() === this.minute.toString(),
            'disabled': !this.isAllowed('minute', i)
          },
          style: this.getTransform(i),
          domProps: { innerHTML: '<span>' + num + '</span>' }
        }));
      }

      return children;
    },
    getTransform: function getTransform(i) {
      var _getPosition = this.getPosition(i),
          x = _getPosition.x,
          y = _getPosition.y;

      return { transform: 'translate(' + x + 'px, ' + y + 'px)' };
    },
    getPosition: function getPosition(i) {
      var radiusPercentage = this.selectingHour && this.is24hr && i >= 12 ? 0.5 : 0.8;
      i = this.selectingHour && this.is24hr ? i % 12 : i;
      return {
        x: Math.round(Math.sin(i * this.degrees) * this.radius * radiusPercentage),
        y: Math.round(-Math.cos(i * this.degrees) * this.radius * radiusPercentage)
      };
    },
    changeHour: function changeHour(time) {
      var _this2 = this;

      var range = this.generateRange('hour', this.hour);

      time < 0 && (range = range.reverse().slice(1));
      this.hour = range.find(function (h) {
        return _this2.allowedHours ? _this2.isAllowed('hour', h) : true;
      });

      return true;
    },
    changeMinute: function changeMinute(time) {
      var _this3 = this;

      var current = Number(this.minute);
      var range = this.generateRange('minute', current);

      time < 0 && (range = range.reverse().slice(1));
      var minute = range.find(function (m) {
        return _this3.allowedMinutes ? _this3.isAllowed('minute', m) : true;
      });

      this.minute = minute < 10 ? '0' + minute : minute;

      return true;
    },
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();

      this.isDragging = true;
      this.onDragMove(e);
    },
    onMouseUp: function onMouseUp() {
      this.isDragging = false;
      !this.selectingHour && this.autosave && this.save();
      if (this.hasChanged) {
        this.selectingHour = false;
        this.hasChanged = false;
      }
    },
    onDragMove: function onDragMove(e) {
      e.preventDefault();
      if (!this.isDragging && e.type !== 'click') return;

      var rect = this.$refs.clock.getBoundingClientRect();
      var center = { x: rect.width / 2, y: 0 - rect.width / 2 };
      var clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      var clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      var coords = {
        y: rect.top - clientY,
        x: clientX - rect.left
      };

      var selecting = this.selectingHour ? 'hour' : 'minute';
      var value = Math.round(this.angle(center, coords) / this.degreesPerUnit);

      if (this.selectingHour && this.is24hr) {
        value = this.euclidean(center, coords) / this.radius < 0.65 ? value + 12 : value;

        // Necessary to fix edge case when selecting left part of 0 and 12
        value = this.angle(center, coords) >= 345 ? (value + 12) % 24 : value;
      }

      if (this.isAllowed(selecting, value)) {
        this[selecting] = value;
        this.hasChanged = true;
      }
    },
    euclidean: function euclidean(p0, p1) {
      var dx = Math.abs(p1.x - p0.x);
      var dy = Math.abs(p1.y - p0.y);

      return Math.sqrt(dx * dx + dy * dy);
    },
    angle: function angle(center, p1) {
      var p0 = {
        x: center.x,
        y: center.y + Math.sqrt(Math.abs(p1.x - center.x) * Math.abs(p1.x - center.x) + Math.abs(p1.y - center.y) * Math.abs(p1.y - center.y))
      };

      return Math.abs(2 * Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI);
    }
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog__ = __webpack_require__(61);


/* harmony default export */ __webpack_exports__["a"] = ({
  Dialog: __WEBPACK_IMPORTED_MODULE_0__Dialog__["a" /* default */]
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_bootable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'dialog',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__["a" /* default */]],

  props: {
    disabled: Boolean,
    persistent: Boolean,
    fullscreen: Boolean,
    fullWidth: Boolean,
    lazy: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    width: {
      type: [String, Number],
      default: 290
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    }
  },

  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, ('dialog ' + this.contentClass).trim(), true), _defineProperty(_ref, 'dialog--active', this.isActive), _defineProperty(_ref, 'dialog--persistent', this.persistent), _defineProperty(_ref, 'dialog--fullscreen', this.fullscreen), _defineProperty(_ref, 'dialog--stacked-actions', this.stackedActions && !this.fullscreen), _defineProperty(_ref, 'dialog--scrollable', this.scrollable), _ref;
    }
  },

  watch: {
    isActive: function isActive(val) {
      if (val) {
        !this.fullscreen && !this.hideOverlay && this.genOverlay();
        this.fullscreen && this.hideScroll();
      } else {
        if (!this.fullscreen) this.removeOverlay();else this.showScroll();
      }
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.isBooted = this.isActive;
    this.$vuetify.load(function () {
      return _this.isActive && _this.genOverlay();
    });
  },


  methods: {
    closeConditional: function closeConditional(e) {
      // close dialog if !persistent and clicked outside
      return !this.persistent;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var children = [];
    var data = {
      'class': this.classes,
      ref: 'dialog',
      directives: [{ name: 'click-outside', value: this.closeConditional }, { name: 'show', value: this.isActive }]
    };

    if (!this.fullscreen) {
      data.style = {
        width: isNaN(this.width) ? this.width : this.width + 'px'
      };
    }

    if (this.$slots.activator) {
      children.push(h('div', {
        'class': 'dialog__activator',
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (!_this2.disabled) _this2.isActive = !_this2.isActive;
          }
        }
      }, [this.$slots.activator]));
    }

    var dialog = h('transition', {
      props: {
        name: this.transition,
        origin: this.origin
      }
    }, [h('div', data, this.lazy && this.isBooted || !this.lazy ? this.$slots.default : null)]);

    children.push(h('div', {
      'class': 'dialog__content',
      ref: 'content'
    }, [dialog]));

    return h('div', {
      'class': 'dialog__container',
      style: {
        display: !this.$slots.activator && 'none' || this.fullWidth ? 'block' : 'inline-block'
      }
    }, children);
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Divider__ = __webpack_require__(63);


/* harmony default export */ __webpack_exports__["a"] = ({
  Divider: __WEBPACK_IMPORTED_MODULE_0__Divider__["a" /* default */]
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    inset: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    data.staticClass = ('divider ' + (data.staticClass || '')).trim();

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.inset) data.staticClass += ' divider--inset';
    if (props.light) data.staticClass += ' theme--light';

    return h('hr', data);
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ExpansionPanel__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ExpansionPanelContent__ = __webpack_require__(66);



/* harmony default export */ __webpack_exports__["a"] = ({
  ExpansionPanel: __WEBPACK_IMPORTED_MODULE_0__ExpansionPanel__["a" /* default */],
  ExpansionPanelContent: __WEBPACK_IMPORTED_MODULE_1__ExpansionPanelContent__["a" /* default */]
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'expansion-panel',

  props: {
    expand: Boolean
  },

  computed: {
    params: function params() {
      return {
        expand: this.expand
      };
    }
  },

  render: function render(h) {
    return h('ul', {
      'class': 'expansion-panel'
    }, this.$slots.default);
  }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_transitions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'expansion-panel-content',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      height: 'auto'
    };
  },


  props: {
    ripple: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'expansion-panel__header': true,
        'expansion-panel__header--active': this.isActive
      };
    }
  },

  methods: {
    closeConditional: function closeConditional(e) {
      return this.$parent.$el.contains(e.target) && !this.$parent.expand && !this.$el.contains(e.target);
    },
    toggle: function toggle() {
      this.isActive = !this.isActive;
    },
    genHeader: function genHeader(h) {
      var _this = this;

      return h('div', {
        class: this.classes,
        directives: [{
          name: 'click-outside',
          value: this.closeConditional
        }, {
          name: 'ripple',
          value: this.ripple
        }],
        on: {
          click: function click() {
            _this.isActive = !_this.isActive;
          }
        }
      }, [this.$slots.header]);
    },
    genBody: function genBody(h) {
      return h('div', {
        ref: 'body',
        class: 'expansion-panel__body',
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, [this.$slots.default]);
    }
  },

  render: function render(h) {
    var children = [];

    this.$slots.header && children.push(this.genHeader(h));
    children.push(h(__WEBPACK_IMPORTED_MODULE_0__components_transitions__["a" /* ExpandTransition */], [this.genBody(h)]));

    return h('li', children);
  }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  enter: function enter(el, done) {
    // Remove initial transition
    el.style.transition = 'none';
    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);

    // Get height that is to be scrolled
    el.style.overflow = 'hidden';
    el.style.height = null;
    el.style.display = 'block';
    var height = el.clientHeight + 'px';
    el.style.height = 0;
    el.style.transition = null;

    setTimeout(function () {
      return el.style.height = height;
    }, 50);
  },
  afterEnter: function afterEnter(el) {
    el.style.height = 'auto';
    el.style.overflow = null;
  },
  leave: function leave(el, done) {
    // Remove initial transition
    el.style.transition = 'none';
    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);

    // Set height before we transition to 0
    el.style.overflow = 'hidden';
    el.style.height = el.clientHeight + 'px';
    el.style.transition = null;

    setTimeout(function () {
      return el.style.height = 0;
    }, 50);
  }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer__ = __webpack_require__(69);


/* harmony default export */ __webpack_exports__["a"] = ({
  Footer: __WEBPACK_IMPORTED_MODULE_0__Footer__["a" /* default */]
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  props: {
    absolute: Boolean,
    fixed: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('footer ' + (data.staticClass || '')).trim();

    if (props.absolute) data.staticClass += ' footer--absolute';
    if (props.fixed) data.staticClass += ' footer--fixed';

    return h('footer', data, children);
  }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


var Grid = function Grid(name) {
  return {
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (name + ' ' + (data.staticClass || '')).trim();

      if (data.attrs) {
        data.staticClass += ' ' + Object.keys(data.attrs).join(' ');
        delete data.attrs;
      }

      return h('div', data, children);
    }
  };
};

var Container = Grid('container');
var Flex = Grid('flex');
var Layout = Grid('layout');
var Spacer = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('spacer');

/* harmony default export */ __webpack_exports__["a"] = ({
  Container: Container,
  Flex: Flex,
  Layout: Layout,
  Spacer: Spacer
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  Icon: __WEBPACK_IMPORTED_MODULE_0__Icon__["a" /* default */]
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListGroup__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ListTile__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ListTileAction__ = __webpack_require__(74);







var ListTileActionText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__action-text', 'span');
var ListTileAvatar = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__avatar', 'v-avatar');
var ListTileContent = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__content', 'div');
var ListTileTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__title', 'div');
var ListTileSubTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('list__tile__sub-title', 'div');

/* harmony default export */ __webpack_exports__["a"] = ({
  List: __WEBPACK_IMPORTED_MODULE_1__List__["a" /* default */],
  ListTile: __WEBPACK_IMPORTED_MODULE_3__ListTile__["a" /* default */],
  ListGroup: __WEBPACK_IMPORTED_MODULE_2__ListGroup__["a" /* default */],
  ListTileAction: __WEBPACK_IMPORTED_MODULE_4__ListTileAction__["a" /* default */],
  ListTileActionText: ListTileActionText,
  ListTileAvatar: ListTileAvatar,
  ListTileContent: ListTileContent,
  ListTileTitle: ListTileTitle,
  ListTileSubTitle: ListTileSubTitle
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_transitions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'list-group',

  inject: ['listClick', 'listClose'],

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      isBooted: this.value
    };
  },


  props: {
    group: String,
    lazy: Boolean,
    noAction: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list--group__header': true,
        'list--group__header--active': this.isActive,
        'list--group__header--no-action': this.noAction
      };
    }
  },

  watch: {
    isActive: function isActive() {
      this.isBooted = true;

      if (!this.isActive) {
        this.listClose(this._uid);
      }
    },
    $route: function $route(to) {
      var isActive = this.matchRoute(to.path);

      if (this.group) {
        if (isActive && this.isActive !== isActive) {
          this.listClick(this._uid);
        }
        this.isActive = isActive;
      }
    }
  },

  mounted: function mounted() {
    if (this.group) {
      this.isActive = this.matchRoute(this.$route.path);
    }

    if (this.isActive) {
      this.listClick(this._uid);
    }
  },


  methods: {
    click: function click() {
      if (!this.$refs.item.querySelector('.list__tile--disabled')) {
        this.listClick(this._uid);
      }
    },
    toggle: function toggle(uid) {
      this.isActive = this._uid === uid;
    },
    matchRoute: function matchRoute(to) {
      if (!this.group) return false;
      return to.match(this.group) !== null;
    }
  },

  render: function render(h) {
    var group = h('ul', {
      'class': 'list list--group',
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      ref: 'group'
    }, [this.lazy && !this.isBooted ? null : this.$slots.default]);

    var item = h('div', {
      'class': this.classes,
      on: Object.assign({}, { click: this.click }, this.$listeners),
      ref: 'item'
    }, [this.$slots.item]);

    var transition = h(__WEBPACK_IMPORTED_MODULE_0__components_transitions__["a" /* ExpandTransition */], [group]);

    return h('div', { 'class': 'list--group__container' }, [item, transition]);
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  name: 'list-tile-action',

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = data.staticClass ? 'list__tile__action ' + (data.staticClass || '') : 'list__tile__action';
    if ((children || []).length > 1) data.staticClass += ' list__tile__action--stack';

    return h('div', data, children);
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu_js__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["a"] = ({
  Menu: __WEBPACK_IMPORTED_MODULE_0__Menu_js__["a" /* default */]
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    getActivator: function getActivator() {
      if (this.activator) return this.activator;
      return this.$refs.activator.children ? this.$refs.activator.children[0] : this.$refs.activator;
    },
    activatorClickHandler: function activatorClickHandler(e) {
      if (this.disabled) return;else if (this.openOnClick && !this.isActive) {
        this.isActive = true;
        this.absoluteX = e.clientX;
        this.absoluteY = e.clientY;
      } else if (this.closeOnClick && this.isActive) this.isActive = false;
    },
    mouseEnterHandler: function mouseEnterHandler(e) {
      if (this.disabled || this.hasJustFocused) return;
      this.isActive = true;
    },
    mouseLeaveHandler: function mouseLeaveHandler(e) {
      if (this.insideContent) return;
      this.isActive = false;
      this.hasJustFocused = true;
    },
    addActivatorEvents: function addActivatorEvents() {
      var activator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!activator) return;
      activator.addEventListener('click', this.activatorClickHandler);
    },
    removeActivatorEvents: function removeActivatorEvents() {
      var activator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!activator) return;
      activator.removeEventListener('click', this.activatorClickHandler);
    }
  }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genActivator: function genActivator() {
      if (!this.$slots.activator) return null;

      var options = {
        'class': 'menu__activator',
        ref: 'activator',
        slot: 'activator',
        on: {}
      };

      if (this.openOnHover) {
        options.on['mouseenter'] = this.mouseEnterHandler;
        options.on['mouseleave'] = this.mouseLeaveHandler;
      } else if (this.openOnClick) {
        options.on['click'] = this.activatorClickHandler;
      }

      return this.$createElement('div', options, this.$slots.activator);
    },
    genTransition: function genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin
        }
      }, [this.genContent()]);
    },
    genContent: function genContent() {
      var _this = this;

      return this.$createElement('div', {
        'class': ('menu__content ' + this.contentClass).trim(),
        ref: 'content',
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (_this.closeOnContentClick) _this.isActive = false;
          },
          mouseenter: function mouseenter(e) {
            _this.insideContent = true;
          },
          mouseleave: function mouseleave(e) {
            _this.insideContent = false;
            _this.openOnHover && _this.mouseLeaveHandler();
          }
        }
      }, [this.lazy && this.isBooted || !this.lazy ? this.$slots.default : null]);
    }
  }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Revisit this
    calculateScroll: function calculateScroll() {
      if (this.selectedIndex === null) return;

      var scrollTop = 0;

      if (this.selectedIndex >= this.stopIndex) {
        scrollTop = this.$refs.content.scrollHeight;
      } else if (this.selectedIndex > this.startIndex) {
        scrollTop = this.selectedIndex * 48 - 56;
      }

      this.$refs.content.scrollTop = scrollTop;
    },
    calcLeftAuto: function calcLeftAuto() {
      var a = this.dimensions.activator;

      return parseInt(a.left - 16);
    },
    calcTopAuto: function calcTopAuto() {
      if (!this.hasActivator) return this.calcTop(true);

      var selectedIndex = Array.from(this.tiles).findIndex(function (n) {
        return n.classList.contains('list__tile--active');
      });

      if (selectedIndex === -1) {
        this.selectedIndex = null;

        return this.calcTop(true);
      }

      this.selectedIndex = selectedIndex;
      var actingIndex = selectedIndex;

      var offsetPadding = -16;
      // #708 Stop index should vary by tile length
      this.stopIndex = this.tiles.length > 4 ? this.tiles.length - 4 : this.tiles.length;

      if (selectedIndex > this.startIndex && selectedIndex < this.stopIndex) {
        actingIndex = 2;
        offsetPadding = 24;
      } else if (selectedIndex >= this.stopIndex) {
        offsetPadding = -8;
        actingIndex = selectedIndex - this.stopIndex;
      }

      return this.calcTop(true) + offsetPadding - actingIndex * 48;
    },
    calcLeft: function calcLeft() {
      if (this.auto) return this.calcLeftAuto();

      var a = this.dimensions.activator;
      var c = this.dimensions.content;
      var left = this.left ? a.right - c.width : a.left;

      if (this.offsetX) left += this.left ? -a.width : a.width;
      if (this.nudgeLeft) left += this.nudgeLeft;
      if (this.nudgeRight) left -= this.nudgeRight;

      return this.calcXOverflow(left);
    },
    calcTop: function calcTop(force) {
      if (this.auto && !force) return this.calcTopAuto();

      var a = this.dimensions.activator;
      var c = this.dimensions.content;
      var top = this.top ? a.bottom - c.height : a.top;

      if (this.offsetY) top += this.top ? -a.height : a.height;
      if (this.nudgeTop) top -= this.nudgeTop;
      if (this.nudgeBottom) top += this.nudgeBottom;

      var pageYOffset = typeof window !== 'undefined' ? window.pageYOffset : 0;

      return this.calcYOverflow(top) + pageYOffset;
    },
    calcXOverflow: function calcXOverflow(left) {
      var maxWidth = Math.max(this.dimensions.content.width, this.calculatedMinWidth, parseInt(this.maxWidth) || 0);
      var totalWidth = left + maxWidth;
      var availableWidth = totalWidth - this.window.innerWidth;
      var innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

      if ((!this.left || this.right) && availableWidth > 0) {
        left = innerWidth - maxWidth - (innerWidth > 1024 ? 30 : 12) // Account for scrollbar
        ;
      } else if (this.left && left < 0) left = 12;

      return left;
    },
    calcYOverflow: function calcYOverflow(top) {
      var totalHeight = top + this.dimensions.content.height;
      var innerHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

      if (this.top && top < 0) top = 12;else if ((!this.top || this.bottom) && innerHeight < totalHeight) {
        top = innerHeight - this.dimensions.content.height - 12;
      }

      return top;
    },
    sneakPeek: function sneakPeek(cb) {
      var _this = this;

      requestAnimationFrame(function () {
        var el = _this.$refs.content;
        var currentDisplay = el.style.display;

        el.style.display = 'inline-block';
        cb();
        el.style.display = currentDisplay;
      });
    },
    absolutePosition: function absolutePosition() {
      return {
        offsetTop: 0,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },
    updateDimensions: function updateDimensions() {
      var _this2 = this;

      this.sneakPeek(function () {
        _this2.dimensions = {
          activator: !_this2.hasActivator || _this2.positionAbsolutely ? _this2.absolutePosition() : _this2.measure(_this2.getActivator()),
          content: _this2.measure(_this2.$refs.content)
        };
      });
    }
  }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    measure: function measure(el, selector) {
      var getParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      el = selector ? el.querySelector(selector) : el;

      if (!el) return null;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          top = _el$getBoundingClient.top,
          bottom = _el$getBoundingClient.bottom,
          left = _el$getBoundingClient.left,
          right = _el$getBoundingClient.right,
          height = _el$getBoundingClient.height,
          width = _el$getBoundingClient.width;

      return {
        offsetTop: el.offsetTop,
        scrollHeight: el.scrollHeight,
        top: top, bottom: bottom, left: left, right: right, height: height, width: width
      };
    }
  }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      listIndex: -1,
      isUsingKeys: false,
      tiles: []
    };
  },

  watch: {
    isActive: function isActive(val) {
      if (!val) this.listIndex = -1;
    },
    listIndex: function listIndex(next, prev) {
      // For infinite scroll and autocomplete, re-evaluate children
      this.getTiles();

      if (next in this.tiles) {
        this.tiles[next].classList.add('list__tile--highlighted');
        this.$refs.content.scrollTop = next * 48;
      }

      prev in this.tiles && this.tiles[prev].classList.remove('list__tile--highlighted');
    }
  },

  methods: {
    changeListIndex: function changeListIndex(e) {
      [40, 38, 13].includes(e.keyCode) && e.preventDefault();
      e.keyCode === 32 && !this.isActive && e.preventDefault();

      if (this.listIndex === -1) this.setActiveListIndex();
      if ([27, 9].includes(e.keyCode)) return this.isActive = false;else if (!this.isActive && [13, 32].includes(e.keyCode)) return this.isActive = true;

      if (e.keyCode === 40 && this.listIndex < this.tiles.length - 1) this.listIndex++;else if (e.keyCode === 38 && this.listIndex > 0) this.listIndex--;else if (e.keyCode === 13 && this.listIndex !== -1) this.tiles[this.listIndex].click();
    },
    getTiles: function getTiles() {
      this.tiles = this.$refs.content.querySelectorAll('.list__tile');
    },
    setActiveListIndex: function setActiveListIndex() {
      var _this = this;

      this.tiles.forEach(function (t, i) {
        if (t.classList.contains('list__tile--active')) {
          _this.listIndex = i;
          return;
        }
      });
    }
  }
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavigationDrawer__ = __webpack_require__(82);


/* harmony default export */ __webpack_exports__["a"] = ({
  NavigationDrawer: __WEBPACK_IMPORTED_MODULE_0__NavigationDrawer__["a" /* default */]
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_overlayable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_resizable__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_themeable__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'navigation-drawer',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_resizable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      isActive: this.value,
      isBooted: false,
      isMobile: false,
      mobileBreakPoint: 1024
    };
  },


  props: {
    absolute: Boolean,
    clipped: Boolean,
    disableRouteWatcher: Boolean,
    enableResizeWatcher: Boolean,
    height: String,
    floating: Boolean,
    miniVariant: Boolean,
    permanent: Boolean,
    persistent: Boolean,
    right: Boolean,
    temporary: Boolean,
    touchless: Boolean,
    value: { required: false }
  },

  computed: {
    calculatedHeight: function calculatedHeight() {
      return this.height || '100%';
    },
    classes: function classes() {
      return {
        'navigation-drawer': true,
        'navigation-drawer--absolute': this.absolute,
        'navigation-drawer--clipped': this.clipped,
        'navigation-drawer--close': !this.isActive,
        'navigation-drawer--floating': this.floating,
        'navigation-drawer--is-booted': this.isBooted,
        'navigation-drawer--is-mobile': this.isMobile,
        'navigation-drawer--mini-variant': this.miniVariant,
        'navigation-drawer--open': this.isActive,
        'navigation-drawer--permanent': this.permanent,
        'navigation-drawer--persistent': this.persistent,
        'navigation-drawer--right': this.right,
        'navigation-drawer--temporary': this.temporary,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    },
    showOverlay: function showOverlay() {
      return !this.permanent && this.isActive && (this.temporary || this.isMobile);
    }
  },

  watch: {
    $route: function $route() {
      if (!this.disableRouteWatcher) {
        this.isActive = !this.closeConditional();
      }
    },
    isActive: function isActive(val) {
      this.$emit('input', val);
      this.showOverlay && val && this.genOverlay() || this.removeOverlay();
      this.$el.scrollTop = 0;
    },
    permanent: function permanent(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (this.permanent) return;
      if (val !== this.isActive) this.isActive = val;
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },


  methods: {
    init: function init() {
      var _this = this;

      this.checkIfMobile();
      setTimeout(function () {
        return _this.isBooted = true;
      }, 0);

      if (this.permanent) return this.isActive = true;else if (this.isMobile) this.isActive = false;else if (!this.value && (this.persistent || this.temporary)) this.isActive = false;
    },
    checkIfMobile: function checkIfMobile() {
      this.isMobile = window.innerWidth < parseInt(this.mobileBreakPoint);
    },
    closeConditional: function closeConditional() {
      return !this.permanent && (this.temporary || this.isMobile);
    },
    onResize: function onResize() {
      if (!this.enableResizeWatcher || this.permanent || this.temporary) return;
      this.checkIfMobile();
      this.isActive = !this.isMobile;
    },
    swipeRight: function swipeRight(e) {
      if (this.isActive && !this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;else if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
    },
    swipeLeft: function swipeLeft(e) {
      if (this.isActive && this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;else if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
    },
    calculateTouchArea: function calculateTouchArea() {
      var parentRect = this.$el.parentNode.getBoundingClientRect();

      this.touchArea = {
        left: parentRect.left + 50,
        right: parentRect.right - 50
      };
    },
    genDirectives: function genDirectives() {
      var directives = [{
        name: 'click-outside',
        value: this.closeConditional
      }];

      !this.touchless && directives.push({
        name: 'touch',
        value: {
          parent: true,
          left: this.swipeLeft,
          right: this.swipeRight
        }
      });

      return directives;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var data = {
      'class': this.classes,
      style: { height: this.calculatedHeight },
      directives: this.genDirectives(),
      on: Object.assign({}, {
        click: function click() {
          return _this2.$emit('update:miniVariant', false);
        }
      }, this.$listeners)
    };

    return h('aside', data, this.$slots.default);
  }
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SystemBar__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Toolbar__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ToolbarSideIcon__ = __webpack_require__(86);






var ToolbarTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('toolbar__title');
var ToolbarItems = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('toolbar__items');

/* harmony default export */ __webpack_exports__["a"] = ({
  SystemBar: __WEBPACK_IMPORTED_MODULE_1__SystemBar__["a" /* default */],
  Toolbar: __WEBPACK_IMPORTED_MODULE_2__Toolbar__["a" /* default */],
  ToolbarItems: ToolbarItems,
  ToolbarTitle: ToolbarTitle,
  ToolbarSideIcon: __WEBPACK_IMPORTED_MODULE_3__ToolbarSideIcon__["a" /* default */]
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    lightsOut: Boolean,
    status: Boolean,
    window: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('system-bar ' + (data.staticClass || '')).trim();

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.light) data.staticClass += ' theme--light';
    if (props.status) data.staticClass += ' system-bar--status';
    if (props.window) data.staticClass += ' system-bar--window';
    if (props.lightsOut) data.staticClass += ' system-bar--lights-out';

    return h('div', data, children);
  }
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    absolute: Boolean,
    card: Boolean,
    dense: Boolean,
    extended: Boolean,
    fixed: Boolean,
    flat: Boolean,
    floating: Boolean,
    prominent: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'toolbar': true,
        'elevation-0': this.flat,
        'toolbar--absolute': this.absolute,
        'toolbar--card': this.card,
        'toolbar--dense': this.dense,
        'toolbar--fixed': this.fixed,
        'toolbar--floating': this.floating,
        'toolbar--prominent': this.prominent,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  render: function render(h) {
    var children = [];
    var data = {
      'class': this.classes,
      on: this.$listeners
    };

    children.push(h('div', {
      'class': 'toolbar__content'
    }, this.$slots.default));

    if (this.$slots.extension || this.extended) {
      children.push(h('div', {
        'class': 'toolbar__extension'
      }, this.$slots.extension));
    }

    return h('nav', data, children);
  }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('toolbar__side-icon ' + (data.staticClass || '')).trim();
    data.props = Object.assign({
      icon: true
    }, props);

    return h('v-btn', data, [h('v-icon', 'menu')]);
  }
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__(88);


/* harmony default export */ __webpack_exports__["a"] = ({
  Pagination: __WEBPACK_IMPORTED_MODULE_0__Pagination__["a" /* default */]
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_icons_Icon__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'pagination',

  props: {
    circle: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    prevIcon: {
      type: String,
      default: 'chevron_left'
    },
    nextIcon: {
      type: String,
      default: 'chevron_right'
    }
  },

  watch: {
    value: function value() {
      this.init();
    }
  },

  computed: {
    classes: function classes() {
      return {
        'pagination': true,
        'pagination--circle': this.circle,
        'pagination--disabled': this.disabled
      };
    },
    items: function items() {
      if (this.length <= 5) {
        return this.range(1, this.length);
      }

      var min = this.value - 3;
      min = min > 0 ? min : 1;

      var max = min + 6;
      max = max <= this.length ? max : this.length;

      if (max === this.length) {
        min = this.length - 6;
      }

      var range = this.range(min, max);

      if (this.value >= 4 && this.length > 6) {
        range.splice(0, 2, 1, '...');
      }

      if (this.value + 3 < this.length && this.length > 6) {
        range.splice(range.length - 2, 2, '...', this.length);
      }

      return range;
    }
  },

  mounted: function mounted() {
    this.$vuetify.load.call(this, this.init);
  },


  methods: {
    init: function init() {
      var _this = this;

      this.selected = null;

      // Change this
      setTimeout(function () {
        return _this.selected = _this.value;
      }, 100);
    },
    next: function next(e) {
      e.preventDefault();
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },
    previous: function previous(e) {
      e.preventDefault();
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },
    range: function range(from, to) {
      var range = [];

      from = from > 0 ? from : 1;

      for (var i = from; i <= to; i++) {
        range.push(i);
      }

      return range;
    },
    genIcon: function genIcon(h, icon, disabled, fn) {
      return h('li', [h('a', {
        class: {
          'pagination__navigation': true,
          'pagination__navigation--disabled': disabled
        },
        attrs: { href: '#!' },
        on: { click: fn }
      }, [h(__WEBPACK_IMPORTED_MODULE_0__components_icons_Icon__["a" /* default */], [icon])])]);
    },
    genItem: function genItem(h, i) {
      var _this2 = this;

      return h('a', {
        class: {
          'pagination__item': true,
          'pagination__item--active': i === this.value
        },
        attrs: { href: '#!' },
        on: {
          click: function click(e) {
            e.preventDefault();
            _this2.$emit('input', i);
          }
        }
      }, [i]);
    },
    genItems: function genItems(h) {
      var _this3 = this;

      return this.items.map(function (i) {
        return h('li', [isNaN(i) && h('span', { class: 'pagination__more' }, [i]) || _this3.genItem(h, i)]);
      });
    }
  },

  render: function render(h) {
    var children = [this.genIcon(h, this.prevIcon, this.value === 1, this.previous), this.genItems(h), this.genIcon(h, this.nextIcon, this.value === this.length, this.next)];

    return h('ul', { class: this.classes }, children);
  }
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Parallax__ = __webpack_require__(90);


/* harmony default export */ __webpack_exports__["a"] = ({
  Parallax: __WEBPACK_IMPORTED_MODULE_0__Parallax__["a" /* default */]
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_translatable__ = __webpack_require__(91);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'parallax',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_translatable__["a" /* default */]],

  props: {
    height: {
      type: [String, Number],
      default: 500
    },
    src: {
      type: String,
      required: true
    }
  },

  computed: {
    styles: function styles() {
      return {
        display: 'block',
        transform: 'translate3d(-50%, ' + this.parallax + 'px, 0)'
      };
    }
  },

  methods: {
    init: function init() {
      var _this = this;

      if (this.$refs.img.complete) {
        this.translate();
        this.listeners();
      } else {
        this.$refs.img.addEventListener('load', function () {
          _this.translate();
          _this.listeners();
        }, false);
      }
    },
    objHeight: function objHeight() {
      return this.$refs.img.naturalHeight;
    },
    elOffsetTop: function elOffsetTop() {
      return this.$el.offsetTop;
    }
  },

  render: function render(h) {
    var container = h('div', {
      staticClass: 'parallax__image-container'
    }, [h('img', {
      staticClass: 'parallax__image',
      style: this.styles,
      attrs: {
        src: this.src
      },
      ref: 'img'
    })]);

    var content = h('div', {
      staticClass: 'parallax__content'
    }, this.$slots.default);

    return h('div', {
      staticClass: 'parallax',
      style: {
        height: parseInt(this.normalizedHeight) + 'px'
      },
      on: this.$listeners
    }, [container, content]);
  }
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      parallax: null,
      parallaxDist: null,
      percentScrolled: null,
      scrollTop: null,
      windowHeight: null,
      windowBottom: null
    };
  },


  computed: {
    normalizedHeight: function normalizedHeight() {
      return Number(this.height.toString().replace(/(^[0-9]*$)/, '$1'));
    },
    imgHeight: function imgHeight() {
      return this.objHeight();
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.translate, false);
    window.removeEventListener('resize', this.translate, false);
  },


  methods: {
    listeners: function listeners() {
      window.addEventListener('scroll', this.translate, false);
      window.addEventListener('resize', this.translate, false);
    },
    translate: function translate() {
      this.calcDimensions();

      this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (this.normalizedHeight + this.windowHeight);

      this.parallax = Math.round(this.parallaxDist * this.percentScrolled);

      if (this.translated) {
        this.translated();
      }
    },
    calcDimensions: function calcDimensions() {
      var offset = this.$el.getBoundingClientRect();

      this.scrollTop = window.pageYOffset;
      this.parallaxDist = this.imgHeight - this.normalizedHeight;
      this.elOffsetTop = offset.top + this.scrollTop;
      this.windowHeight = window.innerHeight;
      this.windowBottom = this.scrollTop + this.windowHeight;
    }
  }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProgressLinear__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProgressCircular__ = __webpack_require__(94);



/* harmony default export */ __webpack_exports__["a"] = ({
  ProgressLinear: __WEBPACK_IMPORTED_MODULE_0__ProgressLinear__["a" /* default */],
  ProgressCircular: __WEBPACK_IMPORTED_MODULE_1__ProgressCircular__["a" /* default */]
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'progress-linear',

  props: {
    active: {
      type: Boolean,
      default: true
    },
    buffer: Boolean,
    bufferValue: Number,
    error: Boolean,
    height: {
      type: [Number, String],
      default: 7
    },
    indeterminate: Boolean,
    info: Boolean,
    secondary: Boolean,
    success: Boolean,
    query: Boolean,
    warning: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    colorFront: {
      type: String,
      default: null
    },
    colorBack: {
      type: String,
      default: null
    }
  },

  computed: {
    classes: function classes() {
      return {
        'progress-linear--query': this.query,
        'progress-linear--secondary': this.secondary,
        'progress-linear--success': this.success,
        'progress-linear--info': this.info,
        'progress-linear--warning': this.warning,
        'progress-linear--error': this.error
      };
    },
    styles: function styles() {
      var styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (this.buffer) {
        styles.width = this.bufferValue + '%';
      }

      return styles;
    },
    bufferStyles: function bufferStyles() {
      var styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      return styles;
    }
  },

  methods: {
    genDeterminate: function genDeterminate(h) {
      return h('div', {
        ref: 'front',
        class: ['progress-linear__bar__determinate', this.colorFront],
        style: { width: this.value + '%' }
      });
    },
    genBar: function genBar(h, name) {
      return h('div', {
        class: ['progress-linear__bar__indeterminate', name, this.colorFront]
      });
    },
    genIndeterminate: function genIndeterminate(h) {
      return h('div', {
        ref: 'front',
        class: {
          'progress-linear__bar__indeterminate': true,
          'progress-linear__bar__indeterminate--active': this.active
        }
      }, [this.genBar(h, 'long'), this.genBar(h, 'short')]);
    }
  },

  render: function render(h) {
    var fade = h('v-fade-transition', [this.indeterminate && this.genIndeterminate(h)]);
    var slide = h('v-slide-x-transition', [!this.indeterminate && this.genDeterminate(h)]);

    var bar = h('div', { class: ['progress-linear__bar', this.colorBack], style: this.styles }, [fade, slide]);

    return h('div', {
      class: ['progress-linear', this.classes],
      style: { height: this.height + 'px' },
      on: this.$listeners
    }, [bar]);
  }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _this = this;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'progress-circular',

  props: {
    button: Boolean,

    fill: {
      type: String,
      default: function _default() {
        return _this.indeterminate ? 'none' : 'transparent';
      }
    },

    indeterminate: Boolean,

    rotate: {
      type: Number,
      default: 0
    },

    size: {
      type: [Number, String],
      default: 32
    },

    width: {
      type: Number,
      default: 4
    },

    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    calculatedSize: function calculatedSize() {
      var size = Number(this.size);

      if (this.button) {
        size += 8;
      }

      return size;
    },
    circumference: function circumference() {
      return 2 * Math.PI * this.radius;
    },
    classes: function classes() {
      return {
        'progress-circular': true,
        'progress-circular--indeterminate': this.indeterminate,
        'progress-circular--button': this.button
      };
    },
    cxy: function cxy() {
      return this.indeterminate && !this.button ? 50 : this.calculatedSize / 2;
    },
    normalizedValue: function normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return this.value;
    },
    radius: function radius() {
      return this.indeterminate && !this.button ? 20 : (this.calculatedSize - this.width) / 2;
    },
    strokeDashArray: function strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },
    strokeDashOffset: function strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },
    styles: function styles() {
      return {
        height: this.calculatedSize + 'px',
        width: this.calculatedSize + 'px'
      };
    },
    svgSize: function svgSize() {
      return this.indeterminate ? false : this.calculatedSize;
    },
    svgStyles: function svgStyles() {
      return {
        transform: 'rotate(' + this.rotate + 'deg)'
      };
    },
    viewBox: function viewBox() {
      return this.indeterminate ? '25 25 50 50' : false;
    }
  },

  methods: {
    genCircle: function genCircle(h, name, offset) {
      return h('circle', {
        class: 'progress-circular__' + name,
        attrs: {
          fill: 'transparent',
          cx: this.cxy,
          cy: this.cxy,
          r: this.radius,
          'stroke-width': this.width,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },
    genSvg: function genSvg(h) {
      var children = [!this.indeterminate && this.genCircle(h, 'underlay', 0), this.genCircle(h, 'overlay', this.strokeDashOffset)];

      return h('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          height: this.svgSize,
          width: this.svgSize,
          viewBox: this.viewBox
        }
      }, children);
    }
  },

  render: function render(h) {
    var info = h('div', { class: 'progress-circular__info' }, [this.$slots.default]);
    var svg = this.genSvg(h);

    return h('div', {
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    }, [svg, info]);
  }
});

/*
<template lang="pug">
  div(
    class="progress-circular"
    v-bind:class="classes"
    v-bind:style="styles"
    v-on="$listeners"
  )
    svg(
      xmlns="http://www.w3.org/2000/svg"
      v-bind:height="svgSize"
      v-bind:width="svgSize"
      v-bind:viewBox="viewBox"
      v-bind:style="svgStyles"
    )
      circle(
        class="progress-circular__underlay"
        fill="transparent"
        v-bind:cx="cxy"
        v-bind:cy="cxy"
        v-bind:r="radius"
        v-bind:stroke-width="width"
        v-bind:stroke-dasharray="strokeDashArray"
        v-bind:stroke-dashoffset="0"
        v-if="!indeterminate"
      )
      circle(
        class="progress-circular__overlay"
        v-bind:fill="fill"
        v-bind:cx="cxy"
        v-bind:cy="cxy"
        v-bind:r="radius"
        v-bind:stroke-width="width"
        v-bind:stroke-dasharray="strokeDashArray"
        v-bind:stroke-dashoffset="strokeDashOffset"
      )
    div(class="progress-circular__info")
      slot
</template>
*/

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select__ = __webpack_require__(96);


/* harmony default export */ __webpack_exports__["a"] = ({
  Select: __WEBPACK_IMPORTED_MODULE_0__Select__["a" /* default */]
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_autocomplete__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_filterable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_generators__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cards_Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_lists_List__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_lists_ListTile__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menus_Menu__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_helpers__ = __webpack_require__(0);










/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'select',

  componets: {
    VCard: __WEBPACK_IMPORTED_MODULE_4__components_cards_Card__["a" /* default */],
    VList: __WEBPACK_IMPORTED_MODULE_5__components_lists_List__["a" /* default */],
    VListTile: __WEBPACK_IMPORTED_MODULE_6__components_lists_ListTile__["a" /* default */],
    VMenu: __WEBPACK_IMPORTED_MODULE_7__components_menus_Menu__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_autocomplete__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_generators__["a" /* default */]],

  data: function data() {
    return {
      content: {},
      inputValue: this.multiple && !this.value ? [] : this.value,
      isBooted: false,
      lastItem: 20,
      isActive: false
    };
  },


  props: {
    appendIcon: {
      type: String,
      default: 'arrow_drop_down'
    },
    auto: Boolean,
    autocomplete: Boolean,
    bottom: Boolean,
    chips: Boolean,
    close: Boolean,
    debounce: {
      type: Number,
      default: 200
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    filter: Function,
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    maxHeight: {
      type: [Number, String],
      default: 300
    },
    multiple: Boolean,
    multiLine: Boolean,
    offset: Boolean,
    singleLine: Boolean,
    top: Boolean,
    returnObject: Boolean,
    overflow: Boolean,
    segmented: Boolean,
    editable: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--text-field input-group--select': true,
        'input-group--auto': this.auto,
        'input-group--overflow': this.overflow,
        'input-group--segmented': this.segmented,
        'input-group--editable': this.editable,
        'input-group--autocomplete': this.autocomplete,
        'input-group--single-line': this.singleLine || this.isDropdown,
        'input-group--multi-line': this.multiLine,
        'input-group--chips': this.chips,
        'input-group--multiple': this.multiple
      };
    },
    computedContentClass: function computedContentClass() {
      var children = [this.auto ? 'menu__content--auto' : '', this.isDropdown ? 'menu__content--dropdown' : ''];

      return children.join(' ');
    },
    filteredItems: function filteredItems() {
      var items = this.autocomplete && this.searchValue ? this.filterSearch() : this.items;

      return !this.auto ? items.slice(0, this.lastItem) : items;
    },
    isDirty: function isDirty() {
      return this.selectedItems.length;
    },
    isDropdown: function isDropdown() {
      return this.segmented || this.overflow || this.editable;
    },
    selectedItems: function selectedItems() {
      var _this = this;

      if (this.inputValue === null || typeof this.inputValue === 'undefined') return [];

      return this.items.filter(function (i) {
        if (!_this.multiple) {
          return _this.getValue(i) === _this.getValue(_this.inputValue);
        } else {
          // Always return Boolean
          return _this.inputValue.find(function (j) {
            return _this.getValue(j) === _this.getValue(i);
          }) !== undefined;
        }
      });
    }
  },

  watch: {
    inputValue: function inputValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.inputValue = val;
      this.validate();
      if (this.autocomplete || this.editable) this.$nextTick(this.$refs.menu.updateDimensions);
    },
    isActive: function isActive(val) {
      this.isBooted = true;
      this.lastItem += !val ? 20 : 0;

      if (!val) this.blur();else this.focus();
    },
    isBooted: function isBooted() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.content && _this2.content.addEventListener('scroll', _this2.onScroll, false);
      });
    },
    searchValue: function searchValue() {
      this.$refs.menu.listIndex = -1;
    }
  },

  mounted: function mounted() {
    this.content = this.$refs.menu.$refs.content;
  },
  beforeDestroy: function beforeDestroy() {
    if (this.isBooted) {
      this.content && this.content.removeEventListener('scroll', this.onScroll, false);
    }
  },


  methods: {
    blur: function blur() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.focused = false;
        _this3.searchValue = null;
        _this3.$el.blur();
      });
    },
    focus: function focus() {
      var _this4 = this;

      this.focused = true;
      this.$refs.input && (this.autocomplete || this.editable) && this.$refs.input.focus();

      if (this.editable && this.inputValue !== null && typeof this.inputValue !== 'undefined') {
        this.$nextTick(function () {
          return _this4.$refs.input.value = _this4.getValue(_this4.inputValue);
        });
      }
    },
    genLabel: function genLabel() {
      if (this.searchValue) return null;

      var data = {};

      if (this.id) data.attrs = { for: this.id };

      return this.$createElement('label', data, this.label);
    },
    getText: function getText(item) {
      return item === Object(item) ? Object(__WEBPACK_IMPORTED_MODULE_8__util_helpers__["g" /* getObjectValueByPath */])(item, this.itemText) || item : item;
    },
    getValue: function getValue(item) {
      return item === Object(item) ? Object(__WEBPACK_IMPORTED_MODULE_8__util_helpers__["g" /* getObjectValueByPath */])(item, this.itemValue) || item : item;
    },
    onScroll: function onScroll() {
      var _this5 = this;

      if (!this.isActive) {
        requestAnimationFrame(function () {
          return _this5.content.scrollTop = 0;
        });
      } else {
        var showMoreItems = this.content.scrollHeight - (this.content.scrollTop + this.content.clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },
    selectItem: function selectItem(item) {
      var _this6 = this;

      if (!this.multiple) {
        this.inputValue = this.returnObject ? item : this.getValue(item);
      } else {
        var inputValue = this.inputValue.slice();
        var i = this.inputValue.findIndex(function (i) {
          return _this6.getValue(i) === _this6.getValue(item);
        });

        i !== -1 && inputValue.splice(i, 1) || inputValue.push(item);
        this.inputValue = inputValue.map(function (i) {
          return _this6.returnObject ? i : _this6.getValue(i);
        });
      }

      if (this.autocomplete || this.editable) {
        this.$nextTick(function () {
          _this6.searchValue = null;
          _this6.$refs.input && _this6.$refs.input.focus();
        });
      }

      this.$emit('change', this.inputValue);
    }
  },

  render: function render(h) {
    var _this7 = this;

    return this.genInputGroup([this.genSelectionsAndSearch(), this.genMenu()], {
      ref: 'activator',
      directives: [{
        name: 'click-outside',
        value: function value() {
          return _this7.isActive = false;
        }
      }],
      on: {
        keydown: this.onKeyDown // Located in mixins/autocomplete.js
      }
    });
  }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      searchValue: null
    };
  },


  methods: {
    filterSearch: function filterSearch() {
      var _this = this;

      return this.items.filter(function (i) {
        var text = _this.getText(i);
        if (typeof text === 'undefined') return false;

        return text.toLowerCase().indexOf(_this.searchValue.toLowerCase()) !== -1;
      });
    },
    onKeyDown: function onKeyDown(e) {
      this.$refs.menu.changeListIndex(e);
    }
  }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genMenu: function genMenu() {
      var _this = this;

      var data = {
        ref: 'menu',
        props: {
          activator: this.$refs.activator,
          auto: this.auto,
          closeOnClick: false,
          closeOnContentClick: !this.multiple,
          contentClass: this.computedContentClass,
          disabled: this.disabled,
          maxHeight: this.maxHeight,
          nudgeTop: this.isDropdown ? 22 : 0,
          offsetY: this.autocomplete || this.offset || this.isDropdown,
          value: this.isActive
        },
        on: { input: function input(val) {
            return _this.isActive = val;
          } }
      };

      return this.$createElement('v-menu', data, [this.genList()]);
    },
    genSelectionsAndSearch: function genSelectionsAndSearch() {
      var _this2 = this;

      var input = void 0;

      if (this.autocomplete || this.editable) {
        input = this.$createElement('input', {
          'class': 'input-group--select__autocomplete',
          domProps: { value: this.searchValue },
          on: { input: function input(e) {
              return _this2.searchValue = e.target.value;
            } },
          attrs: { tabindex: -1 },
          ref: 'input',
          key: 'input'
        });
      }

      var selections = this.isDirty && (!this.editable || this.editable && !this.focused) ? this.genSelections() : [];
      input && selections.push(input);
      var group = this.$createElement('div', selections);

      return this.$createElement('div', {
        'class': 'input-group__selections',
        style: { 'overflow': 'hidden' },
        ref: 'activator'
      }, [group]);
    },
    genSelections: function genSelections() {
      var _this3 = this;

      var children = [];
      var chips = this.chips;
      var slots = this.$scopedSlots.selection;
      var length = this.selectedItems.length;

      this.selectedItems.forEach(function (item, i) {
        if (slots) {
          children.push(_this3.genSlotSelection(item));
        } else if (chips) {
          children.push(_this3.genChipSelection(item));
        } else {
          children.push(_this3.genCommaSelection(item, i < length - 1));
        }
      });

      return children;
    },
    genSlotSelection: function genSlotSelection(item) {
      return this.$scopedSlots.selection({ parent: this, item: item });
    },
    genChipSelection: function genChipSelection(item) {
      var _this4 = this;

      return this.$createElement('v-chip', {
        'class': 'chip--select-multi',
        props: { close: true },
        on: {
          input: function input() {
            return _this4.selectItem(item);
          },
          click: function click(e) {
            return e.stopPropagation();
          }
        },
        key: this.getValue(item)
      }, this.getText(item));
    },
    genCommaSelection: function genCommaSelection(item, comma) {
      return this.$createElement('div', {
        'class': 'input-group__selections__comma',
        key: JSON.stringify(this.getValue(item)) // Item may be an object
      }, '' + this.getText(item) + (comma ? ', ' : ''));
    },
    genList: function genList() {
      var _this5 = this;

      var children = this.filteredItems.map(function (o) {
        if (o.header) return _this5.genHeader(o);
        if (o.divider) return _this5.genDivider(o);else return _this5.genTile(o);
      });

      if (!children.length) {
        children.push(this.genTile(this.noDataText, true));
      }

      return this.$createElement('v-card', [this.$createElement('v-list', {
        ref: 'list'
      }, children)]);
    },
    genHeader: function genHeader(item) {
      return this.$createElement('v-subheader', {
        props: item
      }, item.header);
    },
    genDivider: function genDivider(item) {
      return this.$createElement('v-divider', {
        props: item
      });
    },
    genTile: function genTile(item, disabled) {
      var _this6 = this;

      var active = this.selectedItems.indexOf(item) !== -1;
      var data = {
        on: { click: function click(e) {
            return _this6.selectItem(item);
          } },
        props: {
          avatar: item === Object(item) && 'avatar' in item,
          ripple: true,
          value: active
        }
      };

      if (this.$scopedSlots.item) {
        return this.$createElement('v-list-tile', data, [this.$scopedSlots.item({ parent: this, item: item })]);
      }

      return this.$createElement('v-list-tile', data, [this.genAction(item, active), this.genContent(item)]);
    },
    genAction: function genAction(item, active) {
      var _this7 = this;

      if (!this.multiple) return null;

      var data = {
        'class': {
          'list__tile__action--select-multi': this.multiple
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this7.selectItem(item);
          }
        }
      };

      return this.$createElement('v-list-tile-action', data, [this.$createElement('v-checkbox', { props: { inputValue: active } })]);
    },
    genContent: function genContent(item) {
      return this.$createElement('v-list-tile-content', [this.$createElement('v-list-tile-title', this.getText(item))]);
    }
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch__ = __webpack_require__(102);




/* harmony default export */ __webpack_exports__["a"] = ({
  Checkbox: __WEBPACK_IMPORTED_MODULE_0__Checkbox__["a" /* default */],
  Radio: __WEBPACK_IMPORTED_MODULE_1__Radio__["a" /* default */],
  Switch: __WEBPACK_IMPORTED_MODULE_2__Switch__["a" /* default */]
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_selectable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ripple__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_transitions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_icons_Icon__ = __webpack_require__(3);





var VFadeTransition = __WEBPACK_IMPORTED_MODULE_2__components_transitions__["b" /* default */].FadeTransition;


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'checkbox',

  components: {
    VFadeTransition: VFadeTransition,
    VIcon: __WEBPACK_IMPORTED_MODULE_3__components_icons_Icon__["a" /* default */]
  },

  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_1__directives_ripple__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_selectable__["a" /* default */]],

  data: function data() {
    return {
      inputDeterminate: this.indeterminate
    };
  },


  props: {
    indeterminate: Boolean
  },

  computed: {
    classes: function classes() {
      return this.addColorClassChecks({
        'checkbox': true,
        'input-group--selection-controls': true,
        'input-group--active': this.isActive
      });
    },
    icon: function icon() {
      if (this.inputDeterminate) {
        return 'indeterminate_check_box';
      } else if (this.isActive) {
        return 'check_box';
      } else {
        return 'check_box_outline_blank';
      }
    }
  },

  render: function render(h) {
    var transition = h('v-fade-transition', [h('v-icon', {
      'class': {
        'icon--checkbox': this.icon === 'check_box'
      },
      key: this.icon
    }, this.icon)]);

    var ripple = h('div', {
      'class': 'input-group--selection-controls__ripple',
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    return this.genInputGroup([transition, ripple]);
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(21);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'radio',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    inputValue: [String, Number]
  },

  computed: {
    isActive: function isActive() {
      return this.inputValue === this.value;
    },
    classes: function classes() {
      return this.addColorClassChecks({
        'radio': true,
        'input-group--selection-controls': true,
        'input-group--active': this.isActive
      });
    },
    icon: function icon() {
      return this.isActive ? 'radio_button_checked' : 'radio_button_unchecked';
    }
  },

  methods: {
    genLabel: function genLabel() {
      return this.$createElement('label', { on: { click: this.toggle } }, this.label);
    },
    toggle: function toggle() {
      if (!this.disabled) {
        this.$emit('change', this.value);
      }
    }
  },

  render: function render(h) {
    var transition = h('v-fade-transition', {}, [h('v-icon', {
      'class': {
        'icon--radio': this.isActive
      },
      key: this.icon
    }, this.icon)]);

    var ripple = h('div', {
      'class': 'input-group--selection-controls__ripple',
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    return this.genInputGroup([transition, ripple]);
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_selectable__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'switch',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_selectable__["a" /* default */]],

  computed: {
    classes: function classes() {
      return {
        'input-group--selection-controls switch': true
      };
    },
    rippleClasses: function rippleClasses() {
      return {
        'input-group--selection-controls__ripple': true,
        'input-group--selection-controls__ripple--active': this.isActive
      };
    },
    containerClasses: function containerClasses() {
      return this.addColorClassChecks({
        'input-group--selection-controls__container': true,
        'input-group--selection-controls__container--light': this.light,
        'input-group--selection-controls__container--disabled': this.disabled
      });
    },
    toggleClasses: function toggleClasses() {
      return {
        'input-group--selection-controls__toggle': true,
        'input-group--selection-controls__toggle--active': this.isActive
      };
    }
  },

  render: function render(h) {
    var ripple = h('div', {
      'class': this.rippleClasses,
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    var container = h('div', {
      'class': this.containerClasses
    }, [h('div', { 'class': this.toggleClasses }), ripple]);

    return this.genInputGroup([container]);
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider__ = __webpack_require__(104);


/* harmony default export */ __webpack_exports__["a"] = ({
  Slider: __WEBPACK_IMPORTED_MODULE_0__Slider__["a" /* default */]
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helpers__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'slider',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */]],

  data: function data() {
    return {
      app: {},
      isActive: false,
      inputWidth: 0
    };
  },


  props: {
    inverted: Boolean,
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: null
    },
    thumbLabel: Boolean,
    value: [Number, String],
    vertical: Boolean,
    snap: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'input-group input-group--slider': true,
        'input-group--active': this.isActive,
        'input-group--dirty': this.inputWidth > 0,
        'input-group--disabled': this.disabled,
        'input-group--ticks': !this.disabled && this.step
      };
    },

    inputValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        val = val < this.min ? this.min : val > this.max ? this.max : val;
        if (Math.ceil(val) !== Math.ceil(this.lazyValue)) {
          this.inputWidth = this.calculateWidth(val);
        }

        var value = this.snap ? Math.round(val / this.step) * this.step : parseInt(val);
        this.lazyValue = value;

        if (value !== this.value) {
          this.$emit('input', value);
        }
      }
    },
    interval: function interval() {
      return 100 / (this.max - this.min) * this.step;
    },
    thumbContainerClasses: function thumbContainerClasses() {
      return {
        'slider__thumb-container': true,
        'slider__thumb-container--label': this.thumbLabel
      };
    },
    thumbStyles: function thumbStyles() {
      return {
        left: this.inputWidth + '%'
      };
    },
    tickContainerStyles: function tickContainerStyles() {
      return {
        transform: 'translate3d(0, -50%, 0)'
      };
    },
    trackStyles: function trackStyles() {
      var scaleX = this.calculateScale(1 - this.inputWidth / 100);
      var translateX = this.inputWidth < 1 && !this.isActive ? 8 + 'px' : 0;
      return {
        transform: 'scaleX(' + scaleX + ') translateX(' + translateX + ')'
      };
    },
    trackFillStyles: function trackFillStyles() {
      var scaleX = this.calculateScale(this.inputWidth / 100);
      var translateX = this.inputWidth > 99 && !this.thumbLabel ? -8 + 'px' : 0;
      return {
        transform: 'scaleX(' + scaleX + ') translateX(' + translateX + ')'
      };
    },
    numTicks: function numTicks() {
      return parseInt((this.max - this.min) / this.step);
    }
  },

  watch: {
    value: function value() {
      this.inputValue = this.value;
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.inputValue = this.value;
    this.$nextTick(function () {
      return _this.inputWidth = _this.calculateWidth(_this.inputValue);
    });

    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || console.warn('The v-slider component requires the present of v-app or a non-body wrapping element with the [data-app] attribute.');
  },


  methods: {
    calculateWidth: function calculateWidth(val) {
      if (this.snap) {
        val = Math.round(val / this.step) * this.step;
      }

      val = (val - this.min) / (this.max - this.min) * 100;

      return val < 0.15 ? 0 : val;
    },
    calculateScale: function calculateScale(scale) {
      if (scale < 0.02 && !this.thumbLabel) {
        return 0;
      }

      return this.disabled ? scale - 0.015 : scale;
    },
    onMouseDown: function onMouseDown(e) {
      this.isActive = true;

      if ('touches' in e) {
        this.app.addEventListener('touchmove', this.onMouseMove, { passive: true });
        Object(__WEBPACK_IMPORTED_MODULE_1__util_helpers__["a" /* addOnceEventListener */])(this.app, 'touchend', this.onMouseUp);
      } else {
        this.app.addEventListener('mousemove', this.onMouseMove, { passive: true });
        Object(__WEBPACK_IMPORTED_MODULE_1__util_helpers__["a" /* addOnceEventListener */])(this.app, 'mouseup', this.onMouseUp);
      }
    },
    onMouseUp: function onMouseUp() {
      this.isActive = false;
      this.app.removeEventListener('touchmove', this.onMouseMove, { passive: true });
      this.app.removeEventListener('mousemove', this.onMouseMove, { passive: true });
    },
    onMouseMove: function onMouseMove(e) {
      var _$refs$track$getBound = this.$refs.track.getBoundingClientRect(),
          offsetLeft = _$refs$track$getBound.left,
          trackWidth = _$refs$track$getBound.width;

      var clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      var left = (clientX - offsetLeft) / trackWidth * 100;

      left = left < 0 ? 0 : left > 100 ? 100 : left;

      this.inputValue = this.min + left / 100 * (this.max - this.min);
    },
    onKeyDown: function onKeyDown(e) {
      if (!e.keyCode === 37 && !e.keyCode === 39) return;

      var direction = e.keyCode === 37 && -1 || e.keyCode === 39 && 1 || 0;
      var multiplier = e.shiftKey && 3 || e.ctrlKey && 2 || 1;
      var amount = this.snap && this.step || 1;

      this.inputValue = this.inputValue + direction * amount * multiplier;
    },
    sliderMove: function sliderMove(e) {
      if (!this.isActive) {
        this.onMouseMove(e);
      }
    }
  },

  render: function render(h) {
    var _this2 = this;

    var children = [];
    var trackChildren = [];
    var thumbChildren = [];

    trackChildren.push(h('div', { 'class': 'slider__track', style: this.trackStyles }));
    trackChildren.push(h('div', { 'class': 'slider__track-fill', style: this.trackFillStyles }));
    children.push(h('div', { 'class': 'slider__track__container', ref: 'track' }, trackChildren));

    if (this.step) {
      var ticks = Object(__WEBPACK_IMPORTED_MODULE_1__util_helpers__["c" /* createRange */])(this.numTicks + 1).map(function (i) {
        var span = h('span', {
          class: 'slider__tick',
          style: {
            left: i * (100 / _this2.numTicks) + '%'
          }
        });

        return span;
      });

      children.push(h('div', { 'class': 'slider__ticks-container', style: this.tickContainerStyles }, ticks));
    }

    thumbChildren.push(h('div', { 'class': 'slider__thumb' }));

    if (this.thumbLabel) {
      thumbChildren.push(h('v-scale-transition', { props: { origin: 'bottom center' } }, [h('div', {
        'class': 'slider__thumb--label__container',
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, [h('div', { 'class': 'slider__thumb--label' }, [h('span', {}, parseInt(this.inputValue))])])]));
    }

    var thumbContainer = h('div', {
      'class': this.thumbContainerClasses,
      style: this.thumbStyles,
      on: {
        touchstart: this.onMouseDown,
        mousedown: this.onMouseDown
      },
      ref: 'thumb'
    }, thumbChildren);

    children.push(thumbContainer);

    var slider = h('div', { 'class': 'slider' }, children);

    return this.genInputGroup([slider], {
      attrs: {
        role: 'slider',
        tabindex: this.tabindex
      },
      on: Object.assign({}, {
        mouseup: this.sliderMove,
        keydown: this.onKeyDown
      }, this.$listeners),
      directives: [{
        name: 'click-outside'
      }]
    });
  }
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subheader__ = __webpack_require__(106);


/* harmony default export */ __webpack_exports__["a"] = ({
  Subheader: __WEBPACK_IMPORTED_MODULE_0__Subheader__["a" /* default */]
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  props: {
    inset: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children,
        props = _ref.props;

    data.staticClass = ('subheader ' + (data.staticClass || '')).trim();

    if (props.inset) data.staticClass += ' subheader--inset';

    return h('li', data, children);
  }
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Stepper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StepperStep__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StepperContent__ = __webpack_require__(110);





var StepperHeader = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('stepper__header');

/* harmony default export */ __webpack_exports__["a"] = ({
  Stepper: __WEBPACK_IMPORTED_MODULE_1__Stepper__["a" /* default */],
  StepperContent: __WEBPACK_IMPORTED_MODULE_3__StepperContent__["a" /* default */],
  StepperHeader: StepperHeader,
  StepperStep: __WEBPACK_IMPORTED_MODULE_2__StepperStep__["a" /* default */]
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'stepper',

  provide: function provide() {
    return {
      stepClick: this.stepClick
    };
  },
  data: function data() {
    return {
      inputValue: null,
      isBooted: false,
      steps: [],
      content: [],
      isReverse: false
    };
  },


  props: {
    nonLinear: Boolean,
    altLabels: Boolean,
    vertical: Boolean,
    value: [Number, String]
  },

  computed: {
    classes: function classes() {
      return {
        'stepper': true,
        'stepper--is-booted': this.isBooted,
        'stepper--vertical': this.vertical,
        'stepper--alt-labels': this.altLabels,
        'stepper--non-linear': this.nonLinear
      };
    }
  },

  watch: {
    inputValue: function inputValue(val, prev) {
      var _this = this;

      this.isReverse = Number(val) < Number(prev);
      this.steps.forEach(function (i) {
        return i.toggle(_this.inputValue);
      });
      this.content.forEach(function (i) {
        return i.toggle(_this.inputValue, _this.isReverse);
      });

      this.$emit('input', this.inputValue);
      prev && (this.isBooted = true);
    },
    value: function value() {
      this.inputValue = this.value;
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },


  methods: {
    init: function init() {
      var _this2 = this;

      this.$children.forEach(function (i) {
        if (i.$options._componentTag === 'v-stepper-step') {
          _this2.steps.push(i);
        } else if (i.$options._componentTag === 'v-stepper-content') {
          i.isVertical = _this2.vertical;
          _this2.content.push(i);
        }
      });

      this.inputValue = this.value || this.steps[0].step || 1;
    },
    stepClick: function stepClick(step) {
      this.inputValue = step;
    }
  },

  render: function render(h) {
    return h('div', {
      'class': this.classes
    }, this.$slots.default);
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'stepper-step',

  inject: ['stepClick'],

  data: function data() {
    return {
      isActive: false,
      isInactive: true
    };
  },


  props: {
    complete: Boolean,
    completeIcon: {
      type: String,
      default: 'check'
    },
    editIcon: {
      type: String,
      default: 'edit'
    },
    errorIcon: {
      type: String,
      default: 'warning'
    },
    editable: Boolean,
    rules: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    step: [Number, String]
  },

  computed: {
    classes: function classes() {
      return {
        'stepper__step': true,
        'stepper__step--active': this.isActive,
        'stepper__step--editable': this.editable,
        'stepper__step--inactive': this.isInactive,
        'stepper__step--error': this.hasError,
        'stepper__step--complete': this.complete
      };
    },
    hasError: function hasError() {
      return this.rules.some(function (i) {
        return i() !== true;
      });
    }
  },

  methods: {
    click: function click() {
      if (this.editable) {
        this.stepClick(this.step);
      }
    },
    toggle: function toggle(step) {
      this.isActive = step.toString() === this.step.toString();
      this.isInactive = Number(step) < Number(this.step);
    }
  },

  render: function render(h) {
    var data = {
      'class': this.classes,
      directives: [{
        name: 'ripple',
        value: this.editable
      }],
      on: {
        click: this.click
      }
    };
    var stepContent = void 0;

    if (this.hasError) {
      stepContent = [h('v-icon', {}, this.errorIcon)];
    } else if (this.complete) {
      if (this.editable) {
        stepContent = [h('v-icon', {}, this.editIcon)];
      } else {
        stepContent = [h('v-icon', {}, this.completeIcon)];
      }
    } else {
      stepContent = this.step;
    }

    var step = h('span', { 'class': 'stepper__step__step' }, stepContent);
    var label = h('div', { 'class': 'stepper__label' }, [this.$slots.default]);

    return h('div', data, [step, label]);
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'stepper-content',

  data: function data() {
    return {
      height: 0,
      isActive: false,
      isReverse: false,
      isVertical: false
    };
  },


  props: {
    step: {
      type: [Number, String],
      required: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'stepper__content': true
      };
    },
    computedTransition: function computedTransition() {
      return this.isReverse ? 'v-tab-reverse-transition' : 'v-tab-transition';
    },
    styles: function styles() {
      if (!this.isVertical) return {};

      return {
        height: !isNaN(this.height) ? this.height + 'px' : this.height
      };
    },
    wrapperClasses: function wrapperClasses() {
      return {
        'stepper__wrapper': true
      };
    }
  },

  watch: {
    isActive: function isActive() {
      if (!this.isVertical) {
        return;
      }

      if (this.isActive) {
        this.enter();
      } else {
        this.leave();
      }
    }
  },

  mounted: function mounted() {
    this.$refs.wrapper.addEventListener('transitionend', this.onTransition, false);
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.wrapper.removeEventListener('transitionend', this.onTransition, false);
  },


  methods: {
    onTransition: function onTransition() {
      if (!this.isActive) return;

      this.height = 'auto';
    },
    enter: function enter() {
      var _this = this;

      var scrollHeight = 0;

      // Render bug with height
      setTimeout(function () {
        scrollHeight = _this.$refs.wrapper.scrollHeight;
      }, 0);

      this.height = 0;

      // Give the collapsing element time to collapse
      setTimeout(function () {
        return _this.height = scrollHeight || 'auto';
      }, 450);
    },
    leave: function leave() {
      var _this2 = this;

      this.height = this.$refs.wrapper.clientHeight;
      setTimeout(function () {
        return _this2.height = 0;
      }, 0);
    },
    toggle: function toggle(step, reverse) {
      this.isActive = step.toString() === this.step.toString();
      this.isReverse = reverse;
    }
  },

  render: function render(h) {
    var contentData = {
      'class': this.classes
    };
    var wrapperData = {
      'class': this.wrapperClasses,
      style: this.styles,
      ref: 'wrapper'
    };

    if (!this.isVertical) {
      contentData.directives = [{
        name: 'show',
        value: this.isActive
      }];
    }

    var wrapper = h('div', wrapperData, [this.$slots.default]);
    var content = h('div', contentData, [wrapper]);

    return h(this.computedTransition, {
      on: this.$listeners
    }, [content]);
  }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataTable__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EditDialog__ = __webpack_require__(117);




var TableOverflow = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('table__overflow');

/* harmony default export */ __webpack_exports__["a"] = ({
  DataTable: __WEBPACK_IMPORTED_MODULE_1__DataTable__["a" /* default */],
  EditDialog: __WEBPACK_IMPORTED_MODULE_2__EditDialog__["a" /* default */],
  TableOverflow: TableOverflow
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_head__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_body__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_foot__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_progress__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_filterable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_helpers__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'datatable',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_head__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_body__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_foot__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_progress__["a" /* default */]],

  data: function data() {
    return {
      all: false,
      searchLength: 0,
      defaultPagination: {
        page: 1,
        rowsPerPage: 5,
        descending: false,
        totalItems: 0
      }
    };
  },


  props: {
    headers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    headerText: {
      type: String,
      default: 'text'
    },
    hideActions: Boolean,
    noResultsText: {
      type: String,
      default: 'No matching records found'
    },
    rowsPerPageItems: {
      type: Array,
      default: function _default() {
        return [5, 10, 25, { text: 'All', value: -1 }];
      }
    },
    rowsPerPageText: {
      type: String,
      default: 'Rows per page:'
    },
    selectAll: [Boolean, String],
    search: {
      required: false
    },
    filter: {
      type: Function,
      default: function _default(val, search) {
        return val !== null && ['undefined', 'boolean'].indexOf(typeof val === 'undefined' ? 'undefined' : _typeof(val)) === -1 && val.toString().toLowerCase().indexOf(search) !== -1;
      }
    },
    customFilter: {
      type: Function,
      default: function _default(items, search, filter) {
        search = search.toString().toLowerCase();
        return items.filter(function (i) {
          return Object.keys(i).some(function (j) {
            return filter(i[j], search);
          });
        });
      }
    },
    customSort: {
      type: Function,
      default: function _default(items, index, descending) {
        if (index === null) return items;

        return items.sort(function (a, b) {
          var sortA = Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["g" /* getObjectValueByPath */])(a, index);
          var sortB = Object(__WEBPACK_IMPORTED_MODULE_5__util_helpers__["g" /* getObjectValueByPath */])(b, index);

          if (descending) {
            var _ref = [sortB, sortA];
            sortA = _ref[0];
            sortB = _ref[1];
          }

          if (!isNaN(sortA) && !isNaN(sortB)) return sortA - sortB;else if (sortA == null && sortB == null) return 0;

          var _map = [sortA, sortB].map(function (s) {
            return s.toLocaleLowerCase();
          });

          var _map2 = _slicedToArray(_map, 2);

          sortA = _map2[0];
          sortB = _map2[1];

          if (sortA > sortB) return 1;
          if (sortA < sortB) return -1;

          return 0;
        });
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    totalItems: {
      type: Number,
      default: null
    },
    loading: {
      type: [Boolean, String],
      default: false
    },
    selectedKey: {
      type: String,
      default: 'id'
    },
    pagination: {
      type: Object,
      default: null
    }
  },

  computed: {
    computedPagination: function computedPagination() {
      return this.pagination || this.defaultPagination;
    },
    hasSelectAll: function hasSelectAll() {
      return this.selectAll !== undefined && this.selectAll !== false;
    },
    itemsLength: function itemsLength() {
      if (this.search) return this.searchLength;
      return this.totalItems || this.items.length;
    },
    indeterminate: function indeterminate() {
      return this.hasSelectAll && this.someItems && !this.everyItem;
    },
    everyItem: function everyItem() {
      var _this = this;

      return this.filteredItems.length && this.filteredItems.every(function (i) {
        return _this.isSelected(i);
      });
    },
    someItems: function someItems() {
      var _this2 = this;

      return this.filteredItems.some(function (i) {
        return _this2.isSelected(i);
      });
    },
    getPage: function getPage() {
      return this.computedPagination.rowsPerPage === Object(this.computedPagination.rowsPerPage) ? this.computedPagination.rowsPerPage.value : this.computedPagination.rowsPerPage;
    },
    pageStart: function pageStart() {
      return this.getPage === -1 ? 0 : (this.computedPagination.page - 1) * this.getPage;
    },
    pageStop: function pageStop() {
      return this.getPage === -1 ? this.itemsLength : this.computedPagination.page * this.getPage;
    },
    filteredItems: function filteredItems() {
      if (this.totalItems) return this.items;

      var items = this.items.slice();
      var hasSearch = typeof this.search !== 'undefined' && this.search !== null;

      if (hasSearch) {
        items = this.customFilter(items, this.search, this.filter);
        this.searchLength = items.length;
      }

      items = this.customSort(items, this.computedPagination.sortBy, this.computedPagination.descending);

      return this.hideActions && !this.pagination ? items : items.slice(this.pageStart, this.pageStop);
    },
    selected: function selected() {
      var _this3 = this;

      var selected = {};
      this.value.forEach(function (i) {
        return selected[i[_this3.selectedKey]] = true;
      });
      return selected;
    }
  },

  watch: {
    indeterminate: function indeterminate(val) {
      if (val) this.all = true;
    },
    someItems: function someItems(val) {
      if (!val) this.all = false;
    },
    search: function search() {
      this.updatePagination({ page: 1 });
    },
    everyItem: function everyItem(val) {
      if (val) this.all = true;
    }
  },

  methods: {
    updatePagination: function updatePagination(val) {
      if (this.pagination) return this.$emit('update:pagination', Object.assign({}, this.pagination, val));else this.defaultPagination = Object.assign({}, this.defaultPagination, val);
    },
    isSelected: function isSelected(item) {
      return this.selected[item[this.selectedKey]];
    },
    sort: function sort(index) {
      if (this.computedPagination.sortBy === null) {
        this.updatePagination({ sortBy: index, descending: false });
      } else if (this.computedPagination.sortBy === index && !this.computedPagination.descending) {
        this.updatePagination({ descending: true });
      } else if (this.computedPagination.sortBy !== index) {
        this.updatePagination({ sortBy: index, descending: false });
      } else {
        this.updatePagination({ sortBy: null, descending: null });
      }
    },
    genTR: function genTR(children) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.$createElement('tr', data, children);
    },
    toggle: function toggle(value) {
      var _this4 = this;

      var selected = Object.assign({}, this.selected);
      this.filteredItems.forEach(function (i) {
        return selected[i[_this4.selectedKey]] = value;
      });

      this.$emit('input', this.items.filter(function (i) {
        return selected[i[_this4.selectedKey]];
      }));
    }
  },

  created: function created() {
    var firstSortable = this.headers.find(function (h) {
      return !('sortable' in h) || h.sortable;
    });
    this.defaultPagination.sortBy = firstSortable ? firstSortable.value : null;

    this.updatePagination(Object.assign({}, this.defaultPagination, this.pagination));
  },
  render: function render(h) {
    return h('v-table-overflow', {}, [h('table', {
      'class': {
        'datatable table': true,
        'datatable--select-all': this.selectAll !== false
      }
    }, [this.genTHead(), this.genTProgress(), this.genTBody(), this.hideActions ? null : this.genTFoot()])]);
  }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTHead: function genTHead() {
      var _this = this;

      var children = [];

      if (this.$scopedSlots.headers) {
        var row = this.$scopedSlots.headers({
          headers: this.headers,
          indeterminate: this.indeterminate,
          all: this.all
        });

        children = row.length && row[0].tag === 'tr' ? row : this.genTR(row);
      } else {
        var _row = this.headers.map(function (o) {
          return _this.genHeader(o);
        });
        var checkbox = this.$createElement('v-checkbox', {
          props: {
            dark: this.dark,
            light: this.light,
            color: this.selectAll === true && '' || this.selectAll,
            hideDetails: true,
            inputValue: this.all,
            indeterminate: this.indeterminate
          },
          on: { change: this.toggle }
        });

        this.hasSelectAll && _row.unshift(this.$createElement('th', [checkbox]));

        children = this.genTR(_row);
      }

      return this.$createElement('thead', [children]);
    },
    genHeader: function genHeader(header) {
      var array = [this.$scopedSlots.headerCell ? this.$scopedSlots.headerCell({ header: header }) : header[this.headerText]];

      return this.$createElement.apply(this, ['th'].concat(_toConsumableArray(this.genHeaderData(header, array))));
    },
    genHeaderData: function genHeaderData(header, children) {
      var _this2 = this;

      var beingSorted = false;
      var classes = ['column'];
      var data = {};

      if ('sortable' in header && header.sortable || !('sortable' in header)) {
        data.on = { click: function click() {
            return _this2.sort(header.value);
          } };
        !('value' in header) && console.warn('Data table headers must have a value property that corresponds to a value in the v-model array');

        classes.push('sortable');
        var icon = this.$createElement('v-icon', 'arrow_upward');
        header.align && header.align === 'left' && children.push(icon) || children.unshift(icon);

        beingSorted = this.computedPagination.sortBy === header.value;
        beingSorted && classes.push('active');
        beingSorted && this.computedPagination.descending && classes.push('desc') || classes.push('asc');
      }

      header.align && classes.push('text-xs-' + header.align) || classes.push('text-xs-right');

      data.class = classes;

      return [data, children];
    }
  }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTBody: function genTBody() {
      var _this = this;

      var children = [];

      if (!this.itemsLength) {
        children = [this.genEmptyBody(this.noDataText)];
      } else if (!this.filteredItems.length) {
        children = [this.genEmptyBody(this.noResultsText)];
      } else {
        children = this.filteredItems.map(function (item, index) {
          var props = { item: item, index: index };

          Object.defineProperty(props, 'selected', {
            get: function get() {
              return _this.selected[item[_this.selectedKey]];
            },
            set: function set(value) {
              var selected = _this.value.slice();
              value && selected.push(item) || (selected = selected.filter(function (i) {
                return i[_this.selectedKey] !== item[_this.selectedKey];
              }));
              _this.$emit('input', selected);
            }
          });

          var row = _this.$scopedSlots.items(props);

          if (row.length && row[0].tag === 'td') {
            return _this.genTR(row, { attrs: { active: _this.isSelected(item) } });
          } else {
            return row;
          }
        });
      }

      return this.$createElement('tbody', children);
    },
    genEmptyBody: function genEmptyBody(text) {
      return this.genTR([this.$createElement('td', {
        'class': 'text-xs-center',
        attrs: { colspan: '100%' }
      }, text)]);
    }
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genPrevIcon: function genPrevIcon() {
      var _this = this;

      return this.$createElement('v-btn', {
        props: {
          disabled: this.computedPagination.page === 1,
          icon: true,
          flat: true
        },
        nativeOn: { click: function click() {
            return _this.computedPagination.page--;
          } }
      }, [this.$createElement('v-icon', 'chevron_left')]);
    },
    genNextIcon: function genNextIcon() {
      var _this2 = this;

      var disabled = this.computedPagination.rowsPerPage < 0 || this.computedPagination.page * this.computedPagination.rowsPerPage >= this.itemsLength || this.pageStop < 0;

      return this.$createElement('v-btn', {
        props: {
          disabled: disabled,
          icon: true,
          flat: true
        },
        nativeOn: { click: function click() {
            return _this2.computedPagination.page++;
          } }
      }, [this.$createElement('v-icon', 'chevron_right')]);
    },
    genSelect: function genSelect() {
      var _this3 = this;

      return this.$createElement('div', {
        'class': 'datatable__actions__select'
      }, [this.rowsPerPageText, this.$createElement('v-select', {
        props: {
          items: this.rowsPerPageItems,
          value: this.computedPagination.rowsPerPage,
          hideDetails: true,
          auto: true
        },
        on: { input: function input(val) {
            _this3.computedPagination.rowsPerPage = val;_this3.computedPagination.page = 1;
          } }
      })]);
    },
    genPagination: function genPagination() {
      var pagination = '–';

      if (this.itemsLength) {
        var stop = this.itemsLength < this.pageStop || this.pageStop < 0 ? this.itemsLength : this.pageStop;

        pagination = this.$scopedSlots.pageText ? this.$scopedSlots.pageText({
          pageStart: this.pageStart + 1,
          pageStop: stop,
          itemsLength: this.itemsLength
        }) : this.pageStart + 1 + '-' + stop + ' of ' + this.itemsLength;
      }

      return this.$createElement('div', {
        'class': 'datatable__actions__pagination'
      }, [pagination]);
    },
    genActions: function genActions() {
      return [this.$createElement('div', {
        'class': 'datatable__actions'
      }, [this.genSelect(), this.genPagination(), this.genPrevIcon(), this.genNextIcon()])];
    },
    genTFoot: function genTFoot() {
      return this.$createElement('tfoot', [this.genTR([this.$createElement('td', {
        attrs: { colspan: '100%' }
      }, this.genActions())])]);
    }
  }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      color: ''
    };
  },


  watch: {
    loading: function loading(val) {
      if (val) this.color = val;
    }
  },

  methods: {
    genTProgress: function genTProgress() {
      var loader = this.$createElement('v-progress-linear', {
        props: {
          primary: this.color === 'primary',
          secondary: this.color === 'secondary',
          success: this.color === 'success',
          info: this.color === 'info',
          warning: this.color === 'warning',
          error: this.color === 'error',
          indeterminate: true,
          height: 3,
          active: !!this.loading
        }
      });

      var col = this.$createElement('th', {
        class: 'column',
        attrs: {
          colspan: '100%'
        }
      }, [loader]);

      return this.$createElement('thead', { class: 'datatable__progress' }, [this.genTR([col])]);
    }
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'edit-dialog',

  data: function data() {
    return {
      isActive: false,
      isSaving: false
    };
  },


  props: {
    cancelText: {
      default: 'Cancel'
    },
    large: Boolean,
    lazy: Boolean,
    saveText: {
      default: 'Save'
    },
    transition: {
      type: String,
      default: 'v-slide-x-reverse-transition'
    }
  },

  watch: {
    isActive: function isActive(val) {
      val && this.$emit('open') && this.$nextTick(this.focus);
      if (!val) {
        !this.isSaving && this.$emit('cancel');
        this.isSaving && this.$emit('close');
        this.isSaving = false;
      }
    }
  },

  methods: {
    cancel: function cancel() {
      this.isActive = false;
    },
    focus: function focus() {
      var input = this.$el.querySelector('input');
      input && setTimeout(function () {
        return input.focus();
      }, 0);
    },
    save: function save() {
      this.isSaving = true;
      this.isActive = false;
      this.$emit('save');
    },
    genButton: function genButton(fn, text) {
      return this.$createElement('v-btn', {
        props: {
          flat: true,
          primary: true,
          light: true
        },
        nativeOn: { click: fn }
      }, text);
    },
    genActions: function genActions() {
      return this.$createElement('div', {
        'class': 'small-dialog__actions',
        directives: [{
          name: 'show',
          value: this.large
        }]
      }, [this.genButton(this.cancel, this.cancelText), this.genButton(this.save, this.saveText)]);
    },
    genContent: function genContent() {
      var _this = this;

      return this.$createElement('div', {
        'class': 'small-dialog__content',
        on: {
          keydown: function keydown(e) {
            e.keyCode === 27 && _this.cancel();
            e.keyCode === 13 && _this.save();
          }
        }
      }, [this.$slots.input]);
    }
  },

  render: function render(h) {
    var _this2 = this;

    return h('v-menu', {
      'class': 'small-dialog',
      props: {
        transition: this.transition,
        origin: 'top right',
        right: true,
        value: this.isActive,
        closeOnContentClick: false,
        lazy: this.lazy
      },
      on: {
        input: function input(val) {
          return _this2.isActive = val;
        }
      }
    }, [h('a', {
      domProps: { href: 'javascript:;' },
      slot: 'activator'
    }, [this.$slots.default]), this.genContent(), this.genActions()]);
  }
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tabs__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabsItem__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabsContent__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabsBar__ = __webpack_require__(122);






var TabsSlider = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleFunctional */])('tabs__slider', 'li');

var TabsItems = {
  name: 'tabs-items',

  render: function render(h) {
    return h('div', { 'class': { 'tabs__items': true } }, [this.$slots.default]);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  TabsItem: __WEBPACK_IMPORTED_MODULE_2__TabsItem__["a" /* default */],
  TabsItems: TabsItems,
  Tabs: __WEBPACK_IMPORTED_MODULE_1__Tabs__["a" /* default */],
  TabsContent: __WEBPACK_IMPORTED_MODULE_3__TabsContent__["a" /* default */],
  TabsBar: __WEBPACK_IMPORTED_MODULE_4__TabsBar__["a" /* default */],
  TabsSlider: TabsSlider
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'tabs',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  provide: function provide() {
    var _this = this;

    return {
      slider: this.slider,
      tabClick: this.tabClick,
      isScrollable: function isScrollable() {
        return _this.scrollable;
      },
      isMobile: function isMobile() {
        return _this.isMobile;
      }
    };
  },
  data: function data() {
    return {
      activators: [],
      activeIndex: null,
      isMobile: false,
      reverse: false,
      target: null,
      resizeDebounce: {},
      tabsSlider: null,
      targetEl: null,
      tabsContainer: null
    };
  },


  props: {
    centered: Boolean,
    fixed: Boolean,
    grow: Boolean,
    icons: Boolean,
    mobileBreakPoint: {
      type: [Number, String],
      default: 1024
    },
    value: String,
    scrollable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'tabs': true,
        'tabs--centered': this.centered,
        'tabs--fixed': this.fixed,
        'tabs--grow': this.grow,
        'tabs--icons': this.icons,
        'tabs--mobile': this.isMobile,
        'tabs--scroll-bars': this.scrollable,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  watch: {
    value: function value() {
      this.tabClick(this.value);
    },
    activeIndex: function activeIndex() {
      this.updateTabs();
      this.$emit('input', this.target);
      this.isBooted = true;
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    this.$vuetify.load(function () {
      window.addEventListener('resize', _this2.resize, { passive: true });
      _this2.resize();

      var activators = _this2.$slots.activators;

      if (!activators || !activators.length || !activators[0].componentInstance) return;

      var bar = activators[0].componentInstance.$children;
      // // This is a workaround to detect if link is active
      // // when being used as a router or nuxt link
      var i = bar.findIndex(function (t) {
        return t.$el.firstChild.classList.contains('tabs__item--active');
      });

      var tab = _this2.value || (bar[i !== -1 ? i : 0] || {}).action;

      tab && _this2.tabClick(tab) && _this2.resize();
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resize, { passive: true });
  },


  methods: {
    resize: function resize() {
      var _this3 = this;

      clearTimeout(this.resizeDebounce);

      this.resizeDebounce = setTimeout(function () {
        _this3.isMobile = window.innerWidth < _this3.mobileBreakPoint;
        _this3.slider();
      }, 50);
    },
    slider: function slider(el) {
      var _this4 = this;

      this.tabsSlider = this.tabsSlider || this.$el.querySelector('.tabs__slider');
      this.tabsContainer = this.tabsContainer || this.$el.querySelector('.tabs__container');

      if (!this.tabsSlider || !this.tabsContainer) return;

      this.targetEl = el || this.targetEl;

      if (!this.targetEl) return;

      // Gives DOM time to paint when
      // processing slider for
      // dynamic tabs
      this.$nextTick(function () {
        // #684 Calculate width as %
        var width = _this4.targetEl.scrollWidth / _this4.tabsContainer.clientWidth * 100;

        _this4.tabsSlider.style.width = width + '%';
        _this4.tabsSlider.style.left = _this4.targetEl.offsetLeft + 'px';
      });
    },
    tabClick: function tabClick(target) {
      var _this5 = this;

      var setActiveIndex = function setActiveIndex(index) {
        if (_this5.activeIndex === index) {
          // #762 update tabs display
          // In case tabs count got changed but activeIndex didn't
          _this5.updateTabs();
        } else {
          _this5.activeIndex = index;
        }
      };

      this.target = target;

      if (!this.$refs.content) {
        setActiveIndex(target);
        return;
      }

      this.$nextTick(function () {
        var nextIndex = _this5.$refs.content.$children.findIndex(function (i) {
          return i.id === _this5.target;
        });
        _this5.reverse = nextIndex < _this5.activeIndex;
        setActiveIndex(nextIndex);
      });
    },
    updateTabs: function updateTabs() {
      var _this6 = this;

      var activators = this.$slots.activators;

      if (!activators || !activators.length || activators.length && !activators[0].componentInstance) return;

      activators[0].componentInstance.$children.filter(function (i) {
        return i.$options._componentTag === 'v-tabs-item';
      }).forEach(function (i) {
        return i.toggle(_this6.target);
      });

      this.$refs.content && this.$refs.content.$children.forEach(function (i) {
        return i.toggle(_this6.target, _this6.reverse, _this6.isBooted);
      });
    }
  },

  render: function render(h) {
    var content = [];
    var slot = [];
    var iter = this.$slots.default || [];

    iter.forEach(function (c) {
      if (!c.componentOptions) slot.push(c);else if (c.componentOptions.tag === 'v-tabs-content') content.push(c);else slot.push(c);
    });

    var tabs = content.length ? h('v-tabs-items', {
      ref: 'content'
    }, content) : null;

    return h('div', {
      'class': this.classes
    }, [slot, this.$slots.activators, tabs]);
  }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'tabs-item',

  inject: ['slider', 'tabClick'],

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */]],

  data: function data() {
    return {
      isActive: false,
      defaultActiveClass: 'tabs__item--active'
    };
  },


  props: {
    activeClass: {
      type: String,
      default: 'tabs__item--active'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'tabs__item': true,
        'tabs__item--active': !this.to && this.isActive,
        'tabs__item--disabled': this.disabled
      };
    },
    action: function action() {
      var to = this.to || this.href;

      if (!to || to === Object(to)) return this._uid;

      return to.replace('#', '');
    }
  },

  watch: {
    $route: function $route() {
      this.to && this.callSlider();
    }
  },

  mounted: function mounted() {
    this.callSlider();
  },


  methods: {
    callSlider: function callSlider() {
      var _this = this;

      setTimeout(function () {
        _this.$el.firstChild.classList.contains('tabs__item--active') && _this.slider(_this.$el);
      }, 0);
    },
    click: function click(e) {
      e.preventDefault();

      if (!this.to && !this.href) return;

      if (!this.to) {
        this.tabClick(this.action);
      }

      this.callSlider();
    },
    toggle: function toggle(action) {
      var _this2 = this;

      this.isActive = this.action === action;

      this.$nextTick(function () {
        _this2.isActive && _this2.slider(_this2.$el);
      });
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    return h('li', {
      'class': 'tabs__li'
    }, [h(tag, data, this.$slots.default)]);
  }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'tabs-content',

  data: function data() {
    return {
      isActive: false,
      reverse: false
    };
  },


  props: {
    id: {
      type: String,
      required: true
    },
    transition: {
      type: String,
      default: 'v-tab-transition'
    },
    reverseTransition: {
      type: String,
      default: 'v-tab-reverse-transition'
    }
  },

  computed: {
    computedTransition: function computedTransition() {
      return this.reverse ? this.reverseTransition : this.transition;
    }
  },

  methods: {
    toggle: function toggle(target, reverse, showTransition) {
      this.$el.style.transition = !showTransition ? 'none' : null;
      this.reverse = reverse;
      this.isActive = this.id === target;
    }
  },

  render: function render(h) {
    return h(this.computedTransition, {}, [h('div', {
      'class': 'tabs__content',
      domProps: { id: this.id },
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    }, [this.$slots.default])]);
  }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_resizable__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icons_Icon__ = __webpack_require__(3);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'tabs-bar',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_resizable__["a" /* default */]],

  inject: ['isScrollable', 'isMobile'],

  data: function data() {
    return {
      isOverflowing: false,
      scrollOffset: 0,
      itemOffset: 0,
      startX: 0
    };
  },


  computed: {
    classes: function classes() {
      return {
        'tabs__bar': true
      };
    },
    containerClasses: function containerClasses() {
      return {
        'tabs__container': true
      };
    },
    wrapperClasses: function wrapperClasses() {
      return {
        'tabs__wrapper': true,
        'tabs__wrapper--scrollable': this.isScrollable(),
        'tabs__wrapper--overflow': this.isOverflowing
      };
    },
    containerStyles: function containerStyles() {
      return {
        'transform': 'translateX(' + -this.scrollOffset + 'px)'
      };
    },
    leftIconVisible: function leftIconVisible() {
      return !this.isMobile() && this.isScrollable() && this.isOverflowing && this.scrollOffset > 0;
    },
    rightIconVisible: function rightIconVisible() {
      if (this.isMobile() || !this.isScrollable() || !this.isOverflowing) return;

      // Check one scroll ahead to know the width of right-most item
      var item = this.newOffsetRight(this.scrollOffset, this.itemOffset);
      var lastItemWidth = item && this.$refs.container.children[item.index].clientWidth || 0;

      return this.$refs.container.scrollWidth - (this.scrollOffset + this.$refs.container.clientWidth) > lastItemWidth * 0.30;
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      _this.onResize();
    });
  },


  methods: {
    genContainer: function genContainer() {
      return this.$createElement('ul', {
        'class': this.containerClasses,
        'style': this.containerStyles,
        ref: 'container'
      }, this.$slots.default);
    },
    genIcon: function genIcon(direction) {
      return this.$createElement(__WEBPACK_IMPORTED_MODULE_1__components_icons_Icon__["a" /* default */], {
        props: _defineProperty({}, '' + direction, true),
        style: { display: 'inline-flex' },
        on: {
          click: this['scroll' + (direction.charAt(0).toUpperCase() + direction.slice(1))]
        }
      }, 'chevron_' + direction);
    },
    genWrapper: function genWrapper() {
      return this.$createElement('div', {
        class: this.wrapperClasses,
        directives: [{
          name: 'touch',
          value: {
            start: this.start,
            move: this.move,
            end: this.end
          }
        }]
      }, [this.genContainer()]);
    },
    start: function start(e) {
      this.startX = this.scrollOffset + e.touchstartX;
      this.$refs.container.style.transition = 'none';
    },
    move: function move(e) {
      var offset = this.startX - e.touchmoveX;
      this.scrollOffset = offset;
    },
    end: function end(e) {
      this.$refs.container.style.transition = null;
      if (this.scrollOffset < 0) {
        this.scrollOffset = 0;
      } else if (this.scrollOffset >= this.$refs.container.scrollWidth) {
        var lastItem = this.$refs.container.children[this.$refs.container.children.length - 1];
        this.scrollOffset = this.$refs.container.scrollWidth - lastItem.clientWidth;
      }
    },
    scrollLeft: function scrollLeft() {
      var _newOffset = this.newOffset('Left'),
          offset = _newOffset.offset,
          index = _newOffset.index;

      this.scrollOffset = offset;
      this.itemOffset = index;
    },
    scrollRight: function scrollRight() {
      var _newOffset2 = this.newOffset('Right'),
          offset = _newOffset2.offset,
          index = _newOffset2.index;

      this.scrollOffset = offset;
      this.itemOffset = index;
    },
    onResize: function onResize() {
      this.isOverflowing = this.$refs.container.clientWidth < this.$refs.container.scrollWidth;
    },
    newOffset: function newOffset(direction) {
      return this['newOffset' + direction](this.scrollOffset, this.itemOffset);
    },
    newOffsetLeft: function newOffsetLeft(currentOffset, currentIndex) {
      var items = this.$refs.container.children;
      var offset = 0;

      for (var index = currentIndex - 1; index >= 0; index--) {
        if (!items[index].classList.contains('tabs__slider')) {
          if (offset + items[index].clientWidth >= this.$refs.container.clientWidth) {
            return { offset: currentOffset - offset, index: index + 1 };
          }
          offset += items[index].clientWidth;
        }
      }

      return { offset: 0, index: 0 };
    },
    newOffsetRight: function newOffsetRight(currentOffset, currentIndex) {
      var items = this.$refs.container.children;
      var offset = currentOffset;

      for (var index = currentIndex; index < items.length; index++) {
        if (!items[index].classList.contains('tabs__slider')) {
          if (offset + items[index].clientWidth > currentOffset + this.$refs.container.clientWidth) {
            return { offset: offset, index: index };
          }
          offset += items[index].clientWidth;
        }
      }

      return null;
    }
  },

  render: function render(h) {
    return h('div', {
      'class': this.classes
    }, [this.genWrapper(), this.leftIconVisible ? this.genIcon('left') : null, this.rightIconVisible ? this.genIcon('right') : null]);
  }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextField__ = __webpack_require__(124);


/* harmony default export */ __webpack_exports__["a"] = ({
  TextField: __WEBPACK_IMPORTED_MODULE_0__TextField__["a" /* default */]
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'text-field',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */]],

  inheritAttrs: false,

  data: function data() {
    return {
      hasFocused: false,
      inputHeight: null
    };
  },


  props: {
    autofocus: Boolean,
    autoGrow: Boolean,
    counter: Boolean,
    fullWidth: Boolean,
    max: [Number, String],
    min: [Number, String],
    multiLine: Boolean,
    placeholder: String,
    prefix: String,
    rows: {
      default: 5
    },
    singleLine: Boolean,
    solo: Boolean,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--text-field': true,
        'input-group--single-line': this.singleLine,
        'input-group--solo': this.solo,
        'input-group--multi-line': this.multiLine,
        'input-group--full-width': this.fullWidth,
        'input-group--prefix': this.prefix,
        'input-group--suffix': this.suffix
      };
    },
    hasError: function hasError() {
      return this.validations.length || this.errorMessages.length > 0 || !this.counterIsValid() || !this.validateIsValid() || this.error;
    },
    count: function count() {
      var inputLength = (this.inputValue && this.inputValue.toString() || '').length;
      var min = inputLength;

      if (this.counterMin !== 0 && inputLength < this.counterMin) {
        min = this.counterMin;
      }

      return min + ' / ' + this.counterMax;
    },
    counterMin: function counterMin() {
      var parsedMin = parseInt(this.min, 10);
      return isNaN(parsedMin) ? 0 : parsedMin;
    },
    counterMax: function counterMax() {
      var parsedMax = parseInt(this.max, 10);
      return isNaN(parsedMax) ? 25 : parsedMax;
    },

    inputValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        if (this.modifiers.trim) {
          val = val.trim();
        }

        if (this.modifiers.number) {
          val = Number(val);
        }

        if (!this.modifiers.lazy) {
          this.$emit('input', val);
        }

        this.lazyValue = val;
      }
    },
    isDirty: function isDirty() {
      return this.lazyValue !== null && typeof this.lazyValue !== 'undefined' && this.lazyValue.toString().length > 0;
    }
  },

  watch: {
    focused: function focused(val) {
      this.hasFocused = true;

      !val && this.$emit('change', this.lazyValue);
    },
    value: function value() {
      this.lazyValue = this.value;
      this.validate();
      this.multiLine && this.autoGrow && this.calculateInputHeight();
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      _this.multiLine && _this.autoGrow && _this.calculateInputHeight();
      _this.autofocus && _this.focus();
    });
  },


  methods: {
    calculateInputHeight: function calculateInputHeight() {
      var height = this.$refs.input.scrollHeight;
      var minHeight = this.rows * 24;
      this.inputHeight = height < minHeight ? minHeight : height;
    },
    onInput: function onInput(e) {
      this.inputValue = e.target.value;
      this.multiLine && this.autoGrow && this.calculateInputHeight();
    },
    blur: function blur(e) {
      var _this2 = this;

      this.validate();
      this.$nextTick(function () {
        return _this2.focused = false;
      });
      this.$emit('blur', e);
    },
    focus: function focus(e) {
      this.focused = true;
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    genCounter: function genCounter() {
      return this.$createElement('div', {
        'class': {
          'input-group__counter': true,
          'input-group__counter--error': !this.counterIsValid()
        }
      }, this.count);
    },
    genInput: function genInput() {
      var tag = this.multiLine ? 'textarea' : 'input';

      var data = {
        style: {
          'height': this.inputHeight && this.inputHeight + 'px'
        },
        domProps: {
          autofucus: this.autofocus,
          disabled: this.disabled,
          required: this.required,
          value: this.lazyValue
        },
        attrs: _extends({}, this.$attrs, {
          tabindex: this.tabindex
        }),
        on: _extends({}, this.$listeners, {
          blur: this.blur,
          input: this.onInput,
          focus: this.focus
        }),
        ref: 'input'
      };

      if (this.placeholder) data.domProps.placeholder = this.placeholder;

      if (!this.counter) {
        if (![undefined, null].includes(this.max)) data.attrs.max = this.max;
        if (![undefined, null].includes(this.min)) data.attrs.min = this.min;
      }

      if (this.multiLine) {
        data.domProps.rows = this.rows;
      } else {
        data.domProps.type = this.type;
      }

      var children = [this.$createElement(tag, data)];

      this.prefix && children.unshift(this.genFix('prefix'));
      this.suffix && children.push(this.genFix('suffix'));

      return children;
    },
    genFix: function genFix(type) {
      return this.$createElement('span', {
        'class': 'input-group--text-field__' + type
      }, this[type]);
    },

    counterIsValid: function counterIsValid() {
      var val = this.inputValue && this.inputValue.toString() || '';

      return !this.counter || val.length >= this.counterMin && val.length <= this.counterMax;
    },
    validateIsValid: function validateIsValid() {
      return !this.required || this.required && this.isDirty || !this.hasFocused || this.hasFocused && this.focused;
    }
  },

  render: function render() {
    return this.genInputGroup(this.genInput(), { attrs: { tabindex: false } });
  }
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Snackbar__ = __webpack_require__(126);


/* harmony default export */ __webpack_exports__["a"] = ({
  Snackbar: __WEBPACK_IMPORTED_MODULE_0__Snackbar__["a" /* default */]
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'snackbar',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      activeTimeout: {}
    };
  },


  props: {
    absolute: Boolean,
    bottom: Boolean,
    left: Boolean,
    multiLine: Boolean,
    right: Boolean,
    top: Boolean,
    timeout: {
      type: Number,
      default: 6000
    },
    vertical: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'snack': true,
        'snack--active': this.isActive,
        'snack--absolute': this.absolute,
        'snack--bottom': this.bottom || !this.top,
        'snack--left': this.left,
        'snack--multi-line': this.multiLine && !this.vertical,
        'snack--right': this.right,
        'snack--top': this.top,
        'snack--vertical': this.vertical,
        'primary': this.primary,
        'secondary': this.secondary,
        'success': this.success,
        'info': this.info,
        'warning': this.warning,
        'error': this.error
      };
    },
    computedTransition: function computedTransition() {
      return this.top ? 'v-slide-y-transition' : 'v-slide-y-reverse-transition';
    }
  },

  watch: {
    isActive: function isActive() {
      var _this = this;

      clearTimeout(this.activeTimeout);

      if (this.isActive && this.timeout) {
        this.activeTimeout = setTimeout(function () {
          return _this.isActive = false;
        }, this.timeout);
      }
    }
  },

  render: function render(h) {
    var children = [];

    if (this.isActive) {
      children.push(h('div', {
        'class': 'snack__content'
      }, this.$slots.default));
    }

    return h('div', {
      'class': this.classes,
      on: this.$listeners
    }, [h(this.computedTransition, children)]);
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__badge__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__click_outside__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ripple__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__touch__ = __webpack_require__(131);






/* harmony default export */ __webpack_exports__["a"] = ({
  Badge: __WEBPACK_IMPORTED_MODULE_0__badge__["a" /* default */],
  ClickOutside: __WEBPACK_IMPORTED_MODULE_1__click_outside__["a" /* default */],
  Ripple: __WEBPACK_IMPORTED_MODULE_2__ripple__["a" /* default */],
  Tooltip: __WEBPACK_IMPORTED_MODULE_3__tooltip__["a" /* default */],
  Touch: __WEBPACK_IMPORTED_MODULE_4__touch__["a" /* default */]
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


function directive(el, binding) {
  var config = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* directiveConfig */])(binding, {
    icon: false,
    left: false,
    bottom: false,
    overlap: false,
    visible: true
  });

  if (!config.visible || binding.expression && !binding.value) {
    return unbind(el);
  }

  if (config.overlap) el.classList.add('badge--overlap');
  if (config.icon) el.classList.add('badge--icon');
  if (config.left) el.classList.add('badge--left');
  if (config.bottom) el.classList.add('badge--bottom');

  el.dataset.badge = config.value;
  el.classList.add('badge');
}

function unbind(el) {
  el.removeAttribute('data-badge');
  el.classList.remove('badge');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function directive(e, el, binding, v) {
  var cb = function cb() {
    return true;
  };

  if (binding.value) cb = binding.value;

  if (v.context.isActive && e && e.target && e.target !== el && !el.contains(e.target) && cb(e)) {
    v.context.isActive = false;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, v) {
    v.context.$vuetify.load(function () {
      var outside = document.querySelector('[data-app]');
      var click = function click(e) {
        return directive(e, el, binding, v);
      };
      outside.addEventListener('click', click, false);
      el._clickOutside = click;
    });
  },
  unbind: function unbind(el) {
    var outside = document.querySelector('[data-app]');
    outside && outside.removeEventListener('click', el._clickOutside, false);
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


function directive(el, binding) {
  var config = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* directiveConfig */])(binding, {
    top: true,
    visible: true
  });

  if (!config.visible || binding.expression && !binding.value) {
    return unbind(el);
  }

  unbind(el, binding, config);

  el.dataset.tooltip = config.html;
  el.dataset['tooltipLocation'] = config.value;
}

function unbind(el) {
  el.removeAttribute('data-tooltip');
  el.removeAttribute('data-tooltip-location');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var touchstart = function touchstart(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;

  var e = {
    touchstartX: touch.clientX,
    touchstartY: touch.clientY
  };

  wrapper.start && wrapper.start(Object.assign(event, e));
};

var touchend = function touchend(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;

  var e = {
    touchendX: touch.clientX,
    touchendY: touch.clientY
  };

  wrapper.end && wrapper.end(Object.assign(event, e));

  handleGesture(wrapper);
};

var touchmove = function touchmove(event, wrapper) {
  var touch = event.changedTouches[0];

  var e = {
    touchmoveX: touch.clientX,
    touchmoveY: touch.clientY,
    offsetX: touch.clientX - wrapper.touchstartX,
    offsetY: touch.clientY - wrapper.touchstartY
  };

  wrapper.move && wrapper.move(Object.assign(event, e));
};

var handleGesture = function handleGesture(wrapper) {
  var touchstartX = wrapper.touchstartX,
      touchendX = wrapper.touchendX,
      touchstartY = wrapper.touchstartY,
      touchendY = wrapper.touchendY;


  if (touchendX < touchstartX) {
    wrapper.left && wrapper.left(wrapper);
  }
  if (touchendX > touchstartX) {
    wrapper.right && wrapper.right(wrapper);
  }
  if (touchendY < touchstartY) {
    wrapper.up && wrapper.up(wrapper);
  }
  if (touchendY > touchstartY) {
    wrapper.down && wrapper.down(wrapper);
  }
};

function inserted(el, _ref) {
  var value = _ref.value;

  var wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };

  var target = value.parent ? el.parentNode : el;
  var options = value.options || {};

  target.addEventListener('touchstart', function (e) {
    return touchstart(e, wrapper);
  }, options);
  target.addEventListener('touchend', function (e) {
    return touchend(e, wrapper);
  }, options);
  target.addEventListener('touchmove', function (e) {
    return touchmove(e, wrapper);
  }, options);
}

function unbind(el, _ref2) {
  var value = _ref2.value;

  var target = value.parent ? el.parentNode : el;

  target.removeEventListener('touchstart', touchstart);
  target.removeEventListener('touchend', touchend);
  target.removeEventListener('touchmove', touchmove);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  inserted: inserted,
  unbind: unbind
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function load(cb) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (document.readyState === 'complete') {
    return setTimeout(cb, 0);
  }

  if (document.readyState === 'interactive' && i <= 10) {
    return setTimeout(function () {
      return load(cb, i + 1);
    }, 200);
  }

  window.addEventListener('load', cb);
}

/* harmony default export */ __webpack_exports__["a"] = (load);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vuetify.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(43),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\TotalWorkspace\\Node.js\\vuetify_template\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef94ba00", Component.options)
  } else {
    hotAPI.reload("data-v-ef94ba00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("1f4b6365", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ef94ba00\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/stylus-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ef94ba00\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/stylus-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, "\n.elevation-0 {\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12) !important;\n}\n.elevation-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12) !important;\n}\n.elevation-2 {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12) !important;\n}\n.elevation-3 {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12) !important;\n}\n.elevation-4 {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12) !important;\n}\n.elevation-5 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12) !important;\n}\n.elevation-6 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12) !important;\n}\n.elevation-7 {\n  box-shadow: 0 4px 5px -2px rgba(0,0,0,0.2), 0 7px 10px 1px rgba(0,0,0,0.14), 0 2px 16px 1px rgba(0,0,0,0.12) !important;\n}\n.elevation-8 {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12) !important;\n}\n.elevation-9 {\n  box-shadow: 0 5px 6px -3px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12) !important;\n}\n.elevation-10 {\n  box-shadow: 0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12) !important;\n}\n.elevation-11 {\n  box-shadow: 0 6px 7px -4px rgba(0,0,0,0.2), 0 11px 15px 1px rgba(0,0,0,0.14), 0 4px 20px 3px rgba(0,0,0,0.12) !important;\n}\n.elevation-12 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-13 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 13px 19px 2px rgba(0,0,0,0.14), 0 5px 24px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-14 {\n  box-shadow: 0 7px 9px -4px rgba(0,0,0,0.2), 0 14px 21px 2px rgba(0,0,0,0.14), 0 5px 26px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-15 {\n  box-shadow: 0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-16 {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-17 {\n  box-shadow: 0 8px 11px -5px rgba(0,0,0,0.2), 0 17px 26px 2px rgba(0,0,0,0.14), 0 6px 32px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-18 {\n  box-shadow: 0 9px 11px -5px rgba(0,0,0,0.2), 0 18px 28px 2px rgba(0,0,0,0.14), 0 7px 34px 6px rgba(0,0,0,0.12) !important;\n}\n.elevation-19 {\n  box-shadow: 0 9px 12px -6px rgba(0,0,0,0.2), 0 19px 29px 2px rgba(0,0,0,0.14), 0 7px 36px 6px rgba(0,0,0,0.12) !important;\n}\n.elevation-20 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 20px 31px 3px rgba(0,0,0,0.14), 0 8px 38px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-21 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 21px 33px 3px rgba(0,0,0,0.14), 0 8px 40px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-22 {\n  box-shadow: 0 10px 14px -6px rgba(0,0,0,0.2), 0 22px 35px 3px rgba(0,0,0,0.14), 0 8px 42px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-23 {\n  box-shadow: 0 11px 14px -7px rgba(0,0,0,0.2), 0 23px 36px 3px rgba(0,0,0,0.14), 0 9px 44px 8px rgba(0,0,0,0.12) !important;\n}\n.elevation-24 {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12) !important;\n}\n.application {\n  -webkit-backface-visibility: hidden;\n  min-height: 100vh;\n}\n.application--toolbar > main > .container {\n  min-height: calc(100vh - 64px);\n}\n.application--toolbar.application--footer > main > .container {\n  min-height: calc(100vh - 64px - 36px);\n}\n.application--footer > main > .container {\n  min-height: calc(100vh - 36px);\n}\n.application--footer-fixed > aside.navigation-drawer {\n  max-height: calc(100vh - 36px);\n}\n.application--footer-fixed.application--toolbar > aside.navigation-drawer.navigation-drawer--clipped {\n  max-height: calc(100vh - 64px - 36px);\n}\n.application--light {\n  background: #fafafa;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .system-bar {\n  background-color: #e0e0e0;\n  color: rgba(0,0,0,0.54);\n}\n.application--light .system-bar .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .system-bar--lights-out {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.application--light .toolbar {\n  background-color: #f5f5f5;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .btn {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--light .toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application--light .toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application--light .toolbar .btn.btn--icon,\n.application--light .toolbar .btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .toolbar .toolbar__item {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .toolbar__item:hover {\n  background: rgba(0,0,0,0.12);\n}\n.application--light .navigation-drawer {\n  background-color: #fff;\n}\n.application--light .navigation-drawer:after {\n  background-color: rgba(0,0,0,0.12);\n  content: '';\n  right: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 1px;\n}\n.application--light .navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application--light .navigation-drawer a,\n.application--light .navigation-drawer .subheader,\n.application--light .navigation-drawer .list,\n.application--light .navigation-drawer .icon {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .navigation-drawer .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .navigation-drawer .list {\n  background: #fff;\n}\n.application--light .navigation-drawer .list__tile {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .navigation-drawer .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .navigation-drawer .list--group__header--active .list__tile:after,\n.application--light .navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(0,0,0,0.12);\n}\n.application--light .btn {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--light .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application--light .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application--light .btn.btn--icon,\n.application--light .btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .footer {\n  background-color: #f5f5f5;\n}\n.application--light .card {\n  background-color: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .icon:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .input-group input,\n.application--light .input-group textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .input-group input:disabled,\n.application--light .input-group textarea:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group label {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--dirty .input-group__selections__comma {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .input-group:not(.input-group--focused):not(.input-group--error) .input-group__input .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group .input-group__counter {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group .input-group__details {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group .input-group__details:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .input-group.input-group--overflow .input-group__input:before,\n.application--light .input-group.input-group--segmented .input-group__input:before,\n.application--light .input-group.input-group--editable .input-group__input:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .input-group.input-group--disabled input,\n.application--light .input-group.input-group--disabled textarea {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(0,0,0,0.38) 0, rgba(0,0,0,0.38) 33%, transparent 0);\n}\n.application--light .input-group .input-group--text-field__prefix,\n.application--light .input-group .input-group--text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #009688;\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #fafafa;\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #009688;\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application--light .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd !important;\n}\n.application--light .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.12) !important;\n}\n.application--light .input-group.input-group--selection-controls.radio,\n.application--light .input-group.input-group--selection-controls.checkbox {\n  color: #009688;\n}\n.application--light .input-group.input-group--selection-controls.radio .icon,\n.application--light .input-group.input-group--selection-controls.checkbox .icon,\n.application--light .input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application--light .input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application--light .input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application--light .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application--light .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application--light .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application--light .input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(0,0,0,0.54);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application--light .input-group--slider .slider__track,\n.application--light .input-group--slider .slider__track-fill {\n  background: rgba(0,0,0,0.26);\n}\n.application--light .input-group--slider .slider__track__container:after {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application--light .input-group--slider .slider__tick {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application--light .input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(0,0,0,0.26);\n}\n.application--light .input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #000;\n}\n.application--light .input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.26);\n}\n.application--light .input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.38);\n}\n.application--light .input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(0,0,0,0.26);\n  border: 0px solid transparent;\n}\n.application--light .input-group--slider:focus .slider__track {\n  background: rgba(0,0,0,0.38);\n}\n.application--light .list {\n  background: #fff;\n}\n.application--light .list .list__tile:not(.list__tile--active) {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .list .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .list .subheader {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .list .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .tabs .tabs__item {\n  color: rgba(0,0,0,0.7);\n}\n.application--light .tabs .tabs__item.tabs__item--active {\n  color: #1976d2;\n}\n.application--light .tabs .tabs__item.tabs__item--disabled {\n  color: rgba(0,0,0,0.26);\n}\n.application--light .tabs .icon--left,\n.application--light .tabs .icon--right {\n  color: rgba(0,0,0,0.54);\n}\n.application--dark {\n  background: #303030;\n  color: #fff;\n}\n.application--dark .system-bar {\n  background-color: #000;\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .system-bar .icon {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .system-bar--lights-out {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.application--dark .toolbar {\n  background-color: #212121;\n  color: #fff;\n}\n.application--dark .toolbar .btn {\n  color: #fff;\n}\n.application--dark .toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--dark .toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application--dark .toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application--dark .toolbar .btn.btn--icon,\n.application--dark .toolbar .btn.btn--floating {\n  color: #fff;\n}\n.application--dark .toolbar .toolbar__item {\n  color: #fff;\n}\n.application--dark .toolbar .toolbar__item:hover {\n  background: rgba(255,255,255,0.12);\n}\n.application--dark .navigation-drawer {\n  background-color: #424242;\n}\n.application--dark .navigation-drawer:after {\n  background-color: rgba(255,255,255,0.12);\n  content: '';\n  right: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 1px;\n}\n.application--dark .navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application--dark .navigation-drawer a,\n.application--dark .navigation-drawer .subheader,\n.application--dark .navigation-drawer .list,\n.application--dark .navigation-drawer .icon {\n  color: #fff;\n}\n.application--dark .navigation-drawer .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .navigation-drawer .list {\n  background: #424242;\n}\n.application--dark .navigation-drawer .list__tile {\n  color: #fff;\n}\n.application--dark .navigation-drawer .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .navigation-drawer .list--group__header--active .list__tile:after,\n.application--dark .navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(255,255,255,0.12);\n}\n.application--dark .btn {\n  color: #fff;\n}\n.application--dark .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--dark .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application--dark .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application--dark .btn.btn--icon,\n.application--dark .btn.btn--floating {\n  color: #fff;\n}\n.application--dark .footer {\n  background-color: #212121;\n}\n.application--dark .card {\n  background-color: #424242;\n  color: #fff;\n}\n.application--dark .icon {\n  color: #fff;\n}\n.application--dark .icon:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .input-group input,\n.application--dark .input-group textarea {\n  color: #fff;\n}\n.application--dark .input-group input:disabled,\n.application--dark .input-group textarea:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .input-group label {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--dirty .input-group__selections__comma {\n  color: #fff;\n}\n.application--dark .input-group:not(.input-group--focused):not(.input-group--error) .input-group__input .icon {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group .input-group__counter {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group .input-group__details {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group .input-group__details:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .input-group.input-group--overflow .input-group__input:before,\n.application--dark .input-group.input-group--segmented .input-group__input:before,\n.application--dark .input-group.input-group--editable .input-group__input:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .input-group.input-group--disabled input,\n.application--dark .input-group.input-group--disabled textarea {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 33%, transparent 0);\n}\n.application--dark .input-group .input-group--text-field__prefix,\n.application--dark .input-group .input-group--text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #80cbc4;\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd;\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(255,255,255,0.3);\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #80cbc4;\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.3);\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application--dark .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #424242 !important;\n}\n.application--dark .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.1) !important;\n}\n.application--dark .input-group.input-group--selection-controls.radio,\n.application--dark .input-group.input-group--selection-controls.checkbox {\n  color: #80cbc4;\n}\n.application--dark .input-group.input-group--selection-controls.radio .icon,\n.application--dark .input-group.input-group--selection-controls.checkbox .icon,\n.application--dark .input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application--dark .input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application--dark .input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application--dark .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application--dark .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application--dark .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application--dark .input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(255,255,255,0.7);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application--dark .input-group--slider .slider__track,\n.application--dark .input-group--slider .slider__track-fill {\n  background: rgba(255,255,255,0.2);\n}\n.application--dark .input-group--slider .slider__track__container:after {\n  border: 1px solid #fff;\n}\n.application--dark .input-group--slider .slider__tick {\n  border: 1px solid #fff;\n}\n.application--dark .input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(255,255,255,0.2);\n}\n.application--dark .input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #fff;\n}\n.application--dark .input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.2);\n}\n.application--dark .input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.3);\n}\n.application--dark .input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(255,255,255,0.2);\n  border: 0px solid transparent;\n}\n.application--dark .input-group--slider:focus .slider__track {\n  background: rgba(255,255,255,0.3);\n}\n.application--dark .list {\n  background: #424242;\n}\n.application--dark .list .list__tile:not(.list__tile--active) {\n  color: #fff;\n}\n.application--dark .list .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .list .subheader {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .list .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .tabs .tabs__item {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .tabs .tabs__item.tabs__item--active {\n  color: #fff;\n}\n.application--dark .tabs .tabs__item.tabs__item--disabled {\n  color: rgba(255,255,255,0.3);\n}\n.application--dark .tabs .icon--left,\n.application--dark .tabs .icon--right {\n  color: #fff;\n}\n.application .theme--light.card {\n  background-color: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.system-bar {\n  background-color: #e0e0e0;\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.system-bar .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.system-bar--lights-out {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.application .theme--light.toolbar {\n  background-color: #f5f5f5;\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .btn {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--light.toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application .theme--light.toolbar .btn.btn--icon,\n.application .theme--light.toolbar .btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.toolbar .toolbar__item {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .toolbar__item:hover {\n  background: rgba(0,0,0,0.12);\n}\n.application .theme--light.navigation-drawer {\n  background-color: #fff;\n}\n.application .theme--light.navigation-drawer:after {\n  background-color: rgba(0,0,0,0.12);\n  content: '';\n  right: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 1px;\n}\n.application .theme--light.navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application .theme--light.navigation-drawer a,\n.application .theme--light.navigation-drawer .subheader,\n.application .theme--light.navigation-drawer .list,\n.application .theme--light.navigation-drawer .icon {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.navigation-drawer .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.navigation-drawer .list {\n  background: #fff;\n}\n.application .theme--light.navigation-drawer .list__tile {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.navigation-drawer .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.navigation-drawer .list--group__header--active .list__tile:after,\n.application .theme--light.navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(0,0,0,0.12);\n}\n.application .theme--light.btn {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--light.btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application .theme--light.btn.btn--icon,\n.application .theme--light.btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.icon {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.icon:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group input,\n.application .theme--light.input-group textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group input:disabled,\n.application .theme--light.input-group textarea:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group label {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--dirty .input-group__selections__comma {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group:not(.input-group--focused):not(.input-group--error) .input-group__input .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group .input-group__counter {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group .input-group__details {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group .input-group__details:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.input-group.input-group--overflow .input-group__input:before,\n.application .theme--light.input-group.input-group--segmented .input-group__input:before,\n.application .theme--light.input-group.input-group--editable .input-group__input:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.input-group.input-group--disabled input,\n.application .theme--light.input-group.input-group--disabled textarea {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(0,0,0,0.38) 0, rgba(0,0,0,0.38) 33%, transparent 0);\n}\n.application .theme--light.input-group .input-group--text-field__prefix,\n.application .theme--light.input-group .input-group--text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #009688;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #fafafa;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #009688;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd !important;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.input-group.input-group--selection-controls.radio,\n.application .theme--light.input-group.input-group--selection-controls.checkbox {\n  color: #009688;\n}\n.application .theme--light.input-group.input-group--selection-controls.radio .icon,\n.application .theme--light.input-group.input-group--selection-controls.checkbox .icon,\n.application .theme--light.input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application .theme--light.input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application .theme--light.input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application .theme--light.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application .theme--light.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application .theme--light.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application .theme--light.input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(0,0,0,0.54);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application .theme--light.input-group--slider .slider__track,\n.application .theme--light.input-group--slider .slider__track-fill {\n  background: rgba(0,0,0,0.26);\n}\n.application .theme--light.input-group--slider .slider__track__container:after {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group--slider .slider__tick {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(0,0,0,0.26);\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #000;\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.26);\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(0,0,0,0.26);\n  border: 0px solid transparent;\n}\n.application .theme--light.input-group--slider:focus .slider__track {\n  background: rgba(0,0,0,0.38);\n}\n.application .theme--light.list {\n  background: #fff;\n}\n.application .theme--light.list .list__tile:not(.list__tile--active) {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.list .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.list .subheader {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.list .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.tabs .tabs__item {\n  color: rgba(0,0,0,0.7);\n}\n.application .theme--light.tabs .tabs__item.tabs__item--active {\n  color: #1976d2;\n}\n.application .theme--light.tabs .tabs__item.tabs__item--disabled {\n  color: rgba(0,0,0,0.26);\n}\n.application .theme--light.tabs .icon--left,\n.application .theme--light.tabs .icon--right {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--dark.card {\n  background-color: #424242;\n  color: #fff;\n}\n.application .theme--dark.system-bar {\n  background-color: #000;\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.system-bar .icon {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.system-bar--lights-out {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.application .theme--dark.toolbar {\n  background-color: #212121;\n  color: #fff;\n}\n.application .theme--dark.toolbar .btn {\n  color: #fff;\n}\n.application .theme--dark.toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--dark.toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application .theme--dark.toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application .theme--dark.toolbar .btn.btn--icon,\n.application .theme--dark.toolbar .btn.btn--floating {\n  color: #fff;\n}\n.application .theme--dark.toolbar .toolbar__item {\n  color: #fff;\n}\n.application .theme--dark.toolbar .toolbar__item:hover {\n  background: rgba(255,255,255,0.12);\n}\n.application .theme--dark.navigation-drawer {\n  background-color: #424242;\n}\n.application .theme--dark.navigation-drawer:after {\n  background-color: rgba(255,255,255,0.12);\n  content: '';\n  right: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 1px;\n}\n.application .theme--dark.navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application .theme--dark.navigation-drawer a,\n.application .theme--dark.navigation-drawer .subheader,\n.application .theme--dark.navigation-drawer .list,\n.application .theme--dark.navigation-drawer .icon {\n  color: #fff;\n}\n.application .theme--dark.navigation-drawer .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.navigation-drawer .list {\n  background: #424242;\n}\n.application .theme--dark.navigation-drawer .list__tile {\n  color: #fff;\n}\n.application .theme--dark.navigation-drawer .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.navigation-drawer .list--group__header--active .list__tile:after,\n.application .theme--dark.navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(255,255,255,0.12);\n}\n.application .theme--dark.btn {\n  color: #fff;\n}\n.application .theme--dark.btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--dark.btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application .theme--dark.btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application .theme--dark.btn.btn--icon,\n.application .theme--dark.btn.btn--floating {\n  color: #fff;\n}\n.application .theme--dark.icon {\n  color: #fff;\n}\n.application .theme--dark.icon:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.input-group input,\n.application .theme--dark.input-group textarea {\n  color: #fff;\n}\n.application .theme--dark.input-group input:disabled,\n.application .theme--dark.input-group textarea:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.input-group label {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--dirty .input-group__selections__comma {\n  color: #fff;\n}\n.application .theme--dark.input-group:not(.input-group--focused):not(.input-group--error) .input-group__input .icon {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group .input-group__counter {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group .input-group__details {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group .input-group__details:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.input-group.input-group--overflow .input-group__input:before,\n.application .theme--dark.input-group.input-group--segmented .input-group__input:before,\n.application .theme--dark.input-group.input-group--editable .input-group__input:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.input-group.input-group--disabled input,\n.application .theme--dark.input-group.input-group--disabled textarea {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 33%, transparent 0);\n}\n.application .theme--dark.input-group .input-group--text-field__prefix,\n.application .theme--dark.input-group .input-group--text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #80cbc4;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(255,255,255,0.3);\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #80cbc4;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.3);\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #424242 !important;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.1) !important;\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox {\n  color: #80cbc4;\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio .icon,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox .icon,\n.application .theme--dark.input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application .theme--dark.input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(255,255,255,0.7);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application .theme--dark.input-group--slider .slider__track,\n.application .theme--dark.input-group--slider .slider__track-fill {\n  background: rgba(255,255,255,0.2);\n}\n.application .theme--dark.input-group--slider .slider__track__container:after {\n  border: 1px solid #fff;\n}\n.application .theme--dark.input-group--slider .slider__tick {\n  border: 1px solid #fff;\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(255,255,255,0.2);\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #fff;\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.2);\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.3);\n}\n.application .theme--dark.input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(255,255,255,0.2);\n  border: 0px solid transparent;\n}\n.application .theme--dark.input-group--slider:focus .slider__track {\n  background: rgba(255,255,255,0.3);\n}\n.application .theme--dark.list {\n  background: #424242;\n}\n.application .theme--dark.list .list__tile:not(.list__tile--active) {\n  color: #fff;\n}\n.application .theme--dark.list .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.list .subheader {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.list .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.tabs .tabs__item {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.tabs .tabs__item.tabs__item--active {\n  color: #fff;\n}\n.application .theme--dark.tabs .tabs__item.tabs__item--disabled {\n  color: rgba(255,255,255,0.3);\n}\n.application .theme--dark.tabs .icon--left,\n.application .theme--dark.tabs .icon--right {\n  color: #fff;\n}\n.primary {\n  background-color: #1976d2 !important;\n  border-color: #1976d2 !important;\n}\n.primary--text {\n  color: #1976d2 !important;\n}\n.primary--after:after {\n  background: #1976d2 !important;\n}\n.accent {\n  background-color: #448aff !important;\n  border-color: #448aff !important;\n}\n.accent--text {\n  color: #448aff !important;\n}\n.accent--after:after {\n  background: #448aff !important;\n}\n.secondary {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n.secondary--text {\n  color: #424242 !important;\n}\n.secondary--after:after {\n  background: #424242 !important;\n}\n.info {\n  background-color: #2196f3 !important;\n  border-color: #2196f3 !important;\n}\n.info--text {\n  color: #2196f3 !important;\n}\n.info--after:after {\n  background: #2196f3 !important;\n}\n.warning {\n  background-color: #ffc107 !important;\n  border-color: #ffc107 !important;\n}\n.warning--text {\n  color: #ffc107 !important;\n}\n.warning--after:after {\n  background: #ffc107 !important;\n}\n.error {\n  background-color: #ff5252 !important;\n  border-color: #ff5252 !important;\n}\n.error--text {\n  color: #ff5252 !important;\n}\n.error--after:after {\n  background: #ff5252 !important;\n}\n.success {\n  background-color: #4caf50 !important;\n  border-color: #4caf50 !important;\n}\n.success--text {\n  color: #4caf50 !important;\n}\n.success--after:after {\n  background: #4caf50 !important;\n}\n.black {\n  background-color: #000 !important;\n  border-color: #000 !important;\n}\n.black--text {\n  color: #000 !important;\n}\n.black--after:after {\n  background: #000 !important;\n}\n.white {\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.white--text {\n  color: #fff !important;\n}\n.white--after:after {\n  background: #fff !important;\n}\n.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.transparent--text {\n  color: transparent !important;\n}\n.transparent--after:after {\n  background: transparent !important;\n}\n.red {\n  background-color: #f44336 !important;\n  border-color: #f44336 !important;\n}\n.red--text {\n  color: #f44336 !important;\n}\n.red--after:after {\n  background: #f44336 !important;\n}\n.red.lighten-5 {\n  background-color: #ffebee !important;\n  border-color: #ffebee !important;\n}\n.red.lighten-5--after:after {\n  background-color: #ffebee !important;\n}\n.red--text.text--lighten-5 {\n  color: #ffebee !important;\n}\n.red.lighten-4 {\n  background-color: #ffcdd2 !important;\n  border-color: #ffcdd2 !important;\n}\n.red.lighten-4--after:after {\n  background-color: #ffcdd2 !important;\n}\n.red--text.text--lighten-4 {\n  color: #ffcdd2 !important;\n}\n.red.lighten-3 {\n  background-color: #ef9a9a !important;\n  border-color: #ef9a9a !important;\n}\n.red.lighten-3--after:after {\n  background-color: #ef9a9a !important;\n}\n.red--text.text--lighten-3 {\n  color: #ef9a9a !important;\n}\n.red.lighten-2 {\n  background-color: #e57373 !important;\n  border-color: #e57373 !important;\n}\n.red.lighten-2--after:after {\n  background-color: #e57373 !important;\n}\n.red--text.text--lighten-2 {\n  color: #e57373 !important;\n}\n.red.lighten-1 {\n  background-color: #ef5350 !important;\n  border-color: #ef5350 !important;\n}\n.red.lighten-1--after:after {\n  background-color: #ef5350 !important;\n}\n.red--text.text--lighten-1 {\n  color: #ef5350 !important;\n}\n.red.darken-1 {\n  background-color: #e53935 !important;\n  border-color: #e53935 !important;\n}\n.red.darken-1--after:after {\n  background-color: #e53935 !important;\n}\n.red--text.text--darken-1 {\n  color: #e53935 !important;\n}\n.red.darken-2 {\n  background-color: #d32f2f !important;\n  border-color: #d32f2f !important;\n}\n.red.darken-2--after:after {\n  background-color: #d32f2f !important;\n}\n.red--text.text--darken-2 {\n  color: #d32f2f !important;\n}\n.red.darken-3 {\n  background-color: #c62828 !important;\n  border-color: #c62828 !important;\n}\n.red.darken-3--after:after {\n  background-color: #c62828 !important;\n}\n.red--text.text--darken-3 {\n  color: #c62828 !important;\n}\n.red.darken-4 {\n  background-color: #b71c1c !important;\n  border-color: #b71c1c !important;\n}\n.red.darken-4--after:after {\n  background-color: #b71c1c !important;\n}\n.red--text.text--darken-4 {\n  color: #b71c1c !important;\n}\n.red.accent-1 {\n  background-color: #ff8a80 !important;\n  border-color: #ff8a80 !important;\n}\n.red.accent-1--after:after {\n  background-color: #ff8a80 !important;\n}\n.red--text.text--accent-1 {\n  color: #ff8a80 !important;\n}\n.red.accent-2 {\n  background-color: #ff5252 !important;\n  border-color: #ff5252 !important;\n}\n.red.accent-2--after:after {\n  background-color: #ff5252 !important;\n}\n.red--text.text--accent-2 {\n  color: #ff5252 !important;\n}\n.red.accent-3 {\n  background-color: #ff1744 !important;\n  border-color: #ff1744 !important;\n}\n.red.accent-3--after:after {\n  background-color: #ff1744 !important;\n}\n.red--text.text--accent-3 {\n  color: #ff1744 !important;\n}\n.red.accent-4 {\n  background-color: #d50000 !important;\n  border-color: #d50000 !important;\n}\n.red.accent-4--after:after {\n  background-color: #d50000 !important;\n}\n.red--text.text--accent-4 {\n  color: #d50000 !important;\n}\n.pink {\n  background-color: #e91e63 !important;\n  border-color: #e91e63 !important;\n}\n.pink--text {\n  color: #e91e63 !important;\n}\n.pink--after:after {\n  background: #e91e63 !important;\n}\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n  border-color: #fce4ec !important;\n}\n.pink.lighten-5--after:after {\n  background-color: #fce4ec !important;\n}\n.pink--text.text--lighten-5 {\n  color: #fce4ec !important;\n}\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n  border-color: #f8bbd0 !important;\n}\n.pink.lighten-4--after:after {\n  background-color: #f8bbd0 !important;\n}\n.pink--text.text--lighten-4 {\n  color: #f8bbd0 !important;\n}\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n  border-color: #f48fb1 !important;\n}\n.pink.lighten-3--after:after {\n  background-color: #f48fb1 !important;\n}\n.pink--text.text--lighten-3 {\n  color: #f48fb1 !important;\n}\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n  border-color: #f06292 !important;\n}\n.pink.lighten-2--after:after {\n  background-color: #f06292 !important;\n}\n.pink--text.text--lighten-2 {\n  color: #f06292 !important;\n}\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n  border-color: #ec407a !important;\n}\n.pink.lighten-1--after:after {\n  background-color: #ec407a !important;\n}\n.pink--text.text--lighten-1 {\n  color: #ec407a !important;\n}\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n  border-color: #d81b60 !important;\n}\n.pink.darken-1--after:after {\n  background-color: #d81b60 !important;\n}\n.pink--text.text--darken-1 {\n  color: #d81b60 !important;\n}\n.pink.darken-2 {\n  background-color: #c2185b !important;\n  border-color: #c2185b !important;\n}\n.pink.darken-2--after:after {\n  background-color: #c2185b !important;\n}\n.pink--text.text--darken-2 {\n  color: #c2185b !important;\n}\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n  border-color: #ad1457 !important;\n}\n.pink.darken-3--after:after {\n  background-color: #ad1457 !important;\n}\n.pink--text.text--darken-3 {\n  color: #ad1457 !important;\n}\n.pink.darken-4 {\n  background-color: #880e4f !important;\n  border-color: #880e4f !important;\n}\n.pink.darken-4--after:after {\n  background-color: #880e4f !important;\n}\n.pink--text.text--darken-4 {\n  color: #880e4f !important;\n}\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n  border-color: #ff80ab !important;\n}\n.pink.accent-1--after:after {\n  background-color: #ff80ab !important;\n}\n.pink--text.text--accent-1 {\n  color: #ff80ab !important;\n}\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n  border-color: #ff4081 !important;\n}\n.pink.accent-2--after:after {\n  background-color: #ff4081 !important;\n}\n.pink--text.text--accent-2 {\n  color: #ff4081 !important;\n}\n.pink.accent-3 {\n  background-color: #f50057 !important;\n  border-color: #f50057 !important;\n}\n.pink.accent-3--after:after {\n  background-color: #f50057 !important;\n}\n.pink--text.text--accent-3 {\n  color: #f50057 !important;\n}\n.pink.accent-4 {\n  background-color: #c51162 !important;\n  border-color: #c51162 !important;\n}\n.pink.accent-4--after:after {\n  background-color: #c51162 !important;\n}\n.pink--text.text--accent-4 {\n  color: #c51162 !important;\n}\n.purple {\n  background-color: #9c27b0 !important;\n  border-color: #9c27b0 !important;\n}\n.purple--text {\n  color: #9c27b0 !important;\n}\n.purple--after:after {\n  background: #9c27b0 !important;\n}\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n  border-color: #f3e5f5 !important;\n}\n.purple.lighten-5--after:after {\n  background-color: #f3e5f5 !important;\n}\n.purple--text.text--lighten-5 {\n  color: #f3e5f5 !important;\n}\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n  border-color: #e1bee7 !important;\n}\n.purple.lighten-4--after:after {\n  background-color: #e1bee7 !important;\n}\n.purple--text.text--lighten-4 {\n  color: #e1bee7 !important;\n}\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n  border-color: #ce93d8 !important;\n}\n.purple.lighten-3--after:after {\n  background-color: #ce93d8 !important;\n}\n.purple--text.text--lighten-3 {\n  color: #ce93d8 !important;\n}\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n  border-color: #ba68c8 !important;\n}\n.purple.lighten-2--after:after {\n  background-color: #ba68c8 !important;\n}\n.purple--text.text--lighten-2 {\n  color: #ba68c8 !important;\n}\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n  border-color: #ab47bc !important;\n}\n.purple.lighten-1--after:after {\n  background-color: #ab47bc !important;\n}\n.purple--text.text--lighten-1 {\n  color: #ab47bc !important;\n}\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n  border-color: #8e24aa !important;\n}\n.purple.darken-1--after:after {\n  background-color: #8e24aa !important;\n}\n.purple--text.text--darken-1 {\n  color: #8e24aa !important;\n}\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n  border-color: #7b1fa2 !important;\n}\n.purple.darken-2--after:after {\n  background-color: #7b1fa2 !important;\n}\n.purple--text.text--darken-2 {\n  color: #7b1fa2 !important;\n}\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n  border-color: #6a1b9a !important;\n}\n.purple.darken-3--after:after {\n  background-color: #6a1b9a !important;\n}\n.purple--text.text--darken-3 {\n  color: #6a1b9a !important;\n}\n.purple.darken-4 {\n  background-color: #4a148c !important;\n  border-color: #4a148c !important;\n}\n.purple.darken-4--after:after {\n  background-color: #4a148c !important;\n}\n.purple--text.text--darken-4 {\n  color: #4a148c !important;\n}\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n  border-color: #ea80fc !important;\n}\n.purple.accent-1--after:after {\n  background-color: #ea80fc !important;\n}\n.purple--text.text--accent-1 {\n  color: #ea80fc !important;\n}\n.purple.accent-2 {\n  background-color: #e040fb !important;\n  border-color: #e040fb !important;\n}\n.purple.accent-2--after:after {\n  background-color: #e040fb !important;\n}\n.purple--text.text--accent-2 {\n  color: #e040fb !important;\n}\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n  border-color: #d500f9 !important;\n}\n.purple.accent-3--after:after {\n  background-color: #d500f9 !important;\n}\n.purple--text.text--accent-3 {\n  color: #d500f9 !important;\n}\n.purple.accent-4 {\n  background-color: #a0f !important;\n  border-color: #a0f !important;\n}\n.purple.accent-4--after:after {\n  background-color: #a0f !important;\n}\n.purple--text.text--accent-4 {\n  color: #a0f !important;\n}\n.deep-purple {\n  background-color: #673ab7 !important;\n  border-color: #673ab7 !important;\n}\n.deep-purple--text {\n  color: #673ab7 !important;\n}\n.deep-purple--after:after {\n  background: #673ab7 !important;\n}\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n  border-color: #ede7f6 !important;\n}\n.deep-purple.lighten-5--after:after {\n  background-color: #ede7f6 !important;\n}\n.deep-purple--text.text--lighten-5 {\n  color: #ede7f6 !important;\n}\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n  border-color: #d1c4e9 !important;\n}\n.deep-purple.lighten-4--after:after {\n  background-color: #d1c4e9 !important;\n}\n.deep-purple--text.text--lighten-4 {\n  color: #d1c4e9 !important;\n}\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n  border-color: #b39ddb !important;\n}\n.deep-purple.lighten-3--after:after {\n  background-color: #b39ddb !important;\n}\n.deep-purple--text.text--lighten-3 {\n  color: #b39ddb !important;\n}\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n  border-color: #9575cd !important;\n}\n.deep-purple.lighten-2--after:after {\n  background-color: #9575cd !important;\n}\n.deep-purple--text.text--lighten-2 {\n  color: #9575cd !important;\n}\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n  border-color: #7e57c2 !important;\n}\n.deep-purple.lighten-1--after:after {\n  background-color: #7e57c2 !important;\n}\n.deep-purple--text.text--lighten-1 {\n  color: #7e57c2 !important;\n}\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n  border-color: #5e35b1 !important;\n}\n.deep-purple.darken-1--after:after {\n  background-color: #5e35b1 !important;\n}\n.deep-purple--text.text--darken-1 {\n  color: #5e35b1 !important;\n}\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n  border-color: #512da8 !important;\n}\n.deep-purple.darken-2--after:after {\n  background-color: #512da8 !important;\n}\n.deep-purple--text.text--darken-2 {\n  color: #512da8 !important;\n}\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n  border-color: #4527a0 !important;\n}\n.deep-purple.darken-3--after:after {\n  background-color: #4527a0 !important;\n}\n.deep-purple--text.text--darken-3 {\n  color: #4527a0 !important;\n}\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n  border-color: #311b92 !important;\n}\n.deep-purple.darken-4--after:after {\n  background-color: #311b92 !important;\n}\n.deep-purple--text.text--darken-4 {\n  color: #311b92 !important;\n}\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n  border-color: #b388ff !important;\n}\n.deep-purple.accent-1--after:after {\n  background-color: #b388ff !important;\n}\n.deep-purple--text.text--accent-1 {\n  color: #b388ff !important;\n}\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n  border-color: #7c4dff !important;\n}\n.deep-purple.accent-2--after:after {\n  background-color: #7c4dff !important;\n}\n.deep-purple--text.text--accent-2 {\n  color: #7c4dff !important;\n}\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n  border-color: #651fff !important;\n}\n.deep-purple.accent-3--after:after {\n  background-color: #651fff !important;\n}\n.deep-purple--text.text--accent-3 {\n  color: #651fff !important;\n}\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n  border-color: #6200ea !important;\n}\n.deep-purple.accent-4--after:after {\n  background-color: #6200ea !important;\n}\n.deep-purple--text.text--accent-4 {\n  color: #6200ea !important;\n}\n.indigo {\n  background-color: #3f51b5 !important;\n  border-color: #3f51b5 !important;\n}\n.indigo--text {\n  color: #3f51b5 !important;\n}\n.indigo--after:after {\n  background: #3f51b5 !important;\n}\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n  border-color: #e8eaf6 !important;\n}\n.indigo.lighten-5--after:after {\n  background-color: #e8eaf6 !important;\n}\n.indigo--text.text--lighten-5 {\n  color: #e8eaf6 !important;\n}\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n  border-color: #c5cae9 !important;\n}\n.indigo.lighten-4--after:after {\n  background-color: #c5cae9 !important;\n}\n.indigo--text.text--lighten-4 {\n  color: #c5cae9 !important;\n}\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n  border-color: #9fa8da !important;\n}\n.indigo.lighten-3--after:after {\n  background-color: #9fa8da !important;\n}\n.indigo--text.text--lighten-3 {\n  color: #9fa8da !important;\n}\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n  border-color: #7986cb !important;\n}\n.indigo.lighten-2--after:after {\n  background-color: #7986cb !important;\n}\n.indigo--text.text--lighten-2 {\n  color: #7986cb !important;\n}\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n  border-color: #5c6bc0 !important;\n}\n.indigo.lighten-1--after:after {\n  background-color: #5c6bc0 !important;\n}\n.indigo--text.text--lighten-1 {\n  color: #5c6bc0 !important;\n}\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n  border-color: #3949ab !important;\n}\n.indigo.darken-1--after:after {\n  background-color: #3949ab !important;\n}\n.indigo--text.text--darken-1 {\n  color: #3949ab !important;\n}\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n  border-color: #303f9f !important;\n}\n.indigo.darken-2--after:after {\n  background-color: #303f9f !important;\n}\n.indigo--text.text--darken-2 {\n  color: #303f9f !important;\n}\n.indigo.darken-3 {\n  background-color: #283593 !important;\n  border-color: #283593 !important;\n}\n.indigo.darken-3--after:after {\n  background-color: #283593 !important;\n}\n.indigo--text.text--darken-3 {\n  color: #283593 !important;\n}\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n  border-color: #1a237e !important;\n}\n.indigo.darken-4--after:after {\n  background-color: #1a237e !important;\n}\n.indigo--text.text--darken-4 {\n  color: #1a237e !important;\n}\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n  border-color: #8c9eff !important;\n}\n.indigo.accent-1--after:after {\n  background-color: #8c9eff !important;\n}\n.indigo--text.text--accent-1 {\n  color: #8c9eff !important;\n}\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n  border-color: #536dfe !important;\n}\n.indigo.accent-2--after:after {\n  background-color: #536dfe !important;\n}\n.indigo--text.text--accent-2 {\n  color: #536dfe !important;\n}\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n  border-color: #3d5afe !important;\n}\n.indigo.accent-3--after:after {\n  background-color: #3d5afe !important;\n}\n.indigo--text.text--accent-3 {\n  color: #3d5afe !important;\n}\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n  border-color: #304ffe !important;\n}\n.indigo.accent-4--after:after {\n  background-color: #304ffe !important;\n}\n.indigo--text.text--accent-4 {\n  color: #304ffe !important;\n}\n.blue {\n  background-color: #2196f3 !important;\n  border-color: #2196f3 !important;\n}\n.blue--text {\n  color: #2196f3 !important;\n}\n.blue--after:after {\n  background: #2196f3 !important;\n}\n.blue.lighten-5 {\n  background-color: #e3f2fd !important;\n  border-color: #e3f2fd !important;\n}\n.blue.lighten-5--after:after {\n  background-color: #e3f2fd !important;\n}\n.blue--text.text--lighten-5 {\n  color: #e3f2fd !important;\n}\n.blue.lighten-4 {\n  background-color: #bbdefb !important;\n  border-color: #bbdefb !important;\n}\n.blue.lighten-4--after:after {\n  background-color: #bbdefb !important;\n}\n.blue--text.text--lighten-4 {\n  color: #bbdefb !important;\n}\n.blue.lighten-3 {\n  background-color: #90caf9 !important;\n  border-color: #90caf9 !important;\n}\n.blue.lighten-3--after:after {\n  background-color: #90caf9 !important;\n}\n.blue--text.text--lighten-3 {\n  color: #90caf9 !important;\n}\n.blue.lighten-2 {\n  background-color: #64b5f6 !important;\n  border-color: #64b5f6 !important;\n}\n.blue.lighten-2--after:after {\n  background-color: #64b5f6 !important;\n}\n.blue--text.text--lighten-2 {\n  color: #64b5f6 !important;\n}\n.blue.lighten-1 {\n  background-color: #42a5f5 !important;\n  border-color: #42a5f5 !important;\n}\n.blue.lighten-1--after:after {\n  background-color: #42a5f5 !important;\n}\n.blue--text.text--lighten-1 {\n  color: #42a5f5 !important;\n}\n.blue.darken-1 {\n  background-color: #1e88e5 !important;\n  border-color: #1e88e5 !important;\n}\n.blue.darken-1--after:after {\n  background-color: #1e88e5 !important;\n}\n.blue--text.text--darken-1 {\n  color: #1e88e5 !important;\n}\n.blue.darken-2 {\n  background-color: #1976d2 !important;\n  border-color: #1976d2 !important;\n}\n.blue.darken-2--after:after {\n  background-color: #1976d2 !important;\n}\n.blue--text.text--darken-2 {\n  color: #1976d2 !important;\n}\n.blue.darken-3 {\n  background-color: #1565c0 !important;\n  border-color: #1565c0 !important;\n}\n.blue.darken-3--after:after {\n  background-color: #1565c0 !important;\n}\n.blue--text.text--darken-3 {\n  color: #1565c0 !important;\n}\n.blue.darken-4 {\n  background-color: #0d47a1 !important;\n  border-color: #0d47a1 !important;\n}\n.blue.darken-4--after:after {\n  background-color: #0d47a1 !important;\n}\n.blue--text.text--darken-4 {\n  color: #0d47a1 !important;\n}\n.blue.accent-1 {\n  background-color: #82b1ff !important;\n  border-color: #82b1ff !important;\n}\n.blue.accent-1--after:after {\n  background-color: #82b1ff !important;\n}\n.blue--text.text--accent-1 {\n  color: #82b1ff !important;\n}\n.blue.accent-2 {\n  background-color: #448aff !important;\n  border-color: #448aff !important;\n}\n.blue.accent-2--after:after {\n  background-color: #448aff !important;\n}\n.blue--text.text--accent-2 {\n  color: #448aff !important;\n}\n.blue.accent-3 {\n  background-color: #2979ff !important;\n  border-color: #2979ff !important;\n}\n.blue.accent-3--after:after {\n  background-color: #2979ff !important;\n}\n.blue--text.text--accent-3 {\n  color: #2979ff !important;\n}\n.blue.accent-4 {\n  background-color: #2962ff !important;\n  border-color: #2962ff !important;\n}\n.blue.accent-4--after:after {\n  background-color: #2962ff !important;\n}\n.blue--text.text--accent-4 {\n  color: #2962ff !important;\n}\n.light-blue {\n  background-color: #03a9f4 !important;\n  border-color: #03a9f4 !important;\n}\n.light-blue--text {\n  color: #03a9f4 !important;\n}\n.light-blue--after:after {\n  background: #03a9f4 !important;\n}\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n  border-color: #e1f5fe !important;\n}\n.light-blue.lighten-5--after:after {\n  background-color: #e1f5fe !important;\n}\n.light-blue--text.text--lighten-5 {\n  color: #e1f5fe !important;\n}\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n  border-color: #b3e5fc !important;\n}\n.light-blue.lighten-4--after:after {\n  background-color: #b3e5fc !important;\n}\n.light-blue--text.text--lighten-4 {\n  color: #b3e5fc !important;\n}\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n  border-color: #81d4fa !important;\n}\n.light-blue.lighten-3--after:after {\n  background-color: #81d4fa !important;\n}\n.light-blue--text.text--lighten-3 {\n  color: #81d4fa !important;\n}\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n  border-color: #4fc3f7 !important;\n}\n.light-blue.lighten-2--after:after {\n  background-color: #4fc3f7 !important;\n}\n.light-blue--text.text--lighten-2 {\n  color: #4fc3f7 !important;\n}\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n  border-color: #29b6f6 !important;\n}\n.light-blue.lighten-1--after:after {\n  background-color: #29b6f6 !important;\n}\n.light-blue--text.text--lighten-1 {\n  color: #29b6f6 !important;\n}\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n  border-color: #039be5 !important;\n}\n.light-blue.darken-1--after:after {\n  background-color: #039be5 !important;\n}\n.light-blue--text.text--darken-1 {\n  color: #039be5 !important;\n}\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n  border-color: #0288d1 !important;\n}\n.light-blue.darken-2--after:after {\n  background-color: #0288d1 !important;\n}\n.light-blue--text.text--darken-2 {\n  color: #0288d1 !important;\n}\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n  border-color: #0277bd !important;\n}\n.light-blue.darken-3--after:after {\n  background-color: #0277bd !important;\n}\n.light-blue--text.text--darken-3 {\n  color: #0277bd !important;\n}\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n  border-color: #01579b !important;\n}\n.light-blue.darken-4--after:after {\n  background-color: #01579b !important;\n}\n.light-blue--text.text--darken-4 {\n  color: #01579b !important;\n}\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n  border-color: #80d8ff !important;\n}\n.light-blue.accent-1--after:after {\n  background-color: #80d8ff !important;\n}\n.light-blue--text.text--accent-1 {\n  color: #80d8ff !important;\n}\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n  border-color: #40c4ff !important;\n}\n.light-blue.accent-2--after:after {\n  background-color: #40c4ff !important;\n}\n.light-blue--text.text--accent-2 {\n  color: #40c4ff !important;\n}\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n  border-color: #00b0ff !important;\n}\n.light-blue.accent-3--after:after {\n  background-color: #00b0ff !important;\n}\n.light-blue--text.text--accent-3 {\n  color: #00b0ff !important;\n}\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n  border-color: #0091ea !important;\n}\n.light-blue.accent-4--after:after {\n  background-color: #0091ea !important;\n}\n.light-blue--text.text--accent-4 {\n  color: #0091ea !important;\n}\n.cyan {\n  background-color: #00bcd4 !important;\n  border-color: #00bcd4 !important;\n}\n.cyan--text {\n  color: #00bcd4 !important;\n}\n.cyan--after:after {\n  background: #00bcd4 !important;\n}\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n  border-color: #e0f7fa !important;\n}\n.cyan.lighten-5--after:after {\n  background-color: #e0f7fa !important;\n}\n.cyan--text.text--lighten-5 {\n  color: #e0f7fa !important;\n}\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n  border-color: #b2ebf2 !important;\n}\n.cyan.lighten-4--after:after {\n  background-color: #b2ebf2 !important;\n}\n.cyan--text.text--lighten-4 {\n  color: #b2ebf2 !important;\n}\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n  border-color: #80deea !important;\n}\n.cyan.lighten-3--after:after {\n  background-color: #80deea !important;\n}\n.cyan--text.text--lighten-3 {\n  color: #80deea !important;\n}\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n  border-color: #4dd0e1 !important;\n}\n.cyan.lighten-2--after:after {\n  background-color: #4dd0e1 !important;\n}\n.cyan--text.text--lighten-2 {\n  color: #4dd0e1 !important;\n}\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n  border-color: #26c6da !important;\n}\n.cyan.lighten-1--after:after {\n  background-color: #26c6da !important;\n}\n.cyan--text.text--lighten-1 {\n  color: #26c6da !important;\n}\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n  border-color: #00acc1 !important;\n}\n.cyan.darken-1--after:after {\n  background-color: #00acc1 !important;\n}\n.cyan--text.text--darken-1 {\n  color: #00acc1 !important;\n}\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n  border-color: #0097a7 !important;\n}\n.cyan.darken-2--after:after {\n  background-color: #0097a7 !important;\n}\n.cyan--text.text--darken-2 {\n  color: #0097a7 !important;\n}\n.cyan.darken-3 {\n  background-color: #00838f !important;\n  border-color: #00838f !important;\n}\n.cyan.darken-3--after:after {\n  background-color: #00838f !important;\n}\n.cyan--text.text--darken-3 {\n  color: #00838f !important;\n}\n.cyan.darken-4 {\n  background-color: #006064 !important;\n  border-color: #006064 !important;\n}\n.cyan.darken-4--after:after {\n  background-color: #006064 !important;\n}\n.cyan--text.text--darken-4 {\n  color: #006064 !important;\n}\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n  border-color: #84ffff !important;\n}\n.cyan.accent-1--after:after {\n  background-color: #84ffff !important;\n}\n.cyan--text.text--accent-1 {\n  color: #84ffff !important;\n}\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n  border-color: #18ffff !important;\n}\n.cyan.accent-2--after:after {\n  background-color: #18ffff !important;\n}\n.cyan--text.text--accent-2 {\n  color: #18ffff !important;\n}\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n  border-color: #00e5ff !important;\n}\n.cyan.accent-3--after:after {\n  background-color: #00e5ff !important;\n}\n.cyan--text.text--accent-3 {\n  color: #00e5ff !important;\n}\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n  border-color: #00b8d4 !important;\n}\n.cyan.accent-4--after:after {\n  background-color: #00b8d4 !important;\n}\n.cyan--text.text--accent-4 {\n  color: #00b8d4 !important;\n}\n.teal {\n  background-color: #009688 !important;\n  border-color: #009688 !important;\n}\n.teal--text {\n  color: #009688 !important;\n}\n.teal--after:after {\n  background: #009688 !important;\n}\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n  border-color: #e0f2f1 !important;\n}\n.teal.lighten-5--after:after {\n  background-color: #e0f2f1 !important;\n}\n.teal--text.text--lighten-5 {\n  color: #e0f2f1 !important;\n}\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n  border-color: #b2dfdb !important;\n}\n.teal.lighten-4--after:after {\n  background-color: #b2dfdb !important;\n}\n.teal--text.text--lighten-4 {\n  color: #b2dfdb !important;\n}\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n  border-color: #80cbc4 !important;\n}\n.teal.lighten-3--after:after {\n  background-color: #80cbc4 !important;\n}\n.teal--text.text--lighten-3 {\n  color: #80cbc4 !important;\n}\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n  border-color: #4db6ac !important;\n}\n.teal.lighten-2--after:after {\n  background-color: #4db6ac !important;\n}\n.teal--text.text--lighten-2 {\n  color: #4db6ac !important;\n}\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n  border-color: #26a69a !important;\n}\n.teal.lighten-1--after:after {\n  background-color: #26a69a !important;\n}\n.teal--text.text--lighten-1 {\n  color: #26a69a !important;\n}\n.teal.darken-1 {\n  background-color: #00897b !important;\n  border-color: #00897b !important;\n}\n.teal.darken-1--after:after {\n  background-color: #00897b !important;\n}\n.teal--text.text--darken-1 {\n  color: #00897b !important;\n}\n.teal.darken-2 {\n  background-color: #00796b !important;\n  border-color: #00796b !important;\n}\n.teal.darken-2--after:after {\n  background-color: #00796b !important;\n}\n.teal--text.text--darken-2 {\n  color: #00796b !important;\n}\n.teal.darken-3 {\n  background-color: #00695c !important;\n  border-color: #00695c !important;\n}\n.teal.darken-3--after:after {\n  background-color: #00695c !important;\n}\n.teal--text.text--darken-3 {\n  color: #00695c !important;\n}\n.teal.darken-4 {\n  background-color: #004d40 !important;\n  border-color: #004d40 !important;\n}\n.teal.darken-4--after:after {\n  background-color: #004d40 !important;\n}\n.teal--text.text--darken-4 {\n  color: #004d40 !important;\n}\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n  border-color: #a7ffeb !important;\n}\n.teal.accent-1--after:after {\n  background-color: #a7ffeb !important;\n}\n.teal--text.text--accent-1 {\n  color: #a7ffeb !important;\n}\n.teal.accent-2 {\n  background-color: #64ffda !important;\n  border-color: #64ffda !important;\n}\n.teal.accent-2--after:after {\n  background-color: #64ffda !important;\n}\n.teal--text.text--accent-2 {\n  color: #64ffda !important;\n}\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n  border-color: #1de9b6 !important;\n}\n.teal.accent-3--after:after {\n  background-color: #1de9b6 !important;\n}\n.teal--text.text--accent-3 {\n  color: #1de9b6 !important;\n}\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n  border-color: #00bfa5 !important;\n}\n.teal.accent-4--after:after {\n  background-color: #00bfa5 !important;\n}\n.teal--text.text--accent-4 {\n  color: #00bfa5 !important;\n}\n.green {\n  background-color: #4caf50 !important;\n  border-color: #4caf50 !important;\n}\n.green--text {\n  color: #4caf50 !important;\n}\n.green--after:after {\n  background: #4caf50 !important;\n}\n.green.lighten-5 {\n  background-color: #e8f5e9 !important;\n  border-color: #e8f5e9 !important;\n}\n.green.lighten-5--after:after {\n  background-color: #e8f5e9 !important;\n}\n.green--text.text--lighten-5 {\n  color: #e8f5e9 !important;\n}\n.green.lighten-4 {\n  background-color: #c8e6c9 !important;\n  border-color: #c8e6c9 !important;\n}\n.green.lighten-4--after:after {\n  background-color: #c8e6c9 !important;\n}\n.green--text.text--lighten-4 {\n  color: #c8e6c9 !important;\n}\n.green.lighten-3 {\n  background-color: #a5d6a7 !important;\n  border-color: #a5d6a7 !important;\n}\n.green.lighten-3--after:after {\n  background-color: #a5d6a7 !important;\n}\n.green--text.text--lighten-3 {\n  color: #a5d6a7 !important;\n}\n.green.lighten-2 {\n  background-color: #81c784 !important;\n  border-color: #81c784 !important;\n}\n.green.lighten-2--after:after {\n  background-color: #81c784 !important;\n}\n.green--text.text--lighten-2 {\n  color: #81c784 !important;\n}\n.green.lighten-1 {\n  background-color: #66bb6a !important;\n  border-color: #66bb6a !important;\n}\n.green.lighten-1--after:after {\n  background-color: #66bb6a !important;\n}\n.green--text.text--lighten-1 {\n  color: #66bb6a !important;\n}\n.green.darken-1 {\n  background-color: #43a047 !important;\n  border-color: #43a047 !important;\n}\n.green.darken-1--after:after {\n  background-color: #43a047 !important;\n}\n.green--text.text--darken-1 {\n  color: #43a047 !important;\n}\n.green.darken-2 {\n  background-color: #388e3c !important;\n  border-color: #388e3c !important;\n}\n.green.darken-2--after:after {\n  background-color: #388e3c !important;\n}\n.green--text.text--darken-2 {\n  color: #388e3c !important;\n}\n.green.darken-3 {\n  background-color: #2e7d32 !important;\n  border-color: #2e7d32 !important;\n}\n.green.darken-3--after:after {\n  background-color: #2e7d32 !important;\n}\n.green--text.text--darken-3 {\n  color: #2e7d32 !important;\n}\n.green.darken-4 {\n  background-color: #1b5e20 !important;\n  border-color: #1b5e20 !important;\n}\n.green.darken-4--after:after {\n  background-color: #1b5e20 !important;\n}\n.green--text.text--darken-4 {\n  color: #1b5e20 !important;\n}\n.green.accent-1 {\n  background-color: #b9f6ca !important;\n  border-color: #b9f6ca !important;\n}\n.green.accent-1--after:after {\n  background-color: #b9f6ca !important;\n}\n.green--text.text--accent-1 {\n  color: #b9f6ca !important;\n}\n.green.accent-2 {\n  background-color: #69f0ae !important;\n  border-color: #69f0ae !important;\n}\n.green.accent-2--after:after {\n  background-color: #69f0ae !important;\n}\n.green--text.text--accent-2 {\n  color: #69f0ae !important;\n}\n.green.accent-3 {\n  background-color: #00e676 !important;\n  border-color: #00e676 !important;\n}\n.green.accent-3--after:after {\n  background-color: #00e676 !important;\n}\n.green--text.text--accent-3 {\n  color: #00e676 !important;\n}\n.green.accent-4 {\n  background-color: #00c853 !important;\n  border-color: #00c853 !important;\n}\n.green.accent-4--after:after {\n  background-color: #00c853 !important;\n}\n.green--text.text--accent-4 {\n  color: #00c853 !important;\n}\n.light-green {\n  background-color: #8bc34a !important;\n  border-color: #8bc34a !important;\n}\n.light-green--text {\n  color: #8bc34a !important;\n}\n.light-green--after:after {\n  background: #8bc34a !important;\n}\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n  border-color: #f1f8e9 !important;\n}\n.light-green.lighten-5--after:after {\n  background-color: #f1f8e9 !important;\n}\n.light-green--text.text--lighten-5 {\n  color: #f1f8e9 !important;\n}\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n  border-color: #dcedc8 !important;\n}\n.light-green.lighten-4--after:after {\n  background-color: #dcedc8 !important;\n}\n.light-green--text.text--lighten-4 {\n  color: #dcedc8 !important;\n}\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n  border-color: #c5e1a5 !important;\n}\n.light-green.lighten-3--after:after {\n  background-color: #c5e1a5 !important;\n}\n.light-green--text.text--lighten-3 {\n  color: #c5e1a5 !important;\n}\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n  border-color: #aed581 !important;\n}\n.light-green.lighten-2--after:after {\n  background-color: #aed581 !important;\n}\n.light-green--text.text--lighten-2 {\n  color: #aed581 !important;\n}\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n  border-color: #9ccc65 !important;\n}\n.light-green.lighten-1--after:after {\n  background-color: #9ccc65 !important;\n}\n.light-green--text.text--lighten-1 {\n  color: #9ccc65 !important;\n}\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n  border-color: #7cb342 !important;\n}\n.light-green.darken-1--after:after {\n  background-color: #7cb342 !important;\n}\n.light-green--text.text--darken-1 {\n  color: #7cb342 !important;\n}\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n  border-color: #689f38 !important;\n}\n.light-green.darken-2--after:after {\n  background-color: #689f38 !important;\n}\n.light-green--text.text--darken-2 {\n  color: #689f38 !important;\n}\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n  border-color: #558b2f !important;\n}\n.light-green.darken-3--after:after {\n  background-color: #558b2f !important;\n}\n.light-green--text.text--darken-3 {\n  color: #558b2f !important;\n}\n.light-green.darken-4 {\n  background-color: #33691e !important;\n  border-color: #33691e !important;\n}\n.light-green.darken-4--after:after {\n  background-color: #33691e !important;\n}\n.light-green--text.text--darken-4 {\n  color: #33691e !important;\n}\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n  border-color: #ccff90 !important;\n}\n.light-green.accent-1--after:after {\n  background-color: #ccff90 !important;\n}\n.light-green--text.text--accent-1 {\n  color: #ccff90 !important;\n}\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n  border-color: #b2ff59 !important;\n}\n.light-green.accent-2--after:after {\n  background-color: #b2ff59 !important;\n}\n.light-green--text.text--accent-2 {\n  color: #b2ff59 !important;\n}\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n  border-color: #76ff03 !important;\n}\n.light-green.accent-3--after:after {\n  background-color: #76ff03 !important;\n}\n.light-green--text.text--accent-3 {\n  color: #76ff03 !important;\n}\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n  border-color: #64dd17 !important;\n}\n.light-green.accent-4--after:after {\n  background-color: #64dd17 !important;\n}\n.light-green--text.text--accent-4 {\n  color: #64dd17 !important;\n}\n.lime {\n  background-color: #cddc39 !important;\n  border-color: #cddc39 !important;\n}\n.lime--text {\n  color: #cddc39 !important;\n}\n.lime--after:after {\n  background: #cddc39 !important;\n}\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n  border-color: #f9fbe7 !important;\n}\n.lime.lighten-5--after:after {\n  background-color: #f9fbe7 !important;\n}\n.lime--text.text--lighten-5 {\n  color: #f9fbe7 !important;\n}\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n  border-color: #f0f4c3 !important;\n}\n.lime.lighten-4--after:after {\n  background-color: #f0f4c3 !important;\n}\n.lime--text.text--lighten-4 {\n  color: #f0f4c3 !important;\n}\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n  border-color: #e6ee9c !important;\n}\n.lime.lighten-3--after:after {\n  background-color: #e6ee9c !important;\n}\n.lime--text.text--lighten-3 {\n  color: #e6ee9c !important;\n}\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n  border-color: #dce775 !important;\n}\n.lime.lighten-2--after:after {\n  background-color: #dce775 !important;\n}\n.lime--text.text--lighten-2 {\n  color: #dce775 !important;\n}\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n  border-color: #d4e157 !important;\n}\n.lime.lighten-1--after:after {\n  background-color: #d4e157 !important;\n}\n.lime--text.text--lighten-1 {\n  color: #d4e157 !important;\n}\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n  border-color: #c0ca33 !important;\n}\n.lime.darken-1--after:after {\n  background-color: #c0ca33 !important;\n}\n.lime--text.text--darken-1 {\n  color: #c0ca33 !important;\n}\n.lime.darken-2 {\n  background-color: #afb42b !important;\n  border-color: #afb42b !important;\n}\n.lime.darken-2--after:after {\n  background-color: #afb42b !important;\n}\n.lime--text.text--darken-2 {\n  color: #afb42b !important;\n}\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n  border-color: #9e9d24 !important;\n}\n.lime.darken-3--after:after {\n  background-color: #9e9d24 !important;\n}\n.lime--text.text--darken-3 {\n  color: #9e9d24 !important;\n}\n.lime.darken-4 {\n  background-color: #827717 !important;\n  border-color: #827717 !important;\n}\n.lime.darken-4--after:after {\n  background-color: #827717 !important;\n}\n.lime--text.text--darken-4 {\n  color: #827717 !important;\n}\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n  border-color: #f4ff81 !important;\n}\n.lime.accent-1--after:after {\n  background-color: #f4ff81 !important;\n}\n.lime--text.text--accent-1 {\n  color: #f4ff81 !important;\n}\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n  border-color: #eeff41 !important;\n}\n.lime.accent-2--after:after {\n  background-color: #eeff41 !important;\n}\n.lime--text.text--accent-2 {\n  color: #eeff41 !important;\n}\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n  border-color: #c6ff00 !important;\n}\n.lime.accent-3--after:after {\n  background-color: #c6ff00 !important;\n}\n.lime--text.text--accent-3 {\n  color: #c6ff00 !important;\n}\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n  border-color: #aeea00 !important;\n}\n.lime.accent-4--after:after {\n  background-color: #aeea00 !important;\n}\n.lime--text.text--accent-4 {\n  color: #aeea00 !important;\n}\n.yellow {\n  background-color: #ffeb3b !important;\n  border-color: #ffeb3b !important;\n}\n.yellow--text {\n  color: #ffeb3b !important;\n}\n.yellow--after:after {\n  background: #ffeb3b !important;\n}\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n  border-color: #fffde7 !important;\n}\n.yellow.lighten-5--after:after {\n  background-color: #fffde7 !important;\n}\n.yellow--text.text--lighten-5 {\n  color: #fffde7 !important;\n}\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n  border-color: #fff9c4 !important;\n}\n.yellow.lighten-4--after:after {\n  background-color: #fff9c4 !important;\n}\n.yellow--text.text--lighten-4 {\n  color: #fff9c4 !important;\n}\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n  border-color: #fff59d !important;\n}\n.yellow.lighten-3--after:after {\n  background-color: #fff59d !important;\n}\n.yellow--text.text--lighten-3 {\n  color: #fff59d !important;\n}\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n  border-color: #fff176 !important;\n}\n.yellow.lighten-2--after:after {\n  background-color: #fff176 !important;\n}\n.yellow--text.text--lighten-2 {\n  color: #fff176 !important;\n}\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n  border-color: #ffee58 !important;\n}\n.yellow.lighten-1--after:after {\n  background-color: #ffee58 !important;\n}\n.yellow--text.text--lighten-1 {\n  color: #ffee58 !important;\n}\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n  border-color: #fdd835 !important;\n}\n.yellow.darken-1--after:after {\n  background-color: #fdd835 !important;\n}\n.yellow--text.text--darken-1 {\n  color: #fdd835 !important;\n}\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n  border-color: #fbc02d !important;\n}\n.yellow.darken-2--after:after {\n  background-color: #fbc02d !important;\n}\n.yellow--text.text--darken-2 {\n  color: #fbc02d !important;\n}\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n  border-color: #f9a825 !important;\n}\n.yellow.darken-3--after:after {\n  background-color: #f9a825 !important;\n}\n.yellow--text.text--darken-3 {\n  color: #f9a825 !important;\n}\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n  border-color: #f57f17 !important;\n}\n.yellow.darken-4--after:after {\n  background-color: #f57f17 !important;\n}\n.yellow--text.text--darken-4 {\n  color: #f57f17 !important;\n}\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n  border-color: #ffff8d !important;\n}\n.yellow.accent-1--after:after {\n  background-color: #ffff8d !important;\n}\n.yellow--text.text--accent-1 {\n  color: #ffff8d !important;\n}\n.yellow.accent-2 {\n  background-color: #ff0 !important;\n  border-color: #ff0 !important;\n}\n.yellow.accent-2--after:after {\n  background-color: #ff0 !important;\n}\n.yellow--text.text--accent-2 {\n  color: #ff0 !important;\n}\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n  border-color: #ffea00 !important;\n}\n.yellow.accent-3--after:after {\n  background-color: #ffea00 !important;\n}\n.yellow--text.text--accent-3 {\n  color: #ffea00 !important;\n}\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n  border-color: #ffd600 !important;\n}\n.yellow.accent-4--after:after {\n  background-color: #ffd600 !important;\n}\n.yellow--text.text--accent-4 {\n  color: #ffd600 !important;\n}\n.amber {\n  background-color: #ffc107 !important;\n  border-color: #ffc107 !important;\n}\n.amber--text {\n  color: #ffc107 !important;\n}\n.amber--after:after {\n  background: #ffc107 !important;\n}\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n  border-color: #fff8e1 !important;\n}\n.amber.lighten-5--after:after {\n  background-color: #fff8e1 !important;\n}\n.amber--text.text--lighten-5 {\n  color: #fff8e1 !important;\n}\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n  border-color: #ffecb3 !important;\n}\n.amber.lighten-4--after:after {\n  background-color: #ffecb3 !important;\n}\n.amber--text.text--lighten-4 {\n  color: #ffecb3 !important;\n}\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n  border-color: #ffe082 !important;\n}\n.amber.lighten-3--after:after {\n  background-color: #ffe082 !important;\n}\n.amber--text.text--lighten-3 {\n  color: #ffe082 !important;\n}\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n  border-color: #ffd54f !important;\n}\n.amber.lighten-2--after:after {\n  background-color: #ffd54f !important;\n}\n.amber--text.text--lighten-2 {\n  color: #ffd54f !important;\n}\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n  border-color: #ffca28 !important;\n}\n.amber.lighten-1--after:after {\n  background-color: #ffca28 !important;\n}\n.amber--text.text--lighten-1 {\n  color: #ffca28 !important;\n}\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n  border-color: #ffb300 !important;\n}\n.amber.darken-1--after:after {\n  background-color: #ffb300 !important;\n}\n.amber--text.text--darken-1 {\n  color: #ffb300 !important;\n}\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n  border-color: #ffa000 !important;\n}\n.amber.darken-2--after:after {\n  background-color: #ffa000 !important;\n}\n.amber--text.text--darken-2 {\n  color: #ffa000 !important;\n}\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n  border-color: #ff8f00 !important;\n}\n.amber.darken-3--after:after {\n  background-color: #ff8f00 !important;\n}\n.amber--text.text--darken-3 {\n  color: #ff8f00 !important;\n}\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n  border-color: #ff6f00 !important;\n}\n.amber.darken-4--after:after {\n  background-color: #ff6f00 !important;\n}\n.amber--text.text--darken-4 {\n  color: #ff6f00 !important;\n}\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n  border-color: #ffe57f !important;\n}\n.amber.accent-1--after:after {\n  background-color: #ffe57f !important;\n}\n.amber--text.text--accent-1 {\n  color: #ffe57f !important;\n}\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n  border-color: #ffd740 !important;\n}\n.amber.accent-2--after:after {\n  background-color: #ffd740 !important;\n}\n.amber--text.text--accent-2 {\n  color: #ffd740 !important;\n}\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n  border-color: #ffc400 !important;\n}\n.amber.accent-3--after:after {\n  background-color: #ffc400 !important;\n}\n.amber--text.text--accent-3 {\n  color: #ffc400 !important;\n}\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n  border-color: #ffab00 !important;\n}\n.amber.accent-4--after:after {\n  background-color: #ffab00 !important;\n}\n.amber--text.text--accent-4 {\n  color: #ffab00 !important;\n}\n.orange {\n  background-color: #ff9800 !important;\n  border-color: #ff9800 !important;\n}\n.orange--text {\n  color: #ff9800 !important;\n}\n.orange--after:after {\n  background: #ff9800 !important;\n}\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n  border-color: #fff3e0 !important;\n}\n.orange.lighten-5--after:after {\n  background-color: #fff3e0 !important;\n}\n.orange--text.text--lighten-5 {\n  color: #fff3e0 !important;\n}\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n  border-color: #ffe0b2 !important;\n}\n.orange.lighten-4--after:after {\n  background-color: #ffe0b2 !important;\n}\n.orange--text.text--lighten-4 {\n  color: #ffe0b2 !important;\n}\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n  border-color: #ffcc80 !important;\n}\n.orange.lighten-3--after:after {\n  background-color: #ffcc80 !important;\n}\n.orange--text.text--lighten-3 {\n  color: #ffcc80 !important;\n}\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n  border-color: #ffb74d !important;\n}\n.orange.lighten-2--after:after {\n  background-color: #ffb74d !important;\n}\n.orange--text.text--lighten-2 {\n  color: #ffb74d !important;\n}\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n  border-color: #ffa726 !important;\n}\n.orange.lighten-1--after:after {\n  background-color: #ffa726 !important;\n}\n.orange--text.text--lighten-1 {\n  color: #ffa726 !important;\n}\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n  border-color: #fb8c00 !important;\n}\n.orange.darken-1--after:after {\n  background-color: #fb8c00 !important;\n}\n.orange--text.text--darken-1 {\n  color: #fb8c00 !important;\n}\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n  border-color: #f57c00 !important;\n}\n.orange.darken-2--after:after {\n  background-color: #f57c00 !important;\n}\n.orange--text.text--darken-2 {\n  color: #f57c00 !important;\n}\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n  border-color: #ef6c00 !important;\n}\n.orange.darken-3--after:after {\n  background-color: #ef6c00 !important;\n}\n.orange--text.text--darken-3 {\n  color: #ef6c00 !important;\n}\n.orange.darken-4 {\n  background-color: #e65100 !important;\n  border-color: #e65100 !important;\n}\n.orange.darken-4--after:after {\n  background-color: #e65100 !important;\n}\n.orange--text.text--darken-4 {\n  color: #e65100 !important;\n}\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n  border-color: #ffd180 !important;\n}\n.orange.accent-1--after:after {\n  background-color: #ffd180 !important;\n}\n.orange--text.text--accent-1 {\n  color: #ffd180 !important;\n}\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n  border-color: #ffab40 !important;\n}\n.orange.accent-2--after:after {\n  background-color: #ffab40 !important;\n}\n.orange--text.text--accent-2 {\n  color: #ffab40 !important;\n}\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n  border-color: #ff9100 !important;\n}\n.orange.accent-3--after:after {\n  background-color: #ff9100 !important;\n}\n.orange--text.text--accent-3 {\n  color: #ff9100 !important;\n}\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n  border-color: #ff6d00 !important;\n}\n.orange.accent-4--after:after {\n  background-color: #ff6d00 !important;\n}\n.orange--text.text--accent-4 {\n  color: #ff6d00 !important;\n}\n.deep-orange {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n.deep-orange--text {\n  color: #ff5722 !important;\n}\n.deep-orange--after:after {\n  background: #ff5722 !important;\n}\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n  border-color: #fbe9e7 !important;\n}\n.deep-orange.lighten-5--after:after {\n  background-color: #fbe9e7 !important;\n}\n.deep-orange--text.text--lighten-5 {\n  color: #fbe9e7 !important;\n}\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n  border-color: #ffccbc !important;\n}\n.deep-orange.lighten-4--after:after {\n  background-color: #ffccbc !important;\n}\n.deep-orange--text.text--lighten-4 {\n  color: #ffccbc !important;\n}\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n  border-color: #ffab91 !important;\n}\n.deep-orange.lighten-3--after:after {\n  background-color: #ffab91 !important;\n}\n.deep-orange--text.text--lighten-3 {\n  color: #ffab91 !important;\n}\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n  border-color: #ff8a65 !important;\n}\n.deep-orange.lighten-2--after:after {\n  background-color: #ff8a65 !important;\n}\n.deep-orange--text.text--lighten-2 {\n  color: #ff8a65 !important;\n}\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n  border-color: #ff7043 !important;\n}\n.deep-orange.lighten-1--after:after {\n  background-color: #ff7043 !important;\n}\n.deep-orange--text.text--lighten-1 {\n  color: #ff7043 !important;\n}\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n  border-color: #f4511e !important;\n}\n.deep-orange.darken-1--after:after {\n  background-color: #f4511e !important;\n}\n.deep-orange--text.text--darken-1 {\n  color: #f4511e !important;\n}\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n  border-color: #e64a19 !important;\n}\n.deep-orange.darken-2--after:after {\n  background-color: #e64a19 !important;\n}\n.deep-orange--text.text--darken-2 {\n  color: #e64a19 !important;\n}\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n  border-color: #d84315 !important;\n}\n.deep-orange.darken-3--after:after {\n  background-color: #d84315 !important;\n}\n.deep-orange--text.text--darken-3 {\n  color: #d84315 !important;\n}\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n  border-color: #bf360c !important;\n}\n.deep-orange.darken-4--after:after {\n  background-color: #bf360c !important;\n}\n.deep-orange--text.text--darken-4 {\n  color: #bf360c !important;\n}\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n  border-color: #ff9e80 !important;\n}\n.deep-orange.accent-1--after:after {\n  background-color: #ff9e80 !important;\n}\n.deep-orange--text.text--accent-1 {\n  color: #ff9e80 !important;\n}\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n  border-color: #ff6e40 !important;\n}\n.deep-orange.accent-2--after:after {\n  background-color: #ff6e40 !important;\n}\n.deep-orange--text.text--accent-2 {\n  color: #ff6e40 !important;\n}\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n  border-color: #ff3d00 !important;\n}\n.deep-orange.accent-3--after:after {\n  background-color: #ff3d00 !important;\n}\n.deep-orange--text.text--accent-3 {\n  color: #ff3d00 !important;\n}\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n  border-color: #dd2c00 !important;\n}\n.deep-orange.accent-4--after:after {\n  background-color: #dd2c00 !important;\n}\n.deep-orange--text.text--accent-4 {\n  color: #dd2c00 !important;\n}\n.brown {\n  background-color: #795548 !important;\n  border-color: #795548 !important;\n}\n.brown--text {\n  color: #795548 !important;\n}\n.brown--after:after {\n  background: #795548 !important;\n}\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n  border-color: #efebe9 !important;\n}\n.brown.lighten-5--after:after {\n  background-color: #efebe9 !important;\n}\n.brown--text.text--lighten-5 {\n  color: #efebe9 !important;\n}\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n  border-color: #d7ccc8 !important;\n}\n.brown.lighten-4--after:after {\n  background-color: #d7ccc8 !important;\n}\n.brown--text.text--lighten-4 {\n  color: #d7ccc8 !important;\n}\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n  border-color: #bcaaa4 !important;\n}\n.brown.lighten-3--after:after {\n  background-color: #bcaaa4 !important;\n}\n.brown--text.text--lighten-3 {\n  color: #bcaaa4 !important;\n}\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n  border-color: #a1887f !important;\n}\n.brown.lighten-2--after:after {\n  background-color: #a1887f !important;\n}\n.brown--text.text--lighten-2 {\n  color: #a1887f !important;\n}\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n  border-color: #8d6e63 !important;\n}\n.brown.lighten-1--after:after {\n  background-color: #8d6e63 !important;\n}\n.brown--text.text--lighten-1 {\n  color: #8d6e63 !important;\n}\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n  border-color: #6d4c41 !important;\n}\n.brown.darken-1--after:after {\n  background-color: #6d4c41 !important;\n}\n.brown--text.text--darken-1 {\n  color: #6d4c41 !important;\n}\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n  border-color: #5d4037 !important;\n}\n.brown.darken-2--after:after {\n  background-color: #5d4037 !important;\n}\n.brown--text.text--darken-2 {\n  color: #5d4037 !important;\n}\n.brown.darken-3 {\n  background-color: #4e342e !important;\n  border-color: #4e342e !important;\n}\n.brown.darken-3--after:after {\n  background-color: #4e342e !important;\n}\n.brown--text.text--darken-3 {\n  color: #4e342e !important;\n}\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n  border-color: #3e2723 !important;\n}\n.brown.darken-4--after:after {\n  background-color: #3e2723 !important;\n}\n.brown--text.text--darken-4 {\n  color: #3e2723 !important;\n}\n.blue-grey {\n  background-color: #607d8b !important;\n  border-color: #607d8b !important;\n}\n.blue-grey--text {\n  color: #607d8b !important;\n}\n.blue-grey--after:after {\n  background: #607d8b !important;\n}\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n  border-color: #eceff1 !important;\n}\n.blue-grey.lighten-5--after:after {\n  background-color: #eceff1 !important;\n}\n.blue-grey--text.text--lighten-5 {\n  color: #eceff1 !important;\n}\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n  border-color: #cfd8dc !important;\n}\n.blue-grey.lighten-4--after:after {\n  background-color: #cfd8dc !important;\n}\n.blue-grey--text.text--lighten-4 {\n  color: #cfd8dc !important;\n}\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n  border-color: #b0bec5 !important;\n}\n.blue-grey.lighten-3--after:after {\n  background-color: #b0bec5 !important;\n}\n.blue-grey--text.text--lighten-3 {\n  color: #b0bec5 !important;\n}\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n  border-color: #90a4ae !important;\n}\n.blue-grey.lighten-2--after:after {\n  background-color: #90a4ae !important;\n}\n.blue-grey--text.text--lighten-2 {\n  color: #90a4ae !important;\n}\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n  border-color: #78909c !important;\n}\n.blue-grey.lighten-1--after:after {\n  background-color: #78909c !important;\n}\n.blue-grey--text.text--lighten-1 {\n  color: #78909c !important;\n}\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n  border-color: #546e7a !important;\n}\n.blue-grey.darken-1--after:after {\n  background-color: #546e7a !important;\n}\n.blue-grey--text.text--darken-1 {\n  color: #546e7a !important;\n}\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n  border-color: #455a64 !important;\n}\n.blue-grey.darken-2--after:after {\n  background-color: #455a64 !important;\n}\n.blue-grey--text.text--darken-2 {\n  color: #455a64 !important;\n}\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n  border-color: #37474f !important;\n}\n.blue-grey.darken-3--after:after {\n  background-color: #37474f !important;\n}\n.blue-grey--text.text--darken-3 {\n  color: #37474f !important;\n}\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n  border-color: #263238 !important;\n}\n.blue-grey.darken-4--after:after {\n  background-color: #263238 !important;\n}\n.blue-grey--text.text--darken-4 {\n  color: #263238 !important;\n}\n.grey {\n  background-color: #9e9e9e !important;\n  border-color: #9e9e9e !important;\n}\n.grey--text {\n  color: #9e9e9e !important;\n}\n.grey--after:after {\n  background: #9e9e9e !important;\n}\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n  border-color: #fafafa !important;\n}\n.grey.lighten-5--after:after {\n  background-color: #fafafa !important;\n}\n.grey--text.text--lighten-5 {\n  color: #fafafa !important;\n}\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n  border-color: #f5f5f5 !important;\n}\n.grey.lighten-4--after:after {\n  background-color: #f5f5f5 !important;\n}\n.grey--text.text--lighten-4 {\n  color: #f5f5f5 !important;\n}\n.grey.lighten-3 {\n  background-color: #eee !important;\n  border-color: #eee !important;\n}\n.grey.lighten-3--after:after {\n  background-color: #eee !important;\n}\n.grey--text.text--lighten-3 {\n  color: #eee !important;\n}\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n  border-color: #e0e0e0 !important;\n}\n.grey.lighten-2--after:after {\n  background-color: #e0e0e0 !important;\n}\n.grey--text.text--lighten-2 {\n  color: #e0e0e0 !important;\n}\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n  border-color: #bdbdbd !important;\n}\n.grey.lighten-1--after:after {\n  background-color: #bdbdbd !important;\n}\n.grey--text.text--lighten-1 {\n  color: #bdbdbd !important;\n}\n.grey.darken-1 {\n  background-color: #757575 !important;\n  border-color: #757575 !important;\n}\n.grey.darken-1--after:after {\n  background-color: #757575 !important;\n}\n.grey--text.text--darken-1 {\n  color: #757575 !important;\n}\n.grey.darken-2 {\n  background-color: #616161 !important;\n  border-color: #616161 !important;\n}\n.grey.darken-2--after:after {\n  background-color: #616161 !important;\n}\n.grey--text.text--darken-2 {\n  color: #616161 !important;\n}\n.grey.darken-3 {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n.grey.darken-3--after:after {\n  background-color: #424242 !important;\n}\n.grey--text.text--darken-3 {\n  color: #424242 !important;\n}\n.grey.darken-4 {\n  background-color: #212121 !important;\n  border-color: #212121 !important;\n}\n.grey.darken-4--after:after {\n  background-color: #212121 !important;\n}\n.grey--text.text--darken-4 {\n  color: #212121 !important;\n}\n.shades.black {\n  background-color: #000 !important;\n  border-color: #000 !important;\n}\n.shades.black--after:after {\n  background-color: #000 !important;\n}\n.shades--text.text--black {\n  color: #000 !important;\n}\n.shades.white {\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.shades.white--after:after {\n  background-color: #fff !important;\n}\n.shades--text.text--white {\n  color: #fff !important;\n}\n.shades.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.shades.transparent--after:after {\n  background-color: transparent !important;\n}\n.shades--text.text--transparent {\n  color: transparent !important;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  flex-basis: 100%;\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n.container {\n    max-width: 600px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.container {\n    max-width: 1024px;\n}\n}\n@media only screen and (min-width: 1424px) {\n.container {\n    max-width: 1424px;\n}\n}\n@media only screen and (min-width: 1904px) {\n.container {\n    max-width: 1904px;\n}\n}\n@media only screen and (max-width: 599px) {\n.container {\n    padding: 24px;\n}\n}\n.container.fluid {\n  max-width: 100%;\n  width: 100%;\n}\n.container.fill-height {\n  align-items: center;\n  display: flex;\n}\n.container.fill-height .layout {\n  height: 100%;\n  flex: 1 0 auto;\n}\n.container.grid-list-xs {\n  padding: 2px;\n}\n.container.grid-list-xs > .layout {\n  margin: -1px;\n}\n.container.grid-list-xs > .layout > .flex {\n  padding: 1px;\n}\n.container.grid-list-sm {\n  padding: 4px;\n}\n.container.grid-list-sm > .layout {\n  margin: -2px;\n}\n.container.grid-list-sm > .layout > .flex {\n  padding: 2px;\n}\n.container.grid-list-md {\n  padding: 8px;\n}\n.container.grid-list-md > .layout {\n  margin: -4px;\n}\n.container.grid-list-md > .layout > .flex {\n  padding: 4px;\n}\n.container.grid-list-lg {\n  padding: 16px;\n}\n.container.grid-list-lg > .layout {\n  margin: -8px;\n}\n.container.grid-list-lg > .layout > .flex {\n  padding: 8px;\n}\n.container.grid-list-xl {\n  padding: 24px;\n}\n.container.grid-list-xl > .layout {\n  margin: -12px;\n}\n.container.grid-list-xl > .layout > .flex {\n  padding: 12px;\n}\n.layout {\n  display: flex;\n  margin-right: -4px;\n  margin-left: -4px;\n}\n.layout.row,\n.layout.column {\n  flex: 0 1 auto;\n}\n.layout.row.grow,\n.layout.column.grow {\n  flex-grow: 1;\n}\n.layout.row {\n  flex-direction: row;\n}\n.layout.row.reverse {\n  flex-direction: row-reverse;\n}\n.layout.column {\n  flex-direction: column;\n}\n.layout.column.reverse {\n  flex-direction: column-reverse;\n}\n.layout.wrap {\n  flex-wrap: wrap;\n}\n.layout.flex,\n.layout.child-flex > * {\n  flex: 1;\n}\n.layout .flex {\n  flex: 1 1;\n  padding-right: 4px;\n  padding-left: 4px;\n}\n@media all and (min-width: 0) {\n.layout.row-xs {\n    flex-direction: row;\n}\n.layout.column-xs {\n    flex-direction: column;\n}\n.layout.child-flex-xs > * {\n    flex: 1;\n}\n.layout .flex.xs1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-xs1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-xs1 {\n    order: 1;\n}\n.layout .flex.xs2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-xs2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-xs2 {\n    order: 2;\n}\n.layout .flex.xs3 {\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-xs3 {\n    margin-left: 25%;\n}\n.layout .flex.order-xs3 {\n    order: 3;\n}\n.layout .flex.xs4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-xs4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-xs4 {\n    order: 4;\n}\n.layout .flex.xs5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-xs5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-xs5 {\n    order: 5;\n}\n.layout .flex.xs6 {\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-xs6 {\n    margin-left: 50%;\n}\n.layout .flex.order-xs6 {\n    order: 6;\n}\n.layout .flex.xs7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-xs7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-xs7 {\n    order: 7;\n}\n.layout .flex.xs8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-xs8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-xs8 {\n    order: 8;\n}\n.layout .flex.xs9 {\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-xs9 {\n    margin-left: 75%;\n}\n.layout .flex.order-xs9 {\n    order: 9;\n}\n.layout .flex.xs10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-xs10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-xs10 {\n    order: 10;\n}\n.layout .flex.xs11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-xs11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-xs11 {\n    order: 11;\n}\n.layout .flex.xs12 {\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-xs12 {\n    margin-left: 100%;\n}\n.layout .flex.order-xs12 {\n    order: 12;\n}\n}\n@media all and (min-width: 600px) {\n.layout.row-sm {\n    flex-direction: row;\n}\n.layout.column-sm {\n    flex-direction: column;\n}\n.layout.child-flex-sm > * {\n    flex: 1;\n}\n.layout .flex.sm1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-sm1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-sm1 {\n    order: 1;\n}\n.layout .flex.sm2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-sm2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-sm2 {\n    order: 2;\n}\n.layout .flex.sm3 {\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-sm3 {\n    margin-left: 25%;\n}\n.layout .flex.order-sm3 {\n    order: 3;\n}\n.layout .flex.sm4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-sm4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-sm4 {\n    order: 4;\n}\n.layout .flex.sm5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-sm5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-sm5 {\n    order: 5;\n}\n.layout .flex.sm6 {\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-sm6 {\n    margin-left: 50%;\n}\n.layout .flex.order-sm6 {\n    order: 6;\n}\n.layout .flex.sm7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-sm7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-sm7 {\n    order: 7;\n}\n.layout .flex.sm8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-sm8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-sm8 {\n    order: 8;\n}\n.layout .flex.sm9 {\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-sm9 {\n    margin-left: 75%;\n}\n.layout .flex.order-sm9 {\n    order: 9;\n}\n.layout .flex.sm10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-sm10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-sm10 {\n    order: 10;\n}\n.layout .flex.sm11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-sm11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-sm11 {\n    order: 11;\n}\n.layout .flex.sm12 {\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-sm12 {\n    margin-left: 100%;\n}\n.layout .flex.order-sm12 {\n    order: 12;\n}\n}\n@media all and (min-width: 1024px) {\n.layout.row-md {\n    flex-direction: row;\n}\n.layout.column-md {\n    flex-direction: column;\n}\n.layout.child-flex-md > * {\n    flex: 1;\n}\n.layout .flex.md1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-md1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-md1 {\n    order: 1;\n}\n.layout .flex.md2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-md2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-md2 {\n    order: 2;\n}\n.layout .flex.md3 {\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-md3 {\n    margin-left: 25%;\n}\n.layout .flex.order-md3 {\n    order: 3;\n}\n.layout .flex.md4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-md4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-md4 {\n    order: 4;\n}\n.layout .flex.md5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-md5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-md5 {\n    order: 5;\n}\n.layout .flex.md6 {\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-md6 {\n    margin-left: 50%;\n}\n.layout .flex.order-md6 {\n    order: 6;\n}\n.layout .flex.md7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-md7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-md7 {\n    order: 7;\n}\n.layout .flex.md8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-md8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-md8 {\n    order: 8;\n}\n.layout .flex.md9 {\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-md9 {\n    margin-left: 75%;\n}\n.layout .flex.order-md9 {\n    order: 9;\n}\n.layout .flex.md10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-md10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-md10 {\n    order: 10;\n}\n.layout .flex.md11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-md11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-md11 {\n    order: 11;\n}\n.layout .flex.md12 {\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-md12 {\n    margin-left: 100%;\n}\n.layout .flex.order-md12 {\n    order: 12;\n}\n}\n@media all and (min-width: 1424px) {\n.layout.row-lg {\n    flex-direction: row;\n}\n.layout.column-lg {\n    flex-direction: column;\n}\n.layout.child-flex-lg > * {\n    flex: 1;\n}\n.layout .flex.lg1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-lg1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-lg1 {\n    order: 1;\n}\n.layout .flex.lg2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-lg2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-lg2 {\n    order: 2;\n}\n.layout .flex.lg3 {\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-lg3 {\n    margin-left: 25%;\n}\n.layout .flex.order-lg3 {\n    order: 3;\n}\n.layout .flex.lg4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-lg4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-lg4 {\n    order: 4;\n}\n.layout .flex.lg5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-lg5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-lg5 {\n    order: 5;\n}\n.layout .flex.lg6 {\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-lg6 {\n    margin-left: 50%;\n}\n.layout .flex.order-lg6 {\n    order: 6;\n}\n.layout .flex.lg7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-lg7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-lg7 {\n    order: 7;\n}\n.layout .flex.lg8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-lg8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-lg8 {\n    order: 8;\n}\n.layout .flex.lg9 {\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-lg9 {\n    margin-left: 75%;\n}\n.layout .flex.order-lg9 {\n    order: 9;\n}\n.layout .flex.lg10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-lg10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-lg10 {\n    order: 10;\n}\n.layout .flex.lg11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-lg11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-lg11 {\n    order: 11;\n}\n.layout .flex.lg12 {\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-lg12 {\n    margin-left: 100%;\n}\n.layout .flex.order-lg12 {\n    order: 12;\n}\n}\n@media all and (min-width: 1904px) {\n.layout.row-xl {\n    flex-direction: row;\n}\n.layout.column-xl {\n    flex-direction: column;\n}\n.layout.child-flex-xl > * {\n    flex: 1;\n}\n.layout .flex.xl1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n}\n.layout .flex.offset-xl1 {\n    margin-left: 8.333333333333332%;\n}\n.layout .flex.order-xl1 {\n    order: 1;\n}\n.layout .flex.xl2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n}\n.layout .flex.offset-xl2 {\n    margin-left: 16.666666666666664%;\n}\n.layout .flex.order-xl2 {\n    order: 2;\n}\n.layout .flex.xl3 {\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.layout .flex.offset-xl3 {\n    margin-left: 25%;\n}\n.layout .flex.order-xl3 {\n    order: 3;\n}\n.layout .flex.xl4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n}\n.layout .flex.offset-xl4 {\n    margin-left: 33.33333333333333%;\n}\n.layout .flex.order-xl4 {\n    order: 4;\n}\n.layout .flex.xl5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n}\n.layout .flex.offset-xl5 {\n    margin-left: 41.66666666666667%;\n}\n.layout .flex.order-xl5 {\n    order: 5;\n}\n.layout .flex.xl6 {\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.layout .flex.offset-xl6 {\n    margin-left: 50%;\n}\n.layout .flex.order-xl6 {\n    order: 6;\n}\n.layout .flex.xl7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n}\n.layout .flex.offset-xl7 {\n    margin-left: 58.333333333333336%;\n}\n.layout .flex.order-xl7 {\n    order: 7;\n}\n.layout .flex.xl8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n}\n.layout .flex.offset-xl8 {\n    margin-left: 66.66666666666666%;\n}\n.layout .flex.order-xl8 {\n    order: 8;\n}\n.layout .flex.xl9 {\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.layout .flex.offset-xl9 {\n    margin-left: 75%;\n}\n.layout .flex.order-xl9 {\n    order: 9;\n}\n.layout .flex.xl10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n}\n.layout .flex.offset-xl10 {\n    margin-left: 83.33333333333334%;\n}\n.layout .flex.order-xl10 {\n    order: 10;\n}\n.layout .flex.xl11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n}\n.layout .flex.offset-xl11 {\n    margin-left: 91.66666666666666%;\n}\n.layout .flex.order-xl11 {\n    order: 11;\n}\n.layout .flex.xl12 {\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.layout .flex.offset-xl12 {\n    margin-left: 100%;\n}\n.layout .flex.order-xl12 {\n    order: 12;\n}\n}\n.align-start {\n  align-items: flex-start;\n}\n.align-end {\n  align-items: flex-end;\n}\n.align-center {\n  align-items: center;\n}\n.align-baseline {\n  align-items: baseline;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-space-around {\n  justify-content: space-around;\n}\n.justify-space-between {\n  justify-content: space-between;\n}\n.spacer {\n  flex-grow: 1;\n}\n.scroll-y {\n  overflow-y: auto;\n}\n.fill-height {\n  height: 100%;\n}\n.show-overflow {\n  overflow: visible !important;\n}\n.flexbox {\n  display: flex;\n}\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll; /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%; /* iOS 8+ */\n}\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\n::before,\n::after {\n  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\n  vertical-align: inherit;\n}\n* {\n  background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements */\n  padding: 0; /* Reset `padding` and `margin` of all elements */\n  margin: 0;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nhr {\n  overflow: visible; /* Show the overflow in Edge and IE */\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\nsummary {\n  display: list-item; /* Add the correct display in all browsers */\n}\nsmall {\n  font-size: 80%; /* Set font-size to 80% in `small` elements */\n}\n[hidden],\ntemplate {\n  display: none; /* Add the correct display in IE */\n}\nabbr[title] {\n  border-bottom: 1px dotted; /* Add a bordered underline effect in all browsers */\n  text-decoration: none; /* Remove text decoration in Firefox 40+ */\n}\na {\n  background-color: transparent; /* Remove the gray background on active links in IE 10 */\n  -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */\n}\na:active,\na:hover {\n  outline-width: 0; /* Remove the outline when hovering in all browsers */\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* Specify the font family of code elements */\n}\nb,\nstrong {\n  font-weight: bolder; /* Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+ */\n}\ndfn {\n  font-style: italic; /* Address styling not present in Safari and Chrome */\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ninput {\n  border-radius: 0;\n}\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n[disabled] {\n  cursor: default;\n}\n[type=\"number\"] {\n  width: auto; /* Firefox 36+ */\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* Safari 8+ */\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; /* Safari 8 */\n}\ntextarea {\n  overflow: auto; /* Internet Explorer 11+ */\n  resize: vertical; /* Specify textarea resizability */\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* Specify font inheritance of form elements */\n}\noptgroup {\n  font-weight: bold; /* Restore the font weight unset by the previous rule. */\n}\nbutton {\n  overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */\n}\nbutton,\nselect {\n  text-transform: none; /* Firefox 40+, Internet Explorer 11- */\n}\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n}\nselect {\n  -moz-appearance: none; /* Firefox 36+ */\n  -webkit-appearance: none; /* Chrome 41+ */\n}\nselect::-ms-expand {\n  display: none; /* Internet Explorer 11+ */\n}\nselect::-ms-value {\n  color: currentColor; /* Internet Explorer 11+ */\n}\nlegend {\n  border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */\n  color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */\n  display: table; /* Correct the text wrapping in Edge and IE */\n  max-width: 100%; /* Correct the text wrapping in Edge and IE */\n  white-space: normal; /* Correct the text wrapping in Edge and IE */\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */\n  font: inherit; /* Change font properties to `inherit` in Chrome and Safari */\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */\n  outline-offset: -2px; /* Correct the outline style in Safari */\n}\nimg {\n  border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */\n}\nprogress {\n  vertical-align: baseline;\n}\nsvg:not(:root) {\n  overflow: hidden; /* Internet Explorer 11- */\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */\n}\n@media screen {\n[hidden~=\"screen\"] {\n    display: inherit;\n}\n[hidden~=\"screen\"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important;\n}\n}\n[aria-busy=\"true\"] {\n  cursor: progress;\n}\n[aria-controls] {\n  cursor: pointer;\n}\n[aria-disabled] {\n  cursor: default;\n}\n::-moz-selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n::selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n.carousel-transition-enter {\n  transform: translate3d(100%, 0, 0);\n}\n.carousel-transition-leave,\n.carousel-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate3d(-100%, 0, 0);\n}\n.carousel-reverse-transition-enter {\n  transform: translate3d(-100%, 0, 0);\n}\n.carousel-reverse-transition-leave,\n.carousel-reverse-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate3d(100%, 0, 0);\n}\n.dialog-transition-enter,\n.dialog-transition-leave-to {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.dialog-transition-enter-to,\n.dialog-transition-leave {\n  opacity: 1;\n}\n.dialog-bottom-transition-enter,\n.dialog-bottom-transition-leave-to {\n  transform: translateY(100%);\n}\n.tab-transition-enter {\n  transform: translate(100%, 0);\n}\n.tab-transition-enter-to {\n  transform: translate(0, 0);\n}\n.tab-transition-leave,\n.tab-transition-leave-active {\n  position: absolute;\n  top: 0;\n}\n.tab-transition-leave-to {\n  position: absolute;\n  transform: translate(-100%, 0);\n}\n.tab-reverse-transition-enter {\n  transform: translate(-100%, 0);\n}\n.tab-reverse-transition-leave,\n.tab-reverse-transition-leave-to {\n  top: 0;\n  position: absolute;\n  transform: translate(100%, 0);\n}\n.scale-transition-enter-active,\n.scale-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.scale-transition-enter,\n.scale-transition-leave,\n.scale-transition-leave-to {\n  opacity: 0;\n  transform: scale(0);\n}\n.slide-y-transition-enter-active,\n.slide-y-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-y-transition-enter,\n.slide-y-transition-leave-to {\n  opacity: 0;\n  transform: translateY(-15px);\n}\n.slide-y-reverse-transition-enter-active,\n.slide-y-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-y-reverse-transition-enter,\n.slide-y-reverse-transition-leave-to {\n  opacity: 0;\n  transform: translateY(15px);\n}\n.slide-x-transition-enter-active,\n.slide-x-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-x-transition-enter,\n.slide-x-transition-leave-to {\n  opacity: 0;\n  transform: translateX(-15px);\n}\n.slide-x-reverse-transition-enter-active,\n.slide-x-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-x-reverse-transition-enter,\n.slide-x-reverse-transition-leave-to {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.fade-transition-enter-active,\n.fade-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.fade-transition-enter,\n.fade-transition-leave-to {\n  opacity: 0;\n}\n.fab-transition-enter-active,\n.fab-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.fab-transition-enter,\n.fab-transition-leave-to {\n  transform: scale(0) rotate(-45deg);\n}\nblockquote {\n  border-left: 5px solid #1976d2;\n  padding: 16px 0 16px 24px;\n  font-size: 18px;\n  font-weight: 300;\n}\ncode,\nkbd {\n  background: #9e9e9e;\n  color: #bd4147;\n  display: inline-block;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  white-space: pre-wrap;\n  font-size: 85%;\n  font-weight: 100 !important;\n  font-weight: 900 !important;\n}\ncode:after,\nkbd:after,\ncode:before,\nkbd:before {\n  content: \"\\A0\";\n  letter-spacing: -1px;\n}\nkbd {\n  background: #424242;\n  color: #fff;\n}\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n}\nhtml {\n  font-size: 14px;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  overflow-x: hidden;\n}\nbody {\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.5;\n}\nheader {\n  transition: 0.3s padding cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: 1;\n}\nmain {\n  transition: 0.3s padding cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: padding-left;\n}\na {\n  color: #1976d2;\n}\n::-ms-clear,\n::-ms-reveal {\n  display: none;\n}\nh1 {\n  color: #424242;\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh1 {\n    font-size: 67.2px;\n}\n}\nh2 {\n  color: #424242;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh2 {\n    font-size: 33.6px;\n}\n}\nh3 {\n  color: #424242;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh3 {\n    font-size: 27px;\n}\n}\nh4 {\n  color: #424242;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh4 {\n    font-size: 20.4px;\n}\n}\nh5 {\n  color: #424242;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh5 {\n    font-size: 14.399999999999999px;\n}\n}\nh6 {\n  color: #424242;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nh6 {\n    font-size: 12px;\n}\n}\nsubheading {\n  color: #424242;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nsubheading {\n    font-size: 9.6px;\n}\n}\nbody-2 {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nbody-2 {\n    font-size: 8.4px;\n}\n}\nbody-1 {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nbody-1 {\n    font-size: 8.4px;\n}\n}\ncaption {\n  color: #424242;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\ncaption {\n    font-size: 7.199999999999999px;\n}\n}\nbutton {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\nbutton {\n    font-size: 8.4px;\n}\n}\nul,\nol {\n  padding-left: 24px;\n}\n.display-4 {\n  font-size: 112px !important;\n  font-weight: 300 !important;\n  line-height: 1 !important;\n  letter-spacing: -0.04em !important;\n}\n.display-3 {\n  font-size: 56px !important;\n  font-weight: 400 !important;\n  line-height: 1.35 !important;\n  letter-spacing: -0.02em !important;\n}\n.display-2 {\n  font-size: 45px !important;\n  font-weight: 400 !important;\n  line-height: 48px !important;\n  letter-spacing: normal !important;\n}\n.display-1 {\n  font-size: 34px !important;\n  font-weight: 400 !important;\n  line-height: 40px !important;\n  letter-spacing: normal !important;\n}\n.headline {\n  font-size: 24px !important;\n  font-weight: 400 !important;\n  line-height: 32px !important;\n  letter-spacing: normal !important;\n}\n.title {\n  font-size: 20px !important;\n  font-weight: 500 !important;\n  line-height: 1 !important;\n  letter-spacing: 0.02em !important;\n}\n.subheading {\n  font-size: 16px !important;\n  font-weight: 400 !important;\n}\n.body-2 {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n.body-1 {\n  font-size: 14px !important;\n  font-weight: 400 !important;\n}\n.caption {\n  font-size: 12px !important;\n  font-weight: 400 !important;\n}\np {\n  margin-bottom: 16px;\n}\n.alert {\n  border-radius: 0;\n  border-width: 4px 0 0 0;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.12) !important;\n  color: #fff;\n  display: flex;\n  font-size: 14px;\n  margin: 4px auto;\n  padding: 16px;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.alert__icon.icon,\n.alert__dismissible .icon {\n  align-self: center;\n  color: rgba(0,0,0,0.3);\n  font-size: 24px;\n}\n.alert__icon {\n  margin-right: 16px;\n}\n.alert__dismissible {\n  align-self: flex-start;\n  margin-left: 16px;\n  margin-right: 0;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.alert__dismissible:hover {\n  color: rgba(26,26,26,0.3);\n}\n.alert--no-icon .alert__icon {\n  display: none;\n}\n.alert > div {\n  flex: 1;\n}\n@media screen and (max-width: 600px) {\n.alert__icon {\n    display: none;\n}\n}\n.avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.avatar img,\n.avatar .icon {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n.badge {\n  position: relative;\n}\n.badge:after {\n  color: #fff;\n  content: attr(data-badge);\n  display: flex;\n  position: absolute;\n  font-family: 'Roboto', sans-serif;\n  top: -11px;\n  right: -22px;\n  background-color: #1976d2;\n  border-radius: 50%;\n  height: 22px;\n  width: 22px;\n  font-size: 14px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.badge--overlap:after {\n  top: -8px;\n  right: -8px;\n}\n.badge--overlap.badge--left:after {\n  left: -8px;\n  right: initial;\n}\n.badge--overlap.badge--bottom:after {\n  bottom: -8px;\n  top: initial;\n}\n.badge--icon:after {\n  font-family: 'Material Icons';\n}\n.badge--left:after {\n  left: -22px;\n}\n.badge--bottom:after {\n  bottom: -11px;\n  top: initial;\n}\n.bottom-nav {\n  background: #1976d2;\n  bottom: 0;\n  box-shadow: 0 3px 14px 2px rgba(0,0,0,0.12);\n  display: flex;\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  transform: translate3d(0, 60px, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n  z-index: 4;\n}\n.bottom-nav--absolute {\n  position: absolute;\n}\n.bottom-nav--active {\n  transform: translate3d(0, 0, 0);\n}\n.bottom-nav .btn {\n  background: transparent !important;\n  border-radius: 0;\n  box-shadow: none !important;\n  height: 100%;\n  margin: 0;\n  max-width: 168px;\n  min-width: 80px;\n  padding: 0px;\n  opacity: 0.5;\n  width: 100%;\n}\n.bottom-nav .btn .icon {\n  color: inherit;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.bottom-nav .btn .btn__content {\n  height: 100%;\n  flex-direction: column-reverse;\n  height: 56px;\n  font-size: 12px;\n  transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n  white-space: nowrap;\n  will-change: font-size;\n}\n.bottom-nav .btn--active {\n  opacity: 1;\n}\n.bottom-nav .btn--active .btn__content {\n  font-size: 14px;\n}\n.bottom-nav .btn--active .btn__content:before {\n  opacity: 0;\n}\n.bottom-nav .btn--active .btn__content .icon {\n  transform: none;\n}\n.bottom-nav .btn:not(.btn--active) {\n  filter: grayscale(100%);\n}\n.bottom-nav--shift .btn__content {\n  font-size: 14px;\n}\n.bottom-nav--shift .btn__content span {\n  height: 21px;\n}\n.bottom-nav--shift .btn {\n  transition: all 0.3s;\n  min-width: 56px;\n  max-width: 96px;\n}\n.bottom-nav--shift .btn--active {\n  min-width: 96px;\n  max-width: 168px;\n}\n.bottom-nav--shift .btn:not(.btn--active) .btn__content .icon {\n  transform: scale3d(1, 1, 1) translate3d(0, 10px, 0);\n}\n.bottom-nav--shift .btn:not(.btn--active) .btn__content span {\n  color: transparent;\n}\n.breadcrumbs {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 0 1 auto;\n  margin: 0;\n  list-style-type: none;\n}\n.breadcrumbs li:not(:last-child):after {\n  color: #bdbdbd;\n  content: attr(data-divider);\n  vertical-align: middle;\n}\n.breadcrumbs li:last-child a {\n  color: #bdbdbd;\n  pointer-events: none;\n  cursor: default;\n}\n.breadcrumbs--with-icons li:not(:last-child):after {\n  font-family: 'Material Icons';\n}\n.breadcrumbs__item {\n  align-items: center;\n  color: #1976d2;\n  display: inline-flex;\n  font-size: 14px;\n  padding: 0 14px;\n  height: 40px;\n  text-decoration: none;\n  line-height: 40px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.breadcrumbs__item:hover {\n  color: #757575;\n}\n.breadcrumbs__item--disabled {\n  color: #e0e0e0;\n  pointer-events: none;\n}\n.btn-toggle {\n  display: inline-flex;\n  border-radius: 2px;\n  padding: 0 16px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: background, box-shadow;\n}\n.btn-toggle .btn {\n  justify-content: center;\n  min-width: auto;\n  width: auto;\n  padding: 0 8px;\n  margin: 0;\n  opacity: 0.4;\n  border-radius: 0;\n}\n.btn-toggle .btn:not(:last-child) {\n  border-right: 1px solid transparent;\n}\n.btn-toggle .btn:after {\n  display: none;\n}\n.btn-toggle .btn[data-selected] {\n  opacity: 1;\n}\n.btn-toggle .btn__content {\n  padding: 0;\n}\n.btn-toggle .btn span + .icon {\n  font-size: initial;\n  margin-left: 10px;\n}\n.btn {\n  align-items: center;\n  border-radius: 2px;\n  display: inline-flex;\n  height: 36px;\n  flex: 0 1 auto;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n  margin: 6px 8px;\n  min-width: 88px;\n  outline: 0;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), color 1ms;\n  position: relative;\n  vertical-align: middle;\n}\n.btn__content:before {\n  border-radius: inherit;\n  color: inherit;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  opacity: 0.12;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.btn--active .btn__content:before,\n.btn:hover .btn__content:before,\n.btn:focus .btn__content:before {\n  background-color: currentColor;\n}\n.btn__content {\n  align-items: center;\n  border-radius: inherit;\n  color: inherit;\n  display: flex;\n  height: 100%;\n  flex: 1 0 auto;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 0 16px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n}\n.btn--flat {\n  background-color: transparent !important;\n  box-shadow: none !important;\n}\n.btn--raised {\n  will-change: box-shadow;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.btn--raised:active {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.btn--icon {\n  background: transparent;\n  box-shadow: none !important;\n  border-radius: 50%;\n  justify-content: center;\n  height: 36px;\n  width: 36px;\n  min-width: 0;\n}\n.btn--icon .btn__content {\n  padding: 0;\n}\n.btn--icon .btn__content .icon {\n  color: inherit;\n}\n.btn--icon .btn__content:before {\n  border-radius: 50%;\n}\n.btn--icon.btn--small {\n  width: 28px;\n}\n.btn--icon.btn--small .btn__content {\n  height: 28px;\n}\n.btn--icon.btn--large {\n  width: 44px;\n}\n.btn--icon.btn--large .btn__content {\n  height: 44px;\n}\n.btn--floating {\n  border-radius: 50%;\n  min-width: 0;\n  height: 56px;\n  width: 56px;\n  padding: 0;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.btn--floating .btn__content {\n  flex: 0 0 auto;\n  padding: 0;\n}\n.btn--floating .btn__content .icon {\n  color: inherit;\n}\n.btn--floating:after {\n  border-radius: 50%;\n}\n.btn--floating .icon:not(:only-of-type):last-of-type {\n  opacity: 0;\n  position: absolute;\n  transform: rotate(-45deg);\n  left: calc(50% - 12px);\n  top: calc(50% - 12px);\n}\n.btn--floating.btn--active .icon:not(:only-of-type):first-of-type {\n  opacity: 0;\n  transform: rotate(45deg);\n}\n.btn--floating.btn--active .icon:not(:only-of-type):last-of-type {\n  opacity: 1;\n  transform: none;\n}\n.btn--floating .icon {\n  height: 24px;\n  width: 24px;\n}\n.btn--floating.btn--small {\n  height: 40px;\n  width: 40px;\n}\n.btn--floating.btn--small .icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.btn--floating.btn--large {\n  height: 72px;\n  width: 72px;\n}\n.btn--floating.btn--large .icon {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n}\n.btn--reverse .btn__content {\n  flex-direction: row-reverse;\n}\n.btn--reverse.btn--column .btn__content {\n  flex-direction: column-reverse;\n}\n.btn--fixed,\n.btn--absolute {\n  margin: 0;\n}\n.btn.btn--absolute {\n  position: absolute;\n}\n.btn.btn--fixed {\n  position: fixed;\n}\n.btn--top:not(.btn--absolute) {\n  top: 16px;\n}\n.btn--top.btn--absolute {\n  top: -28px;\n}\n.btn--top.btn--absolute.btn--small {\n  top: -20px;\n}\n.btn--top.btn--absolute.btn--large {\n  top: -36px;\n}\n.btn--bottom:not(.btn--absolute) {\n  bottom: 16px;\n}\n.btn--bottom.btn--absolute {\n  bottom: -28px;\n}\n.btn--bottom.btn--absolute.btn--small {\n  bottom: -20px;\n}\n.btn--bottom.btn--absolute.btn--large {\n  bottom: -36px;\n}\n.btn--left {\n  left: 16px;\n}\n.btn--right {\n  right: 16px;\n}\n.btn--small {\n  font-size: 13px;\n  height: 28px;\n}\n.btn--large {\n  font-size: 15px;\n  height: 44px;\n}\n.btn--loader {\n  pointer-events: none;\n}\n.btn--loader .btn__content {\n  opacity: 0;\n}\n.btn__loading {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.btn__loading .icon--left {\n  margin-right: 1rem;\n  line-height: inherit;\n}\n.btn__loading .icon--right {\n  margin-left: 1rem;\n  line-height: inherit;\n}\n.btn--outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n  box-shadow: none;\n}\n.btn--outline:hover {\n  box-shadow: none;\n}\n.btn--block {\n  display: flex;\n  flex: 1;\n  margin: 6px 0;\n  width: 100%;\n}\n.btn--round {\n  border-radius: 28px;\n}\n.btn--round:after {\n  border-radius: 28px;\n}\n.btn .icon--right {\n  margin-left: 16px;\n}\n.btn .icon--left {\n  margin-right: 16px;\n}\n.btn.primary,\n.btn.secondary,\n.btn.success,\n.btn.error,\n.btn.warning,\n.btn.info {\n  color: #fff;\n}\n.card {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  position: relative;\n  border-radius: 2px;\n  min-width: 0;\n}\n.card > *:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.card > *:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.card--raised {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12);\n}\n.card--tile {\n  border-radius: 0;\n}\n.card--flat {\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.card--hover {\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: box-shadow;\n}\n.card--hover:hover {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.card__title {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 16px;\n}\n.card__title--primary {\n  padding-top: 24px;\n}\n.card__text {\n  padding: 16px;\n  width: 100%;\n}\n.card__media {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n}\n.card__media img {\n  width: 100%;\n}\n.card__media__background {\n  border-radius: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.card__media__content {\n  flex: 1;\n  position: relative;\n}\n.card__actions {\n  align-items: center;\n  display: flex;\n  padding: 8px 4px;\n}\n.card__actions > * {\n  margin: 0 4px;\n}\n.carousel {\n  height: 500px;\n  width: 100%;\n  background: #000;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.carousel__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 0 100%;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  transition: 0.2s ease-out;\n}\n.carousel__left,\n.carousel__right {\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n  left: 5px;\n  transform: translateY(-50%);\n}\n.carousel__left .btn,\n.carousel__right .btn {\n  color: #fff;\n  margin: 0 !important;\n  height: auto;\n  width: auto;\n}\n.carousel__left .btn i,\n.carousel__right .btn i {\n  font-size: 48px;\n}\n.carousel__left .btn:hover,\n.carousel__right .btn:hover {\n  background: none;\n}\n.carousel__right {\n  left: auto;\n  right: 5px;\n}\n.carousel__controls {\n  background: rgba(0,0,0,0.5);\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  height: 50px;\n  list-style-type: none;\n  width: 100%;\n  z-index: 1;\n}\n.carousel__controls__item {\n  color: #fff;\n  margin: 0 1rem !important;\n}\n.carousel__controls__item i {\n  opacity: 0.5;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.carousel__controls__item--active i {\n  opacity: 1;\n  vertical-align: middle;\n  font-size: 2rem !important;\n}\n.carousel__controls__item:hover {\n  background: none;\n}\n.carousel__controls__item:hover i {\n  opacity: 0.8;\n}\n.chip {\n  align-items: center;\n  background: #e0e0e0;\n  border: 1px solid #e0e0e0;\n  border-radius: 28px;\n  cursor: default;\n  display: inline-flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding: 0 12px;\n  margin: 8px;\n  height: 32px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n  white-space: nowrap;\n  color: rgba(0,0,0,0.87);\n}\n.chip .avatar {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  margin-left: -14px;\n  margin-right: 8px;\n  color: #fff;\n}\n.chip .avatar img {\n  width: 100%;\n  height: 100%;\n}\n.chip:focus {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  outline: none;\n}\n.chip--label {\n  border-radius: 2px;\n}\n.chip--outline {\n  background: transparent !important;\n  color: #9e9e9e;\n}\n.chip--small {\n  height: 26px;\n}\n.chip--small .avatar {\n  height: 26px;\n  width: 26px;\n  min-width: 26px;\n}\n.chip__close {\n  color: inherit;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 24px;\n  margin-left: 4px;\n  margin-right: -2px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.chip__close:hover {\n  opacity: 0.8;\n}\n.chip--removable {\n  padding: 0 4px 0 12px;\n}\n.chip--select-multi {\n  margin: 8px 8px 8px 0;\n}\n.chip .icon {\n  color: inherit;\n  opacity: 0.54;\n}\n.chip .icon--right {\n  margin-left: 4px;\n}\n.chip .icon--left {\n  margin-right: 4px;\n}\n.datatable thead th.column.sortable {\n  cursor: pointer;\n}\n.datatable thead th.column.sortable i {\n  color: rgba(0,0,0,0.38);\n  font-size: 16px;\n  vertical-align: sub;\n  display: inline-block;\n  opacity: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.datatable thead th.column.sortable:hover {\n  color: rgba(0,0,0,0.87);\n}\n.datatable thead th.column.sortable:hover i {\n  opacity: 0.6;\n}\n.datatable thead th.column.sortable.active {\n  transform: none;\n  color: rgba(0,0,0,0.87);\n}\n.datatable thead th.column.sortable.active i {\n  color: rgba(0,0,0,0.87);\n  opacity: 1;\n}\n.datatable thead th.column.sortable.active.desc i {\n  transform: rotate(-180deg);\n}\n.datatable tfoot .input-group__details {\n  display: none;\n}\n.datatable__actions {\n  color: rgba(0,0,0,0.54);\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 12px;\n}\n.datatable__actions .btn {\n  color: inherit;\n}\n.datatable__actions .btn:last-of-type {\n  margin-left: 18px;\n}\n.datatable__actions__pagination {\n  text-align: center;\n  margin: 0 26px 0 32px;\n}\n.datatable__actions__select {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.datatable__actions__select .input-group--select {\n  margin: 13px 0 13px 34px;\n  position: initial;\n}\n.datatable__actions__select .input-group--select .input-group__selections__comma {\n  color: rgba(0,0,0,0.54) !important;\n  font-size: 12px;\n  padding-top: 6px;\n}\n.datatable__actions__select .input-group--select .input-group__append-icon {\n  color: rgba(0,0,0,0.54) !important;\n}\n.datatable__progress tr {\n  height: auto !important;\n}\n.datatable__progress th {\n  padding: 0 !important;\n}\n.datatable__progress th .progress-linear {\n  top: -3px;\n  margin: 0 0 -3px;\n}\n.picker--date {\n  color: #fff;\n  width: 100%;\n}\n.picker--date__years {\n  background: #fff;\n  color: #000;\n  font-size: 18px;\n  font-weight: 400;\n  list-style-type: none;\n  max-height: 290px;\n  overflow: auto;\n  padding: 0;\n  text-align: center;\n}\n.picker--date__years li {\n  cursor: pointer;\n  margin: 16px 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--date__years li:hover {\n  color: #1976d2;\n}\n.picker--date__years li.active {\n  color: #1976d2;\n  font-size: 24px;\n  font-weight: 500;\n  margin: 20px 0;\n}\n.picker--date__title {\n  justify-content: space-between;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.picker--date__title-year {\n  font-size: 14px;\n}\n.picker--date__title-date {\n  font-size: 34px;\n}\n.picker--date__title-date > div {\n  position: relative;\n}\n.picker--date__title-year,\n.picker--date__title-date {\n  font-weight: 500;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.picker--date__title-year:not(.active),\n.picker--date__title-date:not(.active) {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.picker--date__title-year:hover,\n.picker--date__title-date:hover {\n  opacity: 1;\n}\n.picker--date__header {\n  color: #000;\n  padding: 4px 16px;\n}\n.picker--date__header-selector {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.picker--date__header-selector .btn {\n  color: #000;\n  margin: 0;\n}\n.picker--date__header-selector .icon {\n  cursor: pointer;\n  user-select: none;\n}\n.picker--date__header-selector-date {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.picker--date__header-selector-date strong {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  display: block;\n  width: 100%;\n}\n.picker--date__table {\n  position: relative;\n}\n.picker--date table {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  top: 0;\n}\n.picker--date table thead th {\n  padding: 8px 0;\n}\n.picker--date table th {\n  color: rgba(0,0,0,0.54);\n  font-weight: 600;\n  font-size: 12px;\n}\n.picker--date table th,\n.picker--date table td {\n  text-align: center;\n  width: 45px;\n}\n.picker--date table .btn {\n  margin: 0;\n}\n.picker--date table .btn:hover,\n.picker--date table .btn .btn__content:before {\n  background-color: transparent !important;\n}\n.picker--date table .btn:after {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n.picker--date table .btn__content {\n  overflow: visible;\n  transition: none;\n  z-index: 1;\n}\n.picker--date table .btn.btn--current:not(.btn--active) {\n  color: #1976d2;\n}\n.picker--date table .btn.btn--floating {\n  height: 32px;\n  width: 32px;\n}\n.picker--date table .btn.btn--floating:after {\n  background: #1976d2 !important;\n  opacity: 0;\n  transform: scale(0);\n}\n.picker--date table .btn.btn--floating:not(.btn--active):hover {\n  color: #fff;\n}\n.picker--date table .btn.btn--floating:not(.btn--active):hover:after {\n  opacity: 0.6;\n  transform: scale(1);\n}\n.picker--date table .btn.btn--floating.btn--active {\n  color: #fff;\n}\n.picker--date table .btn.btn--floating.btn--active:after {\n  background: #1976d2 !important;\n  opacity: 1;\n  transform: none;\n}\n.picker--landscape .picker--date__years {\n  margin-left: 170px;\n  width: 330px;\n}\n.picker--date.picker--dark .picker--date__years {\n  background: #424242;\n}\n.picker--date.picker--dark .picker--date__years li {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__years li.active {\n  color: #448aff;\n}\n.picker--date.picker--dark .picker--date__header {\n  color: #fff;\n}\n.picker--date.picker--dark .picker__title {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table th {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table .btn {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table .btn--current {\n  color: #448aff;\n}\n.picker--date.picker--dark .picker--date__table table .btn--active {\n  color: #000;\n}\n.picker--date.picker--dark .picker--date__table table .btn--floating:after {\n  background: #448aff !important;\n}\n.dialog {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);\n  border-radius: 2px;\n  margin: 24px 40px;\n  overflow-y: auto;\n  pointer-events: auto;\n  transition: 0.3s ease-in-out;\n}\n.dialog__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  width: 100%;\n  z-index: 5;\n}\n.dialog:not(.dialog--fullscreen) {\n  max-width: 90%;\n  max-height: 90%;\n}\n.dialog__container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.dialog--fullscreen {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.dialog--fullscreen > .card {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.dialog--scrollable {\n  overflow: hidden;\n}\n.dialog--scrollable .card__text {\n  overflow-y: auto;\n}\n.divider {\n  border: none;\n  display: block;\n  height: 1px;\n  flex: 1;\n  width: 100%;\n}\n.divider--inset {\n  margin-left: 72px;\n  width: calc(100% - 72px);\n}\n.expansion-panel {\n  text-align: left;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.expansion-panel > li {\n  border: 1px solid rgba(0,0,0,0.12);\n}\n.expansion-panel > li:not(:first-child) {\n  border-top: none;\n}\n.expansion-panel__header {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  height: 48px;\n  position: relative;\n  padding-left: 1rem;\n}\n.expansion-panel__header i {\n  margin-right: 1rem;\n}\n.expansion-panel__header:after {\n  content: '\\E313';\n  font-family: 'Material Icons';\n  font-size: 1.5rem;\n  position: absolute;\n  right: 15px;\n  top: calc(50% - 16px);\n  color: inherit;\n  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.expansion-panel__header--active:after {\n  transform: rotate(-180deg);\n}\n.expansion-panel__body {\n  background-color: rgba(0,0,0,0.03);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.expansion-panel__body .card {\n  border-radius: 0;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.footer {\n  align-items: center;\n  display: flex;\n  height: 36px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.footer--absolute,\n.footer--fixed {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.footer--absolute {\n  position: absolute;\n}\n.footer--fixed {\n  position: fixed;\n}\n.footer > *:first-child {\n  margin-left: 8px;\n}\n.footer > *:last-child {\n  margin-right: 8px;\n}\n@media only screen and (max-width: 599px) {\n.footer > *:first-child {\n    margin-left: 16px;\n}\n.footer > *:last-child {\n    margin-right: 16px;\n}\n}\n.icon {\n  align-items: center;\n  display: inline-flex;\n  font-size: 24px;\n  justify-content: center;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  vertical-align: middle;\n}\n.icon--large {\n  font-size: 2.5rem;\n}\n.icon--medium {\n  font-size: 2rem;\n}\n.icon--x-large {\n  font-size: 3rem;\n}\n.input-group {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  min-width: 24px;\n  margin: 18px 0;\n  position: relative;\n  width: 100%;\n  outline: none;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group label {\n  font-size: 16px;\n  line-height: 32px;\n  height: 30px;\n  max-width: 80%;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 0;\n}\n.input-group__input {\n  display: flex;\n  flex: 1 0 100%;\n  min-width: 0;\n  min-height: 30px;\n}\n.input-group__icon-cb {\n  cursor: pointer;\n}\n.input-group.input-group--focused .input-group__input .icon {\n  color: #1976d2;\n}\n.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-position: bottom;\n  background-size: 3px 1px;\n  background-repeat: repeat-x;\n}\n.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error).input-group--focused label,\n.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error):focus label {\n  color: #1976d2;\n}\n.input-group.input-group--text-field.input-group--focused:not(.input-group--disabled) .input-group__details:after,\n.input-group.input-group--text-field:focus:not(.input-group--disabled) .input-group__details:after {\n  transform: scaleX(1);\n}\n.input-group--required label:after {\n  content: '*';\n}\n.input-group--required.input-group--focused label:after {\n  color: #ff5252;\n}\n.input-group.input-group--error label,\n.input-group.input-group--error .input-group__input .icon {\n  color: #ff5252;\n}\n.input-group.input-group--error .input-group__details:after,\n.input-group.input-group--error .input-group__details:before {\n  background-color: #ff5252;\n}\n.input-group .slide-y-transition-leave,\n.input-group .slide-y-transition-leave-to {\n  position: absolute;\n}\n.input-group__details {\n  display: flex;\n  padding-top: 4px;\n  flex: 1 0 100%;\n  font-size: 12px;\n  min-height: 22px;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.input-group__details:after,\n.input-group__details:before {\n  content: '';\n  position: absolute;\n  left: 0;\n}\n.input-group__details:after {\n  background-color: #1976d2;\n  top: 0;\n  height: 2px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: scaleX(0);\n  transform-origin: center center 0;\n  width: 100%;\n  z-index: 1;\n}\n.input-group__details:before {\n  top: 0;\n  height: 1px;\n  width: 100%;\n  z-index: 0;\n}\n.input-group--hide-details .input-group__details {\n  min-height: 2px;\n  padding: 0;\n}\n.input-group__hint {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group .input-group__error {\n  flex: 1 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #ff5252;\n}\n.input-group--overflow.input-group--active,\n.input-group--segmented.input-group--active,\n.input-group--editable.input-group--active {\n  background-color: #fff;\n}\n.list {\n  list-style-type: none;\n  padding: 8px 0 8px;\n  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.list .input-group {\n  margin: 0;\n}\n.list > .list__tile ~ .list__tile {\n  margin-top: 0;\n}\n.list__tile {\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  height: 48px;\n  text-decoration: none;\n  align-items: center;\n  padding: 0 16px;\n  margin: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n}\n.list__tile:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 1px;\n  opacity: 0;\n  width: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  background-color: rgba(0,0,0,0.12);\n}\na.list__tile:hover,\n.list__tile--highlighted {\n  background: rgba(0,0,0,0.12);\n}\n.list__tile__content,\n.list__tile__action,\n.list__tile__avatar {\n  height: 100%;\n}\n.list__tile__title,\n.list__tile__sub-title {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.list__tile__title {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  text-align: left;\n}\n.list__tile__sub-title {\n  font-size: 14px;\n}\n.list__tile .avatar {\n  justify-content: flex-start;\n  min-width: 56px;\n}\n.list__tile__action {\n  display: flex;\n  justify-content: flex-start;\n  min-width: 56px;\n  align-items: center;\n}\n.list__tile__action .input-group {\n  align-items: center;\n}\n.list__tile__action .input-group__details {\n  display: none;\n}\n.list__tile__action .icon {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.list__tile__action .btn {\n  padding: 0;\n  margin: 0;\n}\n.list__tile__action .btn--icon {\n  margin: -8px;\n}\n.list__tile__action-text {\n  color: #9e9e9e;\n  font-size: 12px;\n}\n.list__tile__action--stack {\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  flex-direction: column;\n}\n.list__tile__content {\n  text-align: left;\n  flex: 0 1 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.list__tile__content + .avatar {\n  justify-content: flex-end;\n}\n.list__tile__content + .list__tile__action:not(.list__tile__action--stack) {\n  justify-content: flex-end;\n}\n.list__tile--active {\n  color: #1976d2;\n}\n.list__tile--disabled {\n  opacity: 0.4 !important;\n  pointer-events: none;\n}\n.list__tile--avatar {\n  height: 56px;\n}\n.list--dense {\n  padding-top: 4px;\n}\n.list--dense .subheader {\n  font-size: 13px;\n  height: 40px;\n}\n.list--dense .list--group .subheader {\n  height: 40px;\n}\n.list--dense .list__tile {\n  font-size: 13px;\n}\n.list--dense .list__tile--avatar {\n  height: 48px;\n}\n.list--dense .list__tile--avatar .avatar .icon,\n.list--dense .list__tile--avatar .avatar img {\n  height: 38px;\n  width: 38px;\n}\n.list--dense .list__tile:not(.list__tile--avatar) {\n  height: 40px;\n}\n.list--dense .list__tile .icon {\n  font-size: 21px;\n}\n.list--dense .list__tile__sub-title {\n  font-size: 13px;\n}\n.list--two-line .list__tile {\n  height: 72px;\n}\n.list--two-line.list--dense .list__tile {\n  height: 60px;\n}\n.list--three-line .list__tile {\n  height: 88px;\n}\n.list--three-line .list__tile__sub-title {\n  white-space: initial;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n}\n.list--three-line.list--dense .list__tile {\n  height: 76px;\n}\n.list--group {\n  position: relative;\n  padding: 0;\n}\n.list--group:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 1px;\n  opacity: 0;\n  width: 100%;\n  background-color: rgba(0,0,0,0.12);\n}\n.list--group .list__tile {\n  padding-left: 72px;\n}\n.list--group .list__tile--active .list__tile__title {\n  color: #1976d2;\n}\n.list--group__header + .list--group:after {\n  opacity: 1;\n}\n.list--group__header--active .list__tile {\n  background: rgba(0,0,0,0.12);\n}\n.list--group__header--active .list__tile:after {\n  opacity: 1;\n}\n.list--group__header--active .list__tile .list__tile__title {\n  color: inherit;\n}\n.list--group__header--active .list__tile .list__tile__action:last-of-type .icon {\n  transform: rotate(-180deg);\n}\n.list--group__header--no-action + .list--group .list__tile {\n  padding-left: 16px;\n}\n.list--subheader {\n  padding-top: 0;\n}\n.menu {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.menu--disabled {\n  cursor: not-allowed;\n}\n.menu--disabled .menu__activator {\n  cursor: not-allowed;\n}\n.menu__activator {\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n}\n.menu__content {\n  background: #fff;\n  position: absolute;\n  display: inline-block;\n  border-radius: 2px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 6;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.menu__content--dropdown {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.menu-transition-enter .list__tile {\n  min-width: 0;\n  transition-delay: 0.4s;\n  opacity: 0;\n  transform: translateY(-15px);\n  pointer-events: none;\n}\n.menu-transition-enter-to .list__tile {\n  pointer-events: auto;\n  opacity: 1;\n}\n.menu-transition-enter-to .list__tile--active {\n  transform: none !important;\n}\n.menu-transition-leave-to {\n  transform: translateY(-10px);\n}\n.menu-transition-leave-active,\n.menu-transition-leave-to {\n  pointer-events: none;\n}\n.menu-transition-enter,\n.menu-transition-leave-to {\n  opacity: 0;\n}\n.menu-transition-enter-to,\n.menu-transition-leave {\n  opacity: 1;\n}\n.menu-transition-enter-active,\n.menu-transition-leave-active {\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.menu-transition-enter.menu__content--auto .list__tile--active {\n  opacity: 1;\n  transform: none !important;\n  pointer-events: auto;\n}\n.navigation-drawer {\n  max-width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  padding: 0 0 100px;\n  pointer-events: auto;\n  position: fixed;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 300px;\n  top: 0;\n  left: 0;\n  will-change: transform;\n  z-index: 3;\n}\n.navigation-drawer:not(.navigation-drawer--is-booted) {\n  transition: none !important;\n  z-index: -1;\n}\n.navigation-drawer:not(.navigation-drawer--is-booted) + .toolbar,\n.navigation-drawer:not(.navigation-drawer--is-booted) ~ main,\n.navigation-drawer:not(.navigation-drawer--is-booted) ~ .footer {\n  transition: none !important;\n}\n@media only screen and (max-width: 1023px) {\n.navigation-drawer:not(.navigation-drawer--is-booted) + .toolbar,\n  .navigation-drawer:not(.navigation-drawer--is-booted) ~ main,\n  .navigation-drawer:not(.navigation-drawer--is-booted) ~ .footer {\n    padding-left: 0 !important;\n}\n}\n.navigation-drawer--close:not(.navigation--permanent).navigation-drawer:not(.navigation-drawer--right) {\n  transform: translate3d(-300px, 0, 0);\n}\n.navigation-drawer--close:not(.navigation--permanent).navigation-drawer--right {\n  transform: translate3d(300px, 0, 0);\n}\n.navigation-drawer--right {\n  left: auto;\n  right: 0;\n}\n.navigation-drawer--absolute {\n  position: absolute;\n}\n.navigation-drawer--permanent.navigation-drawer--clipped,\n.navigation-drawer--persistent.navigation-drawer--clipped,\n.navigation-drawer--permanent.navigation-drawer--floating,\n.navigation-drawer--persistent.navigation-drawer--floating {\n  margin-top: 64px;\n  max-height: calc(100vh - 64px);\n}\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .toolbar,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .toolbar,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .footer.footer--fixed,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .footer.footer--fixed,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .footer.footer--fixed,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .footer.footer--fixed,\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .footer.footer--absolute,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .footer.footer--absolute,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .footer.footer--absolute,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .footer.footer--absolute {\n  padding-left: 0;\n  z-index: 3;\n}\n@media all and (max-width: 1424px) and (orientation: landscape) {\n.navigation-drawer--permanent.navigation-drawer--clipped,\n  .navigation-drawer--persistent.navigation-drawer--clipped,\n  .navigation-drawer--permanent.navigation-drawer--floating,\n  .navigation-drawer--persistent.navigation-drawer--floating {\n    margin-top: 48px;\n    max-height: calc(100vh - 48px);\n}\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right):not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--open:not(.navigation-drawer--right):not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ .toolbar {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right) ~ main,\n.navigation-drawer--permanent.navigation-drawer--open:not(.navigation-drawer--right) ~ main,\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right) ~ .footer:not(.footer--fixed):not(.footer--absolute),\n.navigation-drawer--permanent.navigation-drawer--open:not(.navigation-drawer--right) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) + .toolbar,\n.navigation-drawer--permanent.navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) + .toolbar {\n  padding-right: 300px;\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open.navigation-drawer--right ~ main,\n.navigation-drawer--permanent.navigation-drawer--open.navigation-drawer--right ~ main,\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open.navigation-drawer--right ~ .footer:not(.footer--fixed):not(.footer--absolute),\n.navigation-drawer--permanent.navigation-drawer--open.navigation-drawer--right ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-right: 300px;\n}\n.navigation-drawer--floating:after {\n  display: none;\n}\n.navigation-drawer--mini-variant {\n  margin-top: 64px;\n  max-height: calc(100vh - 64px);\n  overflow: hidden;\n  width: 80px;\n}\n@media all and (max-width: 1424px) and (orientation: landscape) {\n.navigation-drawer--mini-variant {\n    margin-top: 48px;\n    max-height: calc(100vh - 48px);\n}\n}\n.navigation-drawer--mini-variant .list__tile__action,\n.navigation-drawer--mini-variant .list__tile__avatar {\n  justify-content: center;\n  min-width: 48px;\n}\n.navigation-drawer--mini-variant .list__tile__content,\n.navigation-drawer--mini-variant .list__tile:after {\n  opacity: 0;\n}\n.navigation-drawer--mini-variant .subheader,\n.navigation-drawer--mini-variant .divider,\n.navigation-drawer--mini-variant .list--group {\n  display: none !important;\n}\n.navigation-drawer--mini-variant ~ .toolbar {\n  padding-left: 0 !important;\n}\n.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ main {\n  padding-left: 80px !important;\n}\n.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-left: 80px !important;\n}\n.navigation-drawer--temporary,\n.navigation-drawer--is-mobile:not(.navigation-drawer--permanent) {\n  z-index: 5;\n}\n.navigation-drawer--temporary:not(.navigation-drawer--close),\n.navigation-drawer--is-mobile:not(.navigation-drawer--permanent):not(.navigation-drawer--close) {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12);\n}\n.navigation-drawer ~ toolbar + main {\n  min-height: calc(100vh - 64px);\n}\n.navigation-drawer > .list .list__tile {\n  transition: none;\n  font-weight: 500;\n}\n.navigation-drawer > .list .list__tile--active .list__tile__title {\n  color: inherit;\n}\n.navigation-drawer > .list .list__tile--active > *:first-child .icon {\n  color: #1976d2;\n}\n.navigation-drawer > .list .list--group .list__tile {\n  font-weight: 400;\n}\n.navigation-drawer > .list .list--group__header--active:after {\n  background: transparent;\n}\n.navigation-drawer > .list .list--group__header--active .list__tile__action:first-of-type .icon {\n  color: #1976d2;\n}\n.navigation-drawer > .list .list--group__container .list__tile--active .list__tile__title {\n  color: #1976d2;\n}\n.navigation-drawer > .list:not(.list--dense) .list__tile {\n  font-size: 14px;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 4;\n}\n.overlay--absolute {\n  position: absolute;\n}\n.overlay:before {\n  background-color: #212121;\n  bottom: 0;\n  content: '';\n  filter: blur(10%);\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.5s ease;\n  width: 100%;\n}\n.overlay--active {\n  pointer-events: auto;\n}\n.overlay--active:before {\n  opacity: 0.46;\n}\n.pagination {\n  align-items: center;\n  align-items: center;\n  display: inline-flex;\n  list-style-type: none;\n  height: 40px;\n  margin: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n  padding: 0;\n}\n.pagination > li {\n  align-items: center;\n  display: flex;\n}\n.pagination a {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.pagination a:hover {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.pagination--circle .pagination__item,\n.pagination--circle .pagination__more,\n.pagination--circle .pagination__navigation {\n  border-radius: 50%;\n}\n.pagination--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.pagination__item {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 4px;\n  color: rgba(0,0,0,0.87);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  height: 34px;\n  width: 34px;\n  margin: 0.3rem;\n  text-decoration: none;\n}\n.pagination__item--active {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n  background: #1976d2;\n  color: #fff;\n}\n.pagination__navigation {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: rgba(0,0,0,0.87);\n  height: 2rem;\n  border-radius: 4px;\n  width: 2rem;\n  margin: 0.3rem 15px;\n}\n.pagination__navigation .icon {\n  font-size: 2rem;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n  color: rgba(0,0,0,0.54);\n}\n.pagination__navigation--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.pagination__more {\n  margin: 0.3rem;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem;\n}\n.parallax {\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n.parallax__image-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.parallax__image {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  display: none;\n  transform: translate3d(-50%, 0, 0);\n  z-index: 1;\n}\n.parallax__content {\n  color: #fff;\n  height: 100%;\n  z-index: 2;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 1rem;\n}\n.picker {\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n}\n.picker .card__row--actions {\n  border: none;\n  margin-top: -20px;\n}\n.picker__title {\n  background: #1976d2;\n  color: #fff;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  height: 105px;\n  padding: 16px;\n}\n.picker__body {\n  height: 290px;\n  overflow: hidden;\n  position: relative;\n}\n.picker--landscape {\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 500px;\n}\n.picker--landscape .picker__title {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  flex: 0 1 170px;\n  width: 170px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 1;\n}\n.picker--landscape .picker__body {\n  flex: 1 0;\n  width: 330px;\n  margin-left: 170px;\n}\n.picker--landscape .card__row--actions {\n  margin-left: 170px;\n  width: 330px;\n}\n.picker--dark {\n  color: #fff;\n}\n.picker--dark .btn {\n  color: #fff;\n}\n.picker--dark .picker__body {\n  background: #424242;\n}\n.picker--dark .picker__title {\n  background: #616161;\n}\n.progress-circular {\n  position: relative;\n  display: inline-flex;\n}\n.progress-circular--indeterminate svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  transform-origin: center center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.2s ease-in-out;\n  z-index: 0;\n}\n.progress-circular--indeterminate .progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0px;\n}\n.progress-circular__underlay {\n  stroke: rgba(0,0,0,0.1);\n  z-index: 1;\n}\n.progress-circular__overlay {\n  stroke: currentColor;\n  z-index: 2;\n  transition: all 0.6s ease-in-out;\n}\n.progress-circular__info {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n@-moz-keyframes progress-circular-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n}\n50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n}\n100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n}\n}\n@-webkit-keyframes progress-circular-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n}\n50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n}\n100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n}\n}\n@-o-keyframes progress-circular-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n}\n50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n}\n100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n}\n}\n@keyframes progress-circular-dash {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n}\n50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n}\n100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n}\n}\n@-moz-keyframes progress-circular-rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes progress-circular-rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n@-o-keyframes progress-circular-rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes progress-circular-rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n.progress-linear {\n  background: transparent;\n  margin: 1rem 0;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.progress-linear .progress-linear__bar {\n  background: #84bbf0;\n}\n.progress-linear .progress-linear__bar__determinate {\n  background: #1976d2;\n}\n.progress-linear .progress-linear__bar__indeterminate .long,\n.progress-linear .progress-linear__bar__indeterminate .short {\n  background: #1976d2;\n}\n.progress-linear__bar {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  transition: 0.3s ease-in;\n  z-index: 1;\n}\n.progress-linear__bar__determinate {\n  height: inherit;\n  transition: 0.3s ease-in;\n}\n.progress-linear__bar__indeterminate .long,\n.progress-linear__bar__indeterminate .short {\n  height: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  will-change: left, right;\n  width: auto;\n  background-color: inherit;\n}\n.progress-linear__bar__indeterminate--active .long {\n  animation: indeterminate;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear__bar__indeterminate--active .short {\n  animation: indeterminate-short;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--query .progress-linear__bar__indeterminate--active .long {\n  animation: query;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--query .progress-linear__bar__indeterminate--active .short {\n  animation: query-short;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--secondary .progress-linear__bar {\n  background: #a1a1a1;\n}\n.progress-linear--secondary .progress-linear__bar__determinate {\n  background: #424242;\n}\n.progress-linear--secondary .progress-linear__bar__indeterminate .long,\n.progress-linear--secondary .progress-linear__bar__indeterminate .short {\n  background: #424242;\n}\n.progress-linear--success .progress-linear__bar {\n  background: #a5d8a7;\n}\n.progress-linear--success .progress-linear__bar__determinate {\n  background: #4caf50;\n}\n.progress-linear--success .progress-linear__bar__indeterminate .long,\n.progress-linear--success .progress-linear__bar__indeterminate .short {\n  background: #4caf50;\n}\n.progress-linear--info .progress-linear__bar {\n  background: #90cbf9;\n}\n.progress-linear--info .progress-linear__bar__determinate {\n  background: #2196f3;\n}\n.progress-linear--info .progress-linear__bar__indeterminate .long,\n.progress-linear--info .progress-linear__bar__indeterminate .short {\n  background: #2196f3;\n}\n.progress-linear--warning .progress-linear__bar {\n  background: #ffe083;\n}\n.progress-linear--warning .progress-linear__bar__determinate {\n  background: #ffc107;\n}\n.progress-linear--warning .progress-linear__bar__indeterminate .long,\n.progress-linear--warning .progress-linear__bar__indeterminate .short {\n  background: #ffc107;\n}\n.progress-linear--error .progress-linear__bar {\n  background: #ffa8a8;\n}\n.progress-linear--error .progress-linear__bar__determinate {\n  background: #ff5252;\n}\n.progress-linear--error .progress-linear__bar__indeterminate .long,\n.progress-linear--error .progress-linear__bar__indeterminate .short {\n  background: #ff5252;\n}\n@-moz-keyframes indeterminate {\n0% {\n    left: -90%;\n    right: 100%;\n}\n60% {\n    left: -90%;\n    right: 100%;\n}\n100% {\n    left: 100%;\n    right: -35%;\n}\n}\n@-webkit-keyframes indeterminate {\n0% {\n    left: -90%;\n    right: 100%;\n}\n60% {\n    left: -90%;\n    right: 100%;\n}\n100% {\n    left: 100%;\n    right: -35%;\n}\n}\n@-o-keyframes indeterminate {\n0% {\n    left: -90%;\n    right: 100%;\n}\n60% {\n    left: -90%;\n    right: 100%;\n}\n100% {\n    left: 100%;\n    right: -35%;\n}\n}\n@keyframes indeterminate {\n0% {\n    left: -90%;\n    right: 100%;\n}\n60% {\n    left: -90%;\n    right: 100%;\n}\n100% {\n    left: 100%;\n    right: -35%;\n}\n}\n@-moz-keyframes indeterminate-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@-webkit-keyframes indeterminate-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@-o-keyframes indeterminate-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@keyframes indeterminate-short {\n0% {\n    left: -200%;\n    right: 100%;\n}\n60% {\n    left: 107%;\n    right: -8%;\n}\n100% {\n    left: 107%;\n    right: -8%;\n}\n}\n@-moz-keyframes query {\n0% {\n    right: -90%;\n    left: 100%;\n}\n60% {\n    right: -90%;\n    left: 100%;\n}\n100% {\n    right: 100%;\n    left: -35%;\n}\n}\n@-webkit-keyframes query {\n0% {\n    right: -90%;\n    left: 100%;\n}\n60% {\n    right: -90%;\n    left: 100%;\n}\n100% {\n    right: 100%;\n    left: -35%;\n}\n}\n@-o-keyframes query {\n0% {\n    right: -90%;\n    left: 100%;\n}\n60% {\n    right: -90%;\n    left: 100%;\n}\n100% {\n    right: 100%;\n    left: -35%;\n}\n}\n@keyframes query {\n0% {\n    right: -90%;\n    left: 100%;\n}\n60% {\n    right: -90%;\n    left: 100%;\n}\n100% {\n    right: 100%;\n    left: -35%;\n}\n}\n@-moz-keyframes query-short {\n0% {\n    right: -200%;\n    left: 100%;\n}\n60% {\n    right: 107%;\n    left: -8%;\n}\n100% {\n    right: 107%;\n    left: -8%;\n}\n}\n@-webkit-keyframes query-short {\n0% {\n    right: -200%;\n    left: 100%;\n}\n60% {\n    right: 107%;\n    left: -8%;\n}\n100% {\n    right: 107%;\n    left: -8%;\n}\n}\n@-o-keyframes query-short {\n0% {\n    right: -200%;\n    left: 100%;\n}\n60% {\n    right: 107%;\n    left: -8%;\n}\n100% {\n    right: 107%;\n    left: -8%;\n}\n}\n@keyframes query-short {\n0% {\n    right: -200%;\n    left: 100%;\n}\n60% {\n    right: 107%;\n    left: -8%;\n}\n100% {\n    right: 107%;\n    left: -8%;\n}\n}\n.input-group--selection-controls.input-group--tab-focused .input-group--selection-controls__ripple:before {\n  transform: translate3d(-50%, -50%, 0) scale(1);\n  opacity: 0.15;\n}\n.ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n}\n.ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  pointer-events: none;\n  overflow: hidden;\n  will-change: opacity;\n}\n.ripple__animation--enter {\n  transition: none;\n}\n.ripple__animation--visible {\n  opacity: 0.15;\n}\n.input-group--select .input-group--select__autocomplete {\n  display: block;\n  opacity: 0;\n  height: 0;\n}\n.input-group--select .input-group__append-icon {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.input-group--select.input-group--focused .input-group--select__autocomplete {\n  display: inline-block;\n  height: 30px;\n  opacity: 1;\n  padding-bottom: 1px;\n}\n.input-group--select.input-group--focused .input-group__append-icon {\n  transform: rotate(-180deg);\n}\n.input-group--select .input-group__input,\n.input-group--select input {\n  cursor: pointer;\n}\n.input-group--select.input-group--disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.input-group--select .input-group__selections {\n  align-items: center;\n  display: flex;\n  position: relative;\n  width: 100%;\n}\n.input-group--select .input-group__selections__comma {\n  display: inline-flex;\n  font-size: 16px;\n  padding-right: 4px;\n}\n.input-group--select .menu {\n  display: inline;\n}\n.input-group--select .fade-transition-leave-active {\n  position: absolute;\n  left: 0;\n}\n.input-group--select.input-group--autocomplete.input-group--focused:not(.input-group--multiple) .input-group__selections__comma {\n  display: none;\n}\n.input-group--overflow .input-group__selections,\n.input-group--editable .input-group__selections,\n.input-group--segmented .input-group__selections,\n.input-group--overflow input,\n.input-group--editable input,\n.input-group--segmented input {\n  height: 24px;\n}\n.input-group--overflow .input-group__selections__comma,\n.input-group--editable .input-group__selections__comma,\n.input-group--segmented .input-group__selections__comma {\n  top: 0;\n  left: 0;\n}\n.input-group--overflow .input-group__input,\n.input-group--editable .input-group__input,\n.input-group--segmented .input-group__input {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--overflow .input-group__input:hover,\n.input-group--editable .input-group__input:hover,\n.input-group--segmented .input-group__input:hover {\n  background: #fff;\n}\n.input-group--overflow.input-group--focused .input-group__input,\n.input-group--editable.input-group--focused .input-group__input,\n.input-group--segmented.input-group--focused .input-group__input {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.input-group--overflow label,\n.input-group--editable label,\n.input-group--segmented label {\n  left: 16px !important;\n  top: 8px !important;\n}\n.input-group--overflow .input-group__details:after,\n.input-group--editable .input-group__details:after,\n.input-group--segmented .input-group__details:after {\n  display: none;\n}\n.input-group--overflow .input-group__input,\n.input-group--editable .input-group__input,\n.input-group--segmented .input-group__input {\n  padding: 12px 16px;\n}\n.input-group--overflow .input-group__input:before,\n.input-group--editable .input-group__input:before,\n.input-group--segmented .input-group__input:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  top: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--segmented .input-group__input:after,\n.input-group--editable .input-group__input:hover:after,\n.input-group.input-group--focused.input-group--editable .input-group__input:after {\n  background-color: rgba(0,0,0,0.12);\n  content: '';\n  position: absolute;\n  right: 55px;\n  height: 48px;\n  top: 0;\n  width: 1px;\n}\n.input-group.input-group--selection-controls {\n  display: flex;\n}\n.input-group.input-group--selection-controls .icon {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  user-select: none;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.input-group.input-group--selection-controls .input-group__details:before,\n.input-group.input-group--selection-controls .input-group__details:after {\n  display: none;\n}\n.input-group.input-group--selection-controls .input-group__input {\n  color: inherit;\n  width: 100%;\n  position: relative;\n}\n.input-group.input-group--selection-controls .input-group__input .icon {\n  align-self: center;\n  height: 30px;\n  margin: auto;\n}\n.input-group--selection-controls label {\n  cursor: pointer;\n  margin-left: 32px;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n.input-group--selection-controls__ripple {\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n  cursor: pointer;\n  position: absolute;\n  transform: translate3d(-12px, -50%, 0);\n  transform-origin: center center;\n  top: 50%;\n  left: 0;\n}\n.input-group--selection-controls__ripple:before {\n  content: '';\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: currentColor;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0) scale(0.3);\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  transform-origin: center center;\n}\n.input-group--slider {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.input-group--slider .input-group__details:before,\n.input-group--slider .input-group__details:after {\n  display: none;\n}\n.input-group--slider .input-group__input {\n  flex: 1 1 100%;\n}\n.input-group--slider label + .input-group__input {\n  margin-left: 16px;\n  flex: 1 1 auto;\n}\n.input-group--slider:not(.input-group--disabled).input-group--dirty .slider__track-fill {\n  background: #1976d2;\n}\n.input-group--slider.input-group--active .slider__thumb {\n  transform: translateY(-50%) scale(1.2);\n}\n.input-group--slider.input-group--active .slider__track {\n  transition: none;\n}\n.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb {\n  transform: translateY(-50%) scale(0);\n}\n.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb:hover {\n  transform: translateY(-50%) scale(0);\n}\n.input-group--slider.input-group--active .slider__thumb-container,\n.input-group--slider.input-group--active .slider__track-fill {\n  transition: none;\n}\n.input-group--slider.input-group--active.input-group--ticks .slider__track__container:after,\n.input-group--slider.input-group--active.input-group--ticks .slider__tick {\n  opacity: 1;\n}\n.input-group--slider.input-group--dirty .slider__thumb {\n  background: #1976d2;\n  border-color: #1976d2;\n}\n.input-group--slider.input-group--dirty .slider__thumb--label {\n  background: #1976d2;\n}\n.input-group--slider.input-group--disabled {\n  pointer-events: none;\n}\n.input-group--slider.input-group--disabled .slider__thumb {\n  transform: translateY(-50%) scale(0.5);\n  background: transparent;\n}\n.input-group--slider.input-group--disabled.input-group--dirty {\n  border-color: transparent;\n}\n.input-group--slider.input-group--prepend-icon .slider {\n  margin-left: 40px;\n}\n.input-group--slider.input-group--append-icon .slider {\n  margin-right: 40px;\n}\n.slider {\n  cursor: default;\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 30px;\n  flex: 1;\n  user-select: none;\n}\n.slider__track__container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 2px;\n  width: 100%;\n  overflow: hidden;\n}\n.slider__track__container:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 2px;\n  transition: 0.3s ease-in-out;\n  width: 2px;\n  opacity: 0;\n}\n.slider__track,\n.slider__thumb,\n.slider__tick {\n  position: absolute;\n  top: 0;\n}\n.slider__track {\n  height: 2px;\n  left: 0;\n  transition: 0.3s ease-in-out;\n  transform-origin: right;\n  overflow: hidden;\n  width: 100%;\n}\n.slider__track-fill {\n  position: absolute;\n  left: 0;\n  height: 2px;\n  transform-origin: left;\n  width: 100%;\n  transition: 0.3s ease-in-out;\n}\n.slider__ticks-container {\n  position: absolute;\n  left: 0;\n  height: 2px;\n  width: 100%;\n}\n.slider__ticks-container {\n  top: 50%;\n  overflow: hidden;\n}\n.slider__tick {\n  transition: 0.3s ease-in-out;\n  opacity: 0;\n}\n.slider__thumb-container {\n  position: absolute;\n  top: 50%;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb {\n  width: 20px;\n  height: 20px;\n  left: -10px;\n  top: 50%;\n  border-radius: 50%;\n  background: transparent;\n  transition: 0.3s ease-in-out;\n  transform: translateY(-50%) scale(0.8);\n  user-select: none;\n}\n.slider__thumb--label__container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb--label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50% 50% 0;\n  position: absolute;\n  left: -14px;\n  top: -40px;\n  transform: rotate(45deg);\n  user-select: none;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb--label span {\n  transform: rotate(-45deg) translateZ(0);\n}\n.small-dialog {\n  display: block;\n  height: 100%;\n}\n.small-dialog__content {\n  padding: 0 24px;\n}\n.small-dialog__actions {\n  text-align: right;\n}\n.small-dialog a {\n  display: flex;\n  align-items: center;\n  color: rgba(0,0,0,0.87);\n  height: 100%;\n  text-decoration: none;\n}\n.small-dialog a > * {\n  width: 100%;\n}\n.small-dialog .menu__activator {\n  height: 100%;\n}\n.snack {\n  background-color: #323232;\n  position: fixed;\n  display: flex;\n  height: 0;\n  pointer-events: none;\n  visibility: visible;\n  z-index: 1000;\n}\n.snack--absolute {\n  position: absolute;\n}\n.snack--top {\n  top: 0;\n  left: 50%;\n  transform: translate3d(-50%, 0, 0) translateZ(0);\n}\n.snack--bottom {\n  bottom: 48px;\n  left: 50%;\n  transform: translate3d(-50%, 0, 0) translateZ(0);\n}\n.snack--left {\n  left: 8px;\n  right: initial;\n  transform: none;\n}\n.snack--left.snack--top {\n  top: 8px;\n}\n.snack--left.snack--bottom {\n  bottom: 56px;\n}\n.snack--right {\n  left: initial;\n  right: 8px;\n  transform: none;\n}\n.snack--right.snack--top {\n  top: 8px;\n}\n.snack--right.snack--bottom {\n  top: initial;\n  bottom: 56px;\n}\n.snack__content {\n  background-color: inherit;\n  padding: 14px 24px;\n  border-radius: 2px;\n  pointer-events: auto;\n  max-width: 568px;\n  min-width: 288px;\n  height: 48px;\n  align-items: center;\n  color: #fff;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative !important;\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.snack__content .btn {\n  margin: 0 0 0 48px;\n}\n@media only screen and (max-width: 599px) {\n.snack {\n    width: 100%;\n    left: 0;\n    right: initial;\n    transform: none;\n}\n.snack--right.snack--top,\n  .snack--left.snack--top {\n    top: 0;\n}\n.snack--right.snack--bottom,\n  .snack--left.snack--bottom {\n    bottom: 48px;\n}\n.snack__content {\n    border-radius: 0;\n    max-width: 100%;\n    width: 100%;\n}\n.snack__content .btn {\n    margin: 0 0 0 24px;\n}\n.snack--multi-line .snack__content {\n    height: 80px;\n    padding: 24px;\n}\n.snack--bottom.snack--multi-line,\n  .snack--right.snack--multi-line {\n    bottom: 80px;\n}\n.snack--vertical .snack__content {\n    height: 112px;\n    padding: 24px 24px 14px;\n    flex-direction: column;\n    align-items: initial;\n}\n.snack--vertical .snack__content .btn {\n    align-self: flex-end;\n}\n.snack--bottom.snack--vertical,\n  .snack--right.snack--vertical {\n    bottom: 112px;\n}\n}\n.speed-dial {\n  position: relative;\n}\n.speed-dial--absolute {\n  position: absolute;\n}\n.speed-dial--fixed {\n  position: fixed;\n}\n.speed-dial--top:not(.speed-dial--absolute) {\n  top: 4px;\n}\n.speed-dial--top.speed-dial--absolute {\n  top: 50%;\n  transform: translateY(-50%);\n}\n.speed-dial--bottom:not(.speed-dial--absolute) {\n  bottom: 4px;\n}\n.speed-dial--bottom.speed-dial--absolute {\n  bottom: 50%;\n  transform: translateY(50%);\n}\n.speed-dial--left {\n  left: 4px;\n}\n.speed-dial--right {\n  right: 4px;\n}\n.speed-dial--direction-left .speed-dial__list,\n.speed-dial--direction-right .speed-dial__list {\n  height: 100%;\n  top: 0;\n}\n.speed-dial--direction-top .speed-dial__list,\n.speed-dial--direction-bottom .speed-dial__list {\n  left: 0;\n  width: 100%;\n}\n.speed-dial--direction-top .speed-dial__list {\n  flex-direction: column-reverse;\n  bottom: 100%;\n}\n.speed-dial--direction-right .speed-dial__list {\n  flex-direction: row;\n  left: 100%;\n}\n.speed-dial--direction-bottom .speed-dial__list {\n  flex-direction: column;\n  top: 100%;\n}\n.speed-dial--direction-left .speed-dial__list {\n  flex-direction: row-reverse;\n  right: 100%;\n}\n.speed-dial__list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n}\n.speed-dial__list .btn:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.speed-dial__list .btn:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.speed-dial__list .btn:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.speed-dial__list .btn:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.speed-dial__list .btn:nth-child(5) {\n  transition-delay: 0.25s;\n}\n.speed-dial__list .btn:nth-child(6) {\n  transition-delay: 0.3s;\n}\n.speed-dial__list .btn:nth-child(7) {\n  transition-delay: 0.35s;\n}\n.stepper {\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.stepper__header {\n  align-items: stretch;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.stepper__header .divider {\n  align-self: center;\n  margin: 0 -16px;\n}\n.stepper__step__step {\n  align-items: center;\n  background: rgba(0,0,0,0.38);\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  font-size: 12px;\n  justify-content: center;\n  height: 24px;\n  margin-right: 8px;\n  width: 24px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.stepper__step__step .icon {\n  font-size: 18px;\n  color: #fff;\n}\n.stepper__step {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 24px;\n  position: relative;\n}\n.stepper__step--active .stepper__label {\n  text-shadow: 0px 0px 0px #000;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.stepper__step--active .stepper__step__step {\n  background: #1976d2;\n}\n.stepper__step--editable {\n  cursor: pointer;\n}\n.stepper__step--editable:hover {\n  background: rgba(0,0,0,0.06);\n  text-shadow: 0px 0px 0px #000;\n}\n.stepper__step--inactive.stepper__step--editable:hover .stepper__step__step {\n  background: rgba(0,0,0,0.5);\n}\n.stepper__step--complete .stepper__label {\n  color: rgba(0,0,0,0.87);\n}\n.stepper__step--complete .stepper__step__step {\n  background: #1976d2;\n}\n.stepper__step--error .stepper__step__step {\n  background: transparent;\n  color: #ff5252;\n}\n.stepper__step--error .stepper__step__step .icon {\n  font-size: 24px;\n  color: #ff5252;\n}\n.stepper__step--error .stepper__label {\n  color: #ff5252;\n  text-shadow: none;\n  font-weight: 500;\n}\n.stepper__step--error .stepper__label small {\n  color: #ff5252;\n}\n.stepper__label {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  color: rgba(0,0,0,0.38);\n}\n.stepper__label small {\n  font-size: 12px;\n  font-weight: 300;\n  color: rgba(0,0,0,0.54);\n  text-shadow: none;\n}\n.stepper__wrapper {\n  overflow: hidden;\n  transition: none;\n}\n.stepper__content {\n  top: initial;\n  bottom: 0;\n  padding: 16px;\n  flex: 1;\n  width: 100%;\n}\n.stepper__content .btn {\n  margin-left: 0;\n}\n.stepper--is-booted .stepper__content,\n.stepper--is-booted .stepper__wrapper {\n  transition: 0.4s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.stepper--non-linear .stepper__step:not(.stepper__step--complete) .stepper__label {\n  color: rgba(0,0,0,0.54);\n}\n.stepper--vertical {\n  padding-bottom: 36px;\n}\n.stepper--vertical .stepper__content {\n  margin: -8px 0 -16px 36px;\n  padding: 16px 60px 16px 23px;\n  width: auto;\n}\n.stepper--vertical .stepper__content:not(:last-child) {\n  border-left: 1px solid rgba(0,0,0,0.12);\n}\n.stepper--vertical .stepper__step {\n  padding: 24px 24px 16px;\n}\n.stepper--vertical .stepper__step__step {\n  margin-right: 12px;\n}\n.stepper--alt-labels .stepper__header .divider {\n  margin: 35px -67px 0;\n  align-self: flex-start;\n}\n.stepper--alt-labels .stepper__step {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-basis: 175px;\n}\n.stepper--alt-labels .stepper__step small {\n  align-self: center;\n}\n.stepper--alt-labels .stepper__step__step {\n  margin-right: 0;\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 1023px) {\n.stepper:not(.stepper--vertical) .stepper__label {\n    display: none;\n}\n.stepper:not(.stepper--vertical) .stepper__step__step {\n    margin-right: 0;\n}\n}\n.subheader {\n  height: 48px;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 16px 0 16px;\n}\n.subheader--inset {\n  margin-left: 56px;\n}\n.input-group.input-group--selection-controls {\n  z-index: 0;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  position: relative;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container[class*=\"--text\"] .input-group--selection-controls__ripple--active:after {\n  background-color: currentColor;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  background-color: currentColor;\n  color: inherit;\n  position: absolute;\n  height: 14px;\n  top: 50%;\n  left: 0;\n  width: 34px;\n  border-radius: 8px;\n  transform: translateY(-50%);\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle.input-group--selection-controls__toggle--active {\n  opacity: 0.5;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple {\n  transform: translate3d(-15px, -24px, 0);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 1;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  cursor: pointer;\n  width: 20px;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  height: 20px;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active {\n  transform: translate3d(2px, -24px, 0);\n}\n.input-group.input-group--selection-controls.switch label {\n  margin-left: 44px;\n}\n.system-bar {\n  align-items: center;\n  display: flex;\n  padding: 0 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.system-bar .icon {\n  font-size: 16px;\n}\n.system-bar--status {\n  height: 24px;\n}\n.system-bar--status .icon {\n  margin-right: 4px;\n}\n.system-bar--window {\n  height: 32px;\n}\n.system-bar--window .icon {\n  font-size: 20px;\n  margin-right: 8px;\n}\n.system-bar--status + .navigation-drawer {\n  margin-top: 24px;\n  max-height: calc(100vh - 24px);\n}\n.system-bar--window + .navigation-drawer {\n  margin-top: 32px;\n  max-height: calc(100vh - 32px);\n}\n.table__overflow {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\ntable.table {\n  border-radius: 2px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  max-width: 100%;\n}\ntable.table tr:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\ntable.table thead td:not(:nth-child(1)),\ntable.table tbody td:not(:nth-child(1)),\ntable.table thead th:not(:nth-child(1)),\ntable.table tbody th:not(:nth-child(1)),\ntable.table thead td:first-child,\ntable.table tbody td:first-child,\ntable.table thead th:first-child,\ntable.table tbody th:first-child {\n  padding: 0 24px;\n}\ntable.table thead tr {\n  height: 56px;\n}\ntable.table thead th {\n  color: rgba(0,0,0,0.54);\n  font-weight: 500;\n  font-size: 12px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n  user-select: none;\n}\ntable.table thead th.sortable {\n  pointer-events: auto;\n}\ntable.table thead th > div {\n  width: 100%;\n}\ntable.table thead:last-of-type {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\ntable.table tbody tr {\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: background;\n}\ntable.table tbody tr[active] {\n  background: #f5f5f5;\n}\ntable.table tbody tr:hover {\n  background: #eee;\n}\ntable.table tbody td,\ntable.table tbody th {\n  height: 48px;\n}\ntable.table tbody td {\n  font-weight: 400;\n  font-size: 13px;\n}\ntable.table .input-group--selection-controls {\n  margin: 0;\n}\ntable.table .input-group--selection-controls .input-group__details {\n  display: none;\n}\ntable.table .input-group--selection-controls.checkbox .icon {\n  left: 50%;\n  transform: translateX(-50%);\n}\ntable.table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple {\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\ntable.table tfoot tr {\n  height: 56px;\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.tabs {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.tabs--grow .tabs__li {\n  flex: 1;\n}\n.tabs--fixed .tabs__li {\n  min-width: 160px;\n  max-width: 264px;\n  flex: 0 1 160px;\n}\n@media only screen and (max-width: 599px) {\n.tabs--fixed .tabs__li {\n    min-width: 72px;\n}\n}\n.tabs--centered .tabs__container {\n  justify-content: center;\n}\n.tabs--icons .tabs__bar {\n  height: 72px;\n}\n.tabs--icons .tabs__item {\n  flex-direction: column;\n}\n.tabs.tabs--mobile .tabs__bar .icon--left,\n.tabs.tabs--mobile .tabs__bar .icon--right {\n  display: none;\n}\n.tabs.tabs--mobile .tabs__bar .tabs__wrapper--scrollable.tabs__wrapper--overflow {\n  overflow: hidden !important;\n}\n.tabs:not(.tabs--grow):not(.tabs--mobile) .tabs__item {\n  padding: 0 24px;\n}\n.tabs:not(.tabs--centered):not(.tabs--grow):not(.tabs--mobile) .tabs__wrapper--scrollable {\n  margin: 0 60px;\n  overflow: hidden !important;\n}\n.tabs__bar {\n  background-color: #1976d2;\n  width: 100%;\n  position: relative;\n  height: 48px;\n}\n@media only screen and (max-width: 1023px) {\n.tabs__bar {\n    padding-left: 0;\n}\n}\n.tabs__bar .icon--left,\n.tabs__bar .icon--right {\n  position: absolute;\n  top: 0;\n  width: 32px;\n  align-items: center;\n  height: 100%;\n  cursor: pointer;\n  user-select: none;\n}\n.tabs__bar .icon--left {\n  left: 28px;\n}\n.tabs__bar .icon--right {\n  right: 28px;\n}\n.tabs__container {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 0;\n  top: 0;\n  align-items: center;\n  list-style: none;\n  will-change: transform;\n  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);\n}\n.tabs__container > li:not(.tabs__slider) {\n  height: 100%;\n}\n.tabs__container-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 32px;\n  display: flex;\n  align-items: center;\n}\n.tabs__wrapper {\n  position: relative;\n  overflow-x: auto;\n  height: inherit;\n}\n.tabs__item {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  height: 100%;\n  padding: 0 12px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tabs__item .icon {\n  color: inherit;\n  margin: 0 0 5px;\n}\n.tabs__item--disabled {\n  pointer-events: none;\n}\n.tabs__items {\n  position: relative;\n  border-width: 0 1px 1px 1px;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.1);\n  overflow: hidden;\n}\n.tabs__content {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.tabs__content .card {\n  border-radius: 0 0 2px 2px;\n}\n.tabs__slider {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background: #448aff;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field label {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n  transform: translate3d(0, 0, 0);\n  transform-origin: top left;\n  width: 100%;\n}\n.input-group--text-field.input-group--multi-line:not(.input-group--focused):not(.input-group--dirty) label {\n  transform: translate3d(0, 0, 0);\n}\n.input-group--text-field input {\n  box-shadow: none;\n  font-size: 16px;\n  flex: 1;\n  margin: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  min-width: 0;\n  height: 30px;\n}\n.input-group--text-field input + .icon {\n  padding: 0 6px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.input-group--text-field input:focus {\n  outline: none;\n}\n.input-group--text-field input:disabled {\n  pointer-events: none;\n}\n.input-group--text-field textarea {\n  font-size: 16px;\n  flex: 1 1;\n}\n.input-group--text-field textarea:focus {\n  outline: none;\n}\n.input-group--text-field .input-group__counter {\n  margin-left: auto;\n}\n.input-group--text-field .input-group__counter--error {\n  color: #ff5252 !important;\n}\n.input-group--text-field.input-group--placeholder:not(.input-group--focused):not(.input-group--dirty) label {\n  opacity: 0;\n}\n.input-group--text-field.input-group--prepend-icon .input-group__prepend-icon {\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n  min-width: 40px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field.input-group--prepend-icon .input-group__details {\n  margin-left: auto;\n  padding-left: 40px;\n}\n.input-group--text-field.input-group--prepend-icon .input-group__details:before,\n.input-group--text-field.input-group--prepend-icon .input-group__details:after {\n  margin-left: 40px;\n  max-width: calc(100% - 40px);\n}\n.input-group--text-field.input-group--prepend-icon label {\n  margin-left: 40px;\n}\n.input-group--text-field.input-group--prepend-icon input {\n  flex: auto;\n}\n.input-group--text-field:not(.input-group--single-line).input-group--focused label,\n.input-group--text-field:not(.input-group--single-line):focus label {\n  opacity: 1;\n  transform: translate3d(0, -18px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--dirty label {\n  transform: translate3d(0, -18px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--single-line label {\n  transform: translate3d(0, 0, 0);\n}\n.input-group--text-field.input-group--single-line.input-group--dirty label {\n  display: none;\n}\n.input-group--text-field.input-group--full-width {\n  padding: 0 16px;\n}\n.input-group--text-field.input-group--full-width label {\n  margin-left: 16px;\n}\n.input-group--text-field.input-group--full-width .input-group__details:before,\n.input-group--text-field.input-group--full-width .input-group__details:after {\n  display: none;\n}\n.input-group--text-field.input-group--solo {\n  background: #fff;\n  height: 46px;\n  border-radius: 2px;\n  padding: 0 16px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.input-group--text-field.input-group--solo input {\n  margin-top: 8px;\n}\n.input-group--text-field.input-group--solo label {\n  top: 8px;\n  left: 16px;\n  transform: none !important;\n}\n.input-group--text-field.input-group--solo:hover {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.input-group--prefix:not(.input-group--focused):not(.input-group--dirty) label {\n  left: 16px;\n}\n.input-group--prefix .input-group--text-field__prefix,\n.input-group--prefix .input-group--text-field__suffix {\n  align-items: center;\n  display: inline-flex;\n  font-size: 16px;\n  margin-top: 1px;\n}\n.input-group--prefix .input-group--text-field__prefix {\n  margin-right: 3px;\n}\n.input-group--prefix .input-group--text-field__suffix {\n  margin-left: 3px;\n}\n.picker--time .card__row--actions {\n  margin-top: -10px;\n}\n.picker--time.picker--dark .picker--time__clock {\n  background: #616161;\n}\n.picker--time.picker--dark .picker--time__clock-hand:before {\n  border-color: #448aff;\n}\n.picker--time.picker--dark .picker--time__clock-hand,\n.picker--time.picker--dark .picker--time__clock:after {\n  background: #448aff;\n}\n.picker--time.picker--dark .picker--time__clock > span {\n  color: #fff;\n}\n.picker--time.picker--dark .picker--time__clock > span.active {\n  color: #000;\n}\n.picker--time.picker--dark .picker--time__clock > span.active:before {\n  background: #448aff;\n}\n.picker--time.picker--dark .picker--time__clock > span.disabled {\n  color: rgba(255,255,255,0.26);\n}\n.picker--time.picker--landscape {\n  flex-wrap: wrap;\n}\n.picker--time.picker--landscape .picker__title {\n  flex-direction: column;\n  justify-content: center;\n}\n.picker--time.picker--landscape .picker__title div:first-child {\n  text-align: right;\n}\n.picker--time.picker--landscape .picker__title div:first-child span {\n  height: 55px;\n  font-size: 55px;\n}\n.picker--time.picker--landscape .picker__title div:last-child {\n  margin: 16px 0 0;\n  align-self: initial;\n  text-align: center;\n}\n.picker--time.picker--landscape .picker--time__clock {\n  height: 250px;\n  width: 250px;\n}\n.picker--time.picker--landscape .picker--time__clock-hand {\n  height: 97px;\n}\n.picker--time .picker__title {\n  display: flex;\n  justify-content: flex-end;\n}\n.picker--time .picker__title div:first-child {\n  white-space: nowrap;\n}\n.picker--time .picker__title div:first-child span {\n  align-items: center;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  height: 70px;\n  font-size: 70px;\n  justify-content: center;\n  opacity: 0.6;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--time .picker__title div:first-child span.active {\n  opacity: 1;\n}\n.picker--time .picker__title div:last-child {\n  align-self: flex-end;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  margin: 8px 0 6px 8px;\n}\n.picker--time .picker__title div:last-child span {\n  cursor: pointer;\n  opacity: 0.6;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--time .picker__title div:last-child span.active {\n  opacity: 1;\n}\n.picker--time .picker__title div:only-child {\n  flex-direction: row;\n}\n.picker--time__clock {\n  height: 270px;\n  width: 270px;\n  border-radius: 100%;\n  background: #e0e0e0;\n  position: absolute;\n  user-select: none;\n  top: 50%;\n  left: 50%;\n  transition: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate(-50%, -50%);\n}\n.picker--time__clock-hand {\n  height: 40%;\n  width: 2px;\n  background: #1976d2;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom;\n  position: absolute;\n}\n.picker--time__clock-hand:before {\n  background: transparent;\n  border: 2px solid #1976d2;\n  border-radius: 100%;\n  width: 10px;\n  height: 10px;\n  content: '';\n  position: absolute;\n  top: -3%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.picker--time__clock:after {\n  content: '';\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  top: 50%;\n  left: 50%;\n  background: #2196f3;\n  border-radius: 100%;\n  transform: translate3d(calc(-50%), -50%, 0);\n}\n.picker--time__clock > span {\n  align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: flex;\n  font-size: 16px;\n  justify-content: center;\n  left: calc(50% - 16px);\n  height: 32px;\n  position: absolute;\n  text-align: center;\n  top: calc(50% - 16px);\n  width: 32px;\n  user-select: none;\n}\n.picker--time__clock > span > span {\n  z-index: 1;\n}\n.picker--time__clock > span:before,\n.picker--time__clock > span:after {\n  content: '';\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  transform: translate3d(-50%, -50%, 0);\n}\n.picker--time__clock > span:after,\n.picker--time__clock > span:before {\n  height: 40px;\n  width: 40px;\n}\n.picker--time__clock > span.active {\n  color: #fff;\n  cursor: default;\n}\n.picker--time__clock > span.active:before {\n  background: #1976d2;\n}\n.picker--time__clock > span.disabled {\n  color: rgba(0,0,0,0.3);\n  pointer-events: none;\n}\n.picker--time .card__row--actions {\n  border: none;\n}\n.picker--dark .picker--time__clock {\n  background: #616161;\n}\n.picker--dark .picker--time__clock-hand:before {\n  border-color: #448aff;\n}\n.picker--dark .picker--time__clock-hand,\n.picker--dark .picker--time__clock:after {\n  background: #448aff;\n}\n.picker--dark .picker--time__clock > span {\n  color: #fff;\n}\n.picker--dark .picker--time__clock > span.active {\n  color: rgba(0,0,0,0.87);\n}\n.picker--dark .picker--time__clock > span.active:before {\n  background: #448aff;\n}\n.toast {\n  position: fixed;\n  z-index: 99999999999999;\n}\n.toast--right {\n  top: 5%;\n  right: 2%;\n}\n.toast--left {\n  top: 5%;\n  left: 2%;\n}\n.toast--top {\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast--bottom {\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast--snack {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast--snack .toast__content {\n  margin-bottom: 0;\n  opacity: 1;\n}\n.toast--snack .toast__content--remove {\n  margin-top: 0;\n}\n.toast__content {\n  background: #424242;\n  border-radius: 2px;\n  color: #fff;\n  padding: 1rem 2rem;\n  margin: 1rem 0;\n  opacity: 0;\n  transform: translate3d(0, 3rem, 0);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.toast__content--active {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n.toast__content--remove {\n  margin-top: -3rem;\n  opacity: 0;\n}\n.toolbar {\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  will-change: padding-left;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.toolbar .input-group--solo .input-group__details {\n  display: none;\n}\n.toolbar__title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  margin-left: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.toolbar__content,\n.toolbar__extension {\n  align-items: center;\n  display: flex;\n}\n.toolbar__content > .list,\n.toolbar__extension > .list {\n  flex: 1 1 auto;\n  margin: 0 !important;\n  max-height: 100%;\n}\n.toolbar__content > .btn:last-child,\n.toolbar__extension > .btn:last-child {\n  margin-right: 10px;\n}\n.toolbar__content > .btn:first-child,\n.toolbar__extension > .btn:first-child {\n  margin-left: 10px;\n}\n.toolbar__content > *:not(.btn):not(.toolbar__title):last-child,\n.toolbar__extension > *:not(.btn):not(.toolbar__title):last-child {\n  margin-right: 16px;\n}\n.toolbar__content > *:not(.btn):not(.toolbar__title):first-child,\n.toolbar__extension > *:not(.btn):not(.toolbar__title):first-child {\n  margin-left: 16px;\n}\n.toolbar__content {\n  height: 64px;\n}\n.toolbar__extension {\n  height: 72px;\n}\n.toolbar__items {\n  display: flex;\n  height: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n.toolbar__items > .btn {\n  height: 100%;\n  margin: 0;\n}\n@media only screen and (max-width: 599px) {\n.toolbar__content > .btn:last-child,\n  .toolbar__extension > .btn:last-child {\n    margin-right: 17px;\n}\n.toolbar__content > .btn:first-child,\n  .toolbar__extension > .btn:first-child {\n    margin-left: 17px;\n}\n.toolbar__content > *:not(.btn):last-child,\n  .toolbar__extension > *:not(.btn):last-child {\n    margin-right: 24px;\n}\n.toolbar__content > *:not(.btn):first-child,\n  .toolbar__extension > *:not(.btn):first-child {\n    margin-left: 24px;\n}\n}\n@media all and (max-width: 1424px) and (orientation: landscape) {\n.toolbar__content,\n  .toolbar__extension {\n    height: 48px;\n}\n}\n.toolbar--card {\n  border-radius: 2px 2px 0 0;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.toolbar--fixed {\n  position: fixed;\n  z-index: 2;\n}\n.toolbar--fixed,\n.toolbar--absolute {\n  top: 0;\n  left: 0;\n}\n.toolbar--fixed + main,\n.toolbar--absolute + main {\n  padding-top: 64px;\n}\n.toolbar--floating {\n  display: inline-flex;\n  margin: 16px;\n  width: auto;\n}\n.toolbar--prominent .toolbar__content {\n  height: 64px;\n}\n.toolbar--prominent .toolbar__extension {\n  height: 64px;\n}\n.toolbar--dense .toolbar__content,\n.toolbar--dense .toolbar__extension {\n  height: 48px;\n}\n.toolbar__extension .toolbar__title {\n  margin-left: 72px !important;\n}\n.toolbar__extension .tabs__bar {\n  align-self: flex-end;\n  margin: 0;\n}\n[data-tooltip] {\n  position: relative;\n}\n[data-tooltip]:before {\n  background: #616161;\n  border-radius: 2px;\n  color: #fff;\n  content: attr(data-tooltip);\n  font-size: 12px;\n  display: inline-block;\n  opacity: 0;\n  padding: 5px 8px;\n  position: absolute;\n  pointer-events: none;\n  text-transform: initial;\n  transition: 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: auto;\n  white-space: pre;\n  z-index: 99;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n[data-tooltip]:hover:before {\n  opacity: 0.9;\n}\n[data-tooltip][data-tooltip-location='bottom']:before {\n  top: 100%;\n  left: 50%;\n  transform: translate3d(-50%, -14px, 0) scale(0);\n  transform-origin: center top;\n}\n[data-tooltip][data-tooltip-location='bottom']:hover:before {\n  transform: translate3d(-50%, 14px, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='top']:before {\n  bottom: 100%;\n  left: 50%;\n  transform: translate3d(-50%, 14px, 0) scale(0);\n  transform-origin: center bottom;\n}\n[data-tooltip][data-tooltip-location='top']:hover:before {\n  transform: translate3d(-50%, -14px, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='left']:before {\n  right: 100%;\n  transform: translate3d(14px, 0, 0) scale(0);\n  transform-origin: center right;\n}\n[data-tooltip][data-tooltip-location='left']:hover:before {\n  transform: translate3d(-14px, 0, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='right']:before {\n  left: 100%;\n  transform: translate3d(-14px, 0, 0) scale(0);\n  transform-origin: center left;\n}\n[data-tooltip][data-tooltip-location='right']:hover:before {\n  transform: translate3d(14px, 0, 0) scale(1);\n}\n@media only screen and (max-width: 1023px) {\n[data-tooltip]:before {\n    padding: 10px 16px;\n}\n[data-tooltip][data-tooltip-location='bottom']:hover:before {\n    transform: translate3d(-50%, 24px, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='top']:hover:before {\n    transform: translate3d(-50%, -24px, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='left']:hover:before {\n    transform: translate3d(-24px, 0, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='right']:hover:before {\n    transform: translate3d(24px, 0, 0) scale(1);\n}\n}\n@media only screen and (max-width: 599px) {\n.hidden-xs-only {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 600px) and (max-width: 1023px) {\n.hidden-sm-only {\n    display: none !important;\n}\n}\n@media only screen and (max-width: 1023px) {\n.hidden-sm-and-down {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 600px) {\n.hidden-sm-and-up {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1024px) and (max-width: 1423px) {\n.hidden-md-only {\n    display: none !important;\n}\n}\n@media only screen and (max-width: 1423px) {\n.hidden-md-and-down {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1024px) {\n.hidden-md-and-up {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1424px) and (max-width: 1903px) {\n.hidden-lg-only {\n    display: none !important;\n}\n}\n@media only screen and (max-width: 1903px) {\n.hidden-lg-and-down {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1424px) {\n.hidden-lg-and-up {\n    display: none !important;\n}\n}\n@media only screen and (min-width: 1904px) {\n.hidden-xl-only {\n    display: none !important;\n}\n}\n.right {\n  float: right !important;\n}\n.left {\n  float: left !important;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n.mr-0 {\n  margin-right: 0 !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0 {\n  margin-left: 0 !important;\n}\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.ma-0 {\n  margin: 0 0 !important;\n}\n.pt-0 {\n  padding-top: 0 !important;\n}\n.pr-0 {\n  padding-right: 0 !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0 {\n  padding-left: 0 !important;\n}\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.pa-0 {\n  padding: 0 0 !important;\n}\n.mt-1 {\n  margin-top: 4px !important;\n}\n.mr-1 {\n  margin-right: 4px !important;\n}\n.mb-1 {\n  margin-bottom: 4px !important;\n}\n.ml-1 {\n  margin-left: 4px !important;\n}\n.mx-1 {\n  margin-left: 4px !important;\n  margin-right: 4px !important;\n}\n.my-1 {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n.ma-1 {\n  margin: 4px 4px !important;\n}\n.pt-1 {\n  padding-top: 4px !important;\n}\n.pr-1 {\n  padding-right: 4px !important;\n}\n.pb-1 {\n  padding-bottom: 4px !important;\n}\n.pl-1 {\n  padding-left: 4px !important;\n}\n.px-1 {\n  padding-left: 4px !important;\n  padding-right: 4px !important;\n}\n.py-1 {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n.pa-1 {\n  padding: 4px 4px !important;\n}\n.mt-2 {\n  margin-top: 8px !important;\n}\n.mr-2 {\n  margin-right: 8px !important;\n}\n.mb-2 {\n  margin-bottom: 8px !important;\n}\n.ml-2 {\n  margin-left: 8px !important;\n}\n.mx-2 {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n.my-2 {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n}\n.ma-2 {\n  margin: 8px 8px !important;\n}\n.pt-2 {\n  padding-top: 8px !important;\n}\n.pr-2 {\n  padding-right: 8px !important;\n}\n.pb-2 {\n  padding-bottom: 8px !important;\n}\n.pl-2 {\n  padding-left: 8px !important;\n}\n.px-2 {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n.py-2 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n.pa-2 {\n  padding: 8px 8px !important;\n}\n.mt-3 {\n  margin-top: 16px !important;\n}\n.mr-3 {\n  margin-right: 16px !important;\n}\n.mb-3 {\n  margin-bottom: 16px !important;\n}\n.ml-3 {\n  margin-left: 16px !important;\n}\n.mx-3 {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n.my-3 {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n.ma-3 {\n  margin: 16px 16px !important;\n}\n.pt-3 {\n  padding-top: 16px !important;\n}\n.pr-3 {\n  padding-right: 16px !important;\n}\n.pb-3 {\n  padding-bottom: 16px !important;\n}\n.pl-3 {\n  padding-left: 16px !important;\n}\n.px-3 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n}\n.py-3 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n.pa-3 {\n  padding: 16px 16px !important;\n}\n.mt-4 {\n  margin-top: 24px !important;\n}\n.mr-4 {\n  margin-right: 24px !important;\n}\n.mb-4 {\n  margin-bottom: 24px !important;\n}\n.ml-4 {\n  margin-left: 24px !important;\n}\n.mx-4 {\n  margin-left: 24px !important;\n  margin-right: 24px !important;\n}\n.my-4 {\n  margin-top: 24px !important;\n  margin-bottom: 24px !important;\n}\n.ma-4 {\n  margin: 24px 24px !important;\n}\n.pt-4 {\n  padding-top: 24px !important;\n}\n.pr-4 {\n  padding-right: 24px !important;\n}\n.pb-4 {\n  padding-bottom: 24px !important;\n}\n.pl-4 {\n  padding-left: 24px !important;\n}\n.px-4 {\n  padding-left: 24px !important;\n  padding-right: 24px !important;\n}\n.py-4 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important;\n}\n.pa-4 {\n  padding: 24px 24px !important;\n}\n.mt-5 {\n  margin-top: 48px !important;\n}\n.mr-5 {\n  margin-right: 48px !important;\n}\n.mb-5 {\n  margin-bottom: 48px !important;\n}\n.ml-5 {\n  margin-left: 48px !important;\n}\n.mx-5 {\n  margin-left: 48px !important;\n  margin-right: 48px !important;\n}\n.my-5 {\n  margin-top: 48px !important;\n  margin-bottom: 48px !important;\n}\n.ma-5 {\n  margin: 48px 48px !important;\n}\n.pt-5 {\n  padding-top: 48px !important;\n}\n.pr-5 {\n  padding-right: 48px !important;\n}\n.pb-5 {\n  padding-bottom: 48px !important;\n}\n.pl-5 {\n  padding-left: 48px !important;\n}\n.px-5 {\n  padding-left: 48px !important;\n  padding-right: 48px !important;\n}\n.py-5 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important;\n}\n.pa-5 {\n  padding: 48px 48px !important;\n}\n@media all and (min-width: 0) {\n.text-xs-left {\n    text-align: left !important;\n}\n.text-xs-center {\n    text-align: center !important;\n}\n.text-xs-right {\n    text-align: right !important;\n}\n.text-xs-justify {\n    text-align: justify !important;\n}\n}\n@media all and (min-width: 600px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-justify {\n    text-align: justify !important;\n}\n}\n@media all and (min-width: 1024px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-justify {\n    text-align: justify !important;\n}\n}\n@media all and (min-width: 1424px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-justify {\n    text-align: justify !important;\n}\n}\n@media all and (min-width: 1904px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-justify {\n    text-align: justify !important;\n}\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(20)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clipped: false,
            drawer: true,
            items: [{ icon: 'power_settings_new', title: 'Главная', route: '/' }, { icon: 'error_outline', title: 'Информация', route: '/info' }],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Quantum.Inc admin page'
        };
    },
    methods: {
        NextRoute(data) {
            this.$router.push(data);
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'index'
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-slide-y-transition', {
    attrs: {
      "mode": "out-in"
    }
  }, [_c('v-layout', {
    attrs: {
      "column": "",
      "align-center": ""
    }
  }, [_c('blockquote', {
    staticClass: "pb-3"
  }, [_vm._v("\n            Добро пожаловать на главную страницу админа.\n            "), _c('footer', [_c('small', [_c('em', [_vm._v("—Quantum.Inc")])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-06c5fb71", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(6);
var Axios = __webpack_require__(27);
var defaults = __webpack_require__(3);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(10);
axios.CancelToken = __webpack_require__(41);
axios.isCancel = __webpack_require__(9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(42);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(3);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(36);
var dispatchRequest = __webpack_require__(37);
var isAbsoluteURL = __webpack_require__(39);
var combineURLs = __webpack_require__(40);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(38);
var isCancel = __webpack_require__(9);
var defaults = __webpack_require__(3);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(10);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', [_c('v-navigation-drawer', {
    attrs: {
      "dark": "",
      "persistent": "",
      "mini-variant": _vm.miniVariant,
      "clipped": _vm.clipped
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('v-list', _vm._l((_vm.items), function(item, i) {
    return _c('v-list-item', {
      key: i,
      on: {
        "click": function($event) {
          _vm.NextRoute(item.route)
        }
      }
    }, [_c('v-list-tile', {
      attrs: {
        "value": "true"
      }
    }, [_c('v-list-tile-action', [_c('v-icon', {
      attrs: {
        "light": ""
      },
      domProps: {
        "innerHTML": _vm._s(item.icon)
      }
    })], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
      domProps: {
        "textContent": _vm._s(item.title)
      }
    })], 1)], 1)], 1)
  }))], 1), _vm._v(" "), _c('v-toolbar', {
    staticClass: "purple lighten-4"
  }, [_c('v-toolbar-side-icon', {
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawer = !_vm.drawer
      }
    }
  }), _vm._v(" "), _c('v-btn', {
    attrs: {
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.miniVariant = !_vm.miniVariant
      }
    }
  }, [_c('v-icon', {
    domProps: {
      "innerHTML": _vm._s(_vm.miniVariant ? 'chevron_right' : 'chevron_left')
    }
  })], 1), _vm._v(" "), _c('v-btn', {
    attrs: {
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clipped = !_vm.clipped
      }
    }
  }, [_c('v-icon', [_vm._v("web")])], 1), _vm._v(" "), _c('v-toolbar-title', {
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('v-spacer')], 1), _vm._v(" "), _c('main', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef94ba00", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(46),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\TotalWorkspace\\Node.js\\vuetify_template\\src\\info.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-461e7a5f", Component.options)
  } else {
    hotAPI.reload("data-v-461e7a5f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'info'
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-xs-left"
  }, [_c('p', {
    staticClass: "headline"
  }, [_vm._v("Вы можете: ")]), _vm._v(" "), _c('blockquote', [_vm._v(" Добавлять команды боту ")]), _vm._v(" "), _c('blockquote', [_vm._v(" Делать рассылку по подписавшимся пользователям ")]), _vm._v(" "), _c('blockquote', [_vm._v(" Писать личное сообщение выбранному пользователю ")]), _vm._v(" "), _c('blockquote', [_vm._v(" Смотреть историю переписки с пользователями ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-461e7a5f", module.exports)
  }
}

/***/ })
/******/ ]);