/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', function (event) {
  var todosJson = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJson);
});