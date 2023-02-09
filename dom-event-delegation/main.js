var $taskListClick = document.querySelector('.task-list');

$taskListClick.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    var $closestElement = event.target.closest('.task-list-item');
    console.log('closest:', $closestElement);
    $closestElement.remove();
  }
}
);
