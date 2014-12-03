/*!
 * Parse JavaScript SDK
 * Version: 1.3.1
 * Built: Fri Oct 17 2014 18:17:39
 * http://parse.com
 *
 * Copyright 2014 Parse, Inc.
 * The Parse JavaScript SDK is freely distributable under the MIT license.
 *
 * Includes: Lo-Dash v2.4.1
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0, copyright 2009-2014 Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 * Released under the MIT license.
 */

/**
 * Contains all Parse API classes and functions.
 * @name Parse
 * @namespace
 *
 * Contains all Parse API classes and functions.
 */
var Parse = {};

require('./lib/parse')(Parse);
require('./lib/parse-analytics')(Parse);
require('./lib/parse-config')(Parse);
require('./lib/parse-error')(Parse);
require('./lib/parse-events')(Parse);
require('./lib/parse-geopoint')(Parse);
require('./lib/parse-acl')(Parse);
require('./lib/parse-op')(Parse);
require('./lib/parse-relation')(Parse);
require('./lib/parse-promise')(Parse);
require('./lib/parse-file')(Parse);
require('./lib/parse-object')(Parse);
require('./lib/parse-role')(Parse);
require('./lib/parse-collection')(Parse);
require('./lib/parse-view')(Parse);
require('./lib/parse-user')(Parse);
require('./lib/parse-query')(Parse);
require('./lib/parse-facebook-utils')(Parse);
require('./lib/parse-history')(Parse);
require('./lib/parse-router')(Parse);
require('./lib/parse-cloud')(Parse);
require('./lib/parse-push')(Parse);

module.exports = Parse;
