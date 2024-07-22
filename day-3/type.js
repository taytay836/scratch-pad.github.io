// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE ///return true if valur is an array, false otherwise
    //return true if value is an array otherwise return false
    return Object.prototype.toString.call(value) === '[object Array]';
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //check ifvalue is an object excluding date
    //
    return typeof value === 'object' && value !== null && Object.prototype.toString.call(value) !== '[object Array]' && Object.prototype.toString.call(value) !== '[object Date]';

    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //check if given value is an array or object
    return Object.prototype.toString.call(value) === '[object Array]' || (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) !== '[object Date]');

    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //determine what type of value this is and return string of it
      // Handle special case for null
      if (value === null) {
        return "null";
    }
    
    // Use typeof operator for other types
    var valueType = typeof value;
    
    // Handle typeof edge cases
    switch (valueType) {
        case "object":
            if (Array.isArray(value)) {
                return "array";
            } else if (value instanceof Date) {
                return "date";
            } else {
                return "object";
            }
        default:
            return valueType;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}