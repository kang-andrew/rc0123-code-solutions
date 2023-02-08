var $formContact = document.forms[0];

function submitInformation(event) {
  var messageData = {
    name: $formContact.name.value,
    email: $formContact.email.value,
    message: $formContact.message.value
  };
  event.preventDefault();
  console.log(messageData);
  $formContact.reset();
}

$formContact.addEventListener('submit', submitInformation);
