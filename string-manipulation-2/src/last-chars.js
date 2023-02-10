/* exported lastChars */
function lastChars(length, string) {
  var result = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (typeof string[i] === 'string') {
      result += string[i];
    }
  }
  return result;
}
