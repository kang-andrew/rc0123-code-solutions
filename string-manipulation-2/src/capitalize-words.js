/* exported capitalizeWords */
function capitalizeWords(string) {
  var result = '';
  var splitWords = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    result += splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i][1].toLowerCase();
  }
  return result;
}
