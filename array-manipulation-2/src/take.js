/* exported take */

/*
  create function named `take` with two parameters `array` and `count`
    assign an empty array to a new variable `newArray`
    For each index in the array
      check if array is empty
        if it is, then stop function
      if it is not an empty array
        assign the element to the variable `newArray`
      return the value of `newArray`
*/

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (typeof array[i] === 'undefined') {
      break;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
