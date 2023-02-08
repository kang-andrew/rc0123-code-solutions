function handleFocus(event) {
  console.log('focus event was fired:', focus);
  console.log('event target:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired:', blur);
  console.log('event target:', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $formName = document.forms[0].elements.name;
var $formEmail = document.forms[0].elements.email;
var $formMessage = document.forms[0].elements.message;

$formName.addEventListener('focus', handleFocus);
$formName.addEventListener('blur', handleBlur);
$formName.addEventListener('input', handleInput);

$formEmail.addEventListener('focus', handleFocus);
$formEmail.addEventListener('blur', handleBlur);
$formEmail.addEventListener('input', handleInput);

$formMessage.addEventListener('focus', handleFocus);
$formMessage.addEventListener('blur', handleBlur);
$formMessage.addEventListener('input', handleInput);
