var modal = document.querySelector('.modal');

var openButton = document.querySelector('.modal-btn');

var noButton = document.querySelector('.no-btn');

function openModal(event) {
  modal.className = 'modal show';
}

openButton.addEventListener('click', openModal);

function closeModal(event) {
  modal.className = 'modal';
}

noButton.addEventListener('click', closeModal);
