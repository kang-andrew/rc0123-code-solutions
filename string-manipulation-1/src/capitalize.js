/* exported capitalize */

/*
  return the value toUpperCase method of the charAt method of the word object beging called with the argument zero plus the toLowerCase method of the slice method of the word object being called with the argument one
*/

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
