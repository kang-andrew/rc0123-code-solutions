var student = {
  firstName: 'Andrew',
  lastName: 'Kang',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value for fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Event Manager';

console.log('value for livesInIrvine:', student.livesInIrvine);
console.log('value for previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Audi',
  model: 'R8',
  year: '2022'
};

vehicle['color'] = 'yellow';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible', vehicle['isConvertible']);
console.log('value for vehicle:', vehicle);

var pet = {
  name: 'Kai',
  type: 'dog'
};

delete pet.name;
delete pet['type'];
console.log('value for pet:', pet);
