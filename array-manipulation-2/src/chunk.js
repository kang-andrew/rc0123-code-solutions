/* exported chunk */
function chunk(array, size) {
  var chunkedArray = [];
  for (var i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, size + i));
  }
  return chunkedArray;
}
