/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array === []) {
      break;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
