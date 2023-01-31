function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}

var convertedSeconds = convertMinutesToSeconds(15);
console.log('convertedSeconds:', convertedSeconds);

function greet(name) {
  var heyName = 'Hey, ' + name + '!';
  return heyName;
}

var greeting = greet('Obi');
console.log('greeting:', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(7, 10);
console.log('areaResult:', areaResult);

function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}

var firstNameResult = getFirstName({ firstName: 'Cody', lastName: 'Bellinger' });
console.log('firstNameResult:', firstNameResult);

function getLastElement(array) {
  var lastArray = array[array.length - 1];
  return lastArray;
}

var lastArrayResult = getLastElement(['Dodgers', 'Cubs', 'Yankees']);
console.log(lastArrayResult);
