/* exported tail */

/*
  Define a function named `tail` that accepts one argument, `array`
  Declare a variabled named tailResult with an empty array value
  Begin a loop that iterates through the `array` array, where
    For each index in the array starting from 1:
      add the element into the empty array of tailResult
  return the value tailResult
*/

function tail(array) {
  var tailResult = [];
  for (var i = 1; i < array.length; i++) {
    tailResult.push(array[i]);
  }
  return tailResult;
}
