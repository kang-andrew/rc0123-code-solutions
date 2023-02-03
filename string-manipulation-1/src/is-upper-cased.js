/* exported isUpperCased */

/*
  Define a function, named `isUpperCased`, that accepts one argument `word`.
    check if every letter in the argument `word` is capitalized.
    return true if they are all capital letters.
  return false if they are not all capital letters.
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
