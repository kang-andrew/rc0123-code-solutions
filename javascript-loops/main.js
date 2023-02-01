/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log(repeatWord('Yo', 8));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter('Hi'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(doubleAll([5, 10, 20]));

function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
  }
  return keys;
}

console.log('getKeys({ name: \'Obi\', pet: \'dog\', age: 4 })', getKeys({ name: 'Obi', pet: 'dog', age: 4 }));

function getValues(object) {
  var values = [];
  for (const x in object) {
    values.push(object[x]);
  }
  return values;
}

console.log('getValues({ fullName: \'Obi\', lastName: \'Solo\', age: 17 })', getValues({ fullName: 'Obi', lastName: 'Solo', age: 17 }));
