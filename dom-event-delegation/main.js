var $taskListClick = document.querySelector('.task-list');

$taskListClick.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    console.log('closest:', event.target.closest('.task-list-item'));
  }
}
);
