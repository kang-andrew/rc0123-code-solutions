var $modal = document.querySelector('.modal');

var $lightBulb = document.querySelector('.light-bulb');

var $lightBulbOff = document.querySelector('.light-bulb.off');

function lightOff(event) {
  $modal.className = 'modal show';
}

$lightBulb.addEventListener('click', lightOff);

function lightOn(event) {
  $modal.className = 'modal';
}

$lightBulbOff.addEventListener('click', lightOn);
