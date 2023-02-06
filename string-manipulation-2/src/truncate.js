/* exported truncate */
function truncate(length, string) {
  var truncatedString = '';
  for (var i = 0; i < length; i++) {
    if (typeof string[i] === 'string') {
      truncatedString += string[i];
    } else if (typeof string[i] !== 'string') {
      break;
    }
  }
  return truncatedString + '...';
}
