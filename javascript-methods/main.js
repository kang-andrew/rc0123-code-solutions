// Math Object
var one = 1;
var two = 2;
var three = 3;
var maximumValue = Math.max(one, two, three);
console.log('maximumValue:', Math.max(maximumValue));

var heroes = ['Iron man', 'Superman', 'Iron Fist', 'Daredevil'];

var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods
var library = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

// String Methods

var fullName = 'Andrew Kang';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
