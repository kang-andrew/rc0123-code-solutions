var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    var $viewContainer = event.target.getAttribute('data-view');
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target && $view[i].getAttribute('data-view') === $viewContainer) {
        event.target.className = 'tab active';
        $view[i].className = 'view';
      } else {
        $tab[i].className = 'tab';
        $view[i].className = 'hidden';
      }
    }
  }
});
