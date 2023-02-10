/* exported includes */

/*
  create function named `includes` with two parameters `array` and `value`
    For each index in the array
      check if array is empty
        if it is, then return false
      if the element is not equal to `value1
        continue
      if the element is equal to `value`
        return true;
    If these conditions are not met, return false.
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array === []) {
      return false;
    } else if (array[i] !== value) {
      continue;
    } else if (array[i] === value) {
      return true;
    }
  }
  return false;
}
