/* exported drop */

/*
  create function named `drop` with two parameters `array` and `count`
    assign an empty array to a new variable `newArray`
    For each index in the array that start at `count`
      check if array is empty
        if it is, then stop function
      if it is not an empty array
        assign the element to the variable `newArray`
      return the value of `newArray`
*/

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (array === []) {
      break;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
