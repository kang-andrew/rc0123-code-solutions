/* exported getKeys */

/*
  Define a function `getKeys` that accepts one argument, `object`
    Declare a variable `propertyKeys` with an empty array
    Begin a loop that iterates through each key in an object
      Add the key for that index into the empty array
    return value for `propertyKeys`
*/

function getKeys(object) {
  var propertyKeys = [];
  for (var key in object) {
    propertyKeys.push(key);
  }
  return propertyKeys;
}
