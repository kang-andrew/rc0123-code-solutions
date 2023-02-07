function handleClick(event) {
  console.log('message:', 'button clicked');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('message:', 'button hovered');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('message:', 'button double-clicked');
  console.log('event object:', event);
  console.log(event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick, false);
