/* exported getLastChar */

/*
  Define a function called `getLastChar`, that accepts one argument `string`.
    return the value of the charAt method of the string object being called with the argument the length property of string minus 1.
*/

function getLastChar(string) {
  return string.charAt(string.length - 1);
}
