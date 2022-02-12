const notificationElement:any = document.querySelector('.notification');

function clearPrevious() {
  notificationElement.className = 'notification'
}

function displayError() {
  clearPrevious();
  notificationElement.classList.add('error');
  notificationElement.textContent = 'Please enter a valid email address.';
}

function displaySuccess() {
  clearPrevious();
  notificationElement.classList.add('success');
  notificationElement.textContent = 'Thank you for contacting me.'
}

const notifications = {
  displayError,
  displaySuccess
}

export default notifications