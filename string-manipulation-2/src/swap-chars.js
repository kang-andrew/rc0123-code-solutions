/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      result += string[i];
    } else if (string[i] === string[firstIndex]) {
      result += string[secondIndex];
    } else if (string[i] === string[secondIndex]) {
      result += string[firstIndex];
    }
  }
  return result;
}
