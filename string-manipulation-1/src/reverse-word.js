/* exported reverseWord */
function reverseWord(word) {
  var letters = '';
  for (var i = word.length - 1; i >= 0; i--) {
    letters += word[i];
  }
  return letters;
}
