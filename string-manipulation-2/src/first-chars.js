/* exported firstChars */
function firstChars(length, string) {
  var result = '';
  for (var i = 0; i < length; i++) {
    if (typeof string[i] === 'string') {
      result += string[i];
    }
  }
  return result;
}
