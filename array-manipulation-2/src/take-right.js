/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array === []) {
      break;
    } else if (array.length < count) {
      return array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
