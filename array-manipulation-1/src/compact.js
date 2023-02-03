/* exported compact */
function compact(array) {
  var compactedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] === false) {
      continue;
    } else if (!!array[i] === true) {
      compactedArray.push(array[i]);
    }
  }
  return compactedArray;
}
