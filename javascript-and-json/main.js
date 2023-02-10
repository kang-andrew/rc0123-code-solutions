var books = [
  {
    isbn: '978-7543321724',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salingar'
  },
  {
    isbn: '978-0451524935',
    title: '1984',
    author: 'George Orwell'
  },
  {
    isbn: '978-0439136358',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling'
  }
];

console.log('books:', books);
console.log('typeof:', typeof books);

var booksJson = JSON.stringify(books);

console.log('booksJson:', booksJson);
console.log('typeof booksJson:', typeof booksJson);

var stringStudentJson = '{"id":777, "name":"Rey Sunshine"}';

console.log('stringStudentJson:', stringStudentJson);
console.log('typeof stringStudentJson:', typeof stringStudentJson);

var studentJson = JSON.parse(stringStudentJson);

console.log('stringJson:', studentJson);
console.log('typeof stringJson:', typeof studentJson);
