/* exported isUpperCased */

/*
  check if the `word` argument is equal to the toUpperCase method of the word object.
    return the value true if it is.
  return the value false if it is not.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
