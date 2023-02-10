/* exported ransomCase */
function ransomCase(string) {
  var everyOtherLetter = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      everyOtherLetter += string[i].toLowerCase();
    } else if (i % 2 !== 0) {
      everyOtherLetter += string[i].toUpperCase();
    }
  }
  return everyOtherLetter;
}
