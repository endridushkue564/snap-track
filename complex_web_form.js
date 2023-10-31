/* 
  Filename: complex_web_form.js
  Content: A complex web form with interactive features and validation checks
*/

// Assumptions: This code assumes the presence of HTML elements with specific IDs and classes to interact with

// Function to validate email format
function validateEmail(email) {
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
  return emailPattern.test(String(email).toLowerCase());
}

// Function to validate password complexity
function validatePassword(password) {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return passwordPattern.test(password);
}

// Function to display error message
function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.classList.add('error');
  errorElement.textContent = errorMessage;
}

// Function to hide error message
function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.classList.remove('error');
  errorElement.textContent = '';
}

// Function to validate form inputs on submit
function validateForm(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if any field is empty
  if (!firstName || !lastName || !email || !password) {
    showError('error-message', 'All fields are required!');
    return;
  }

  // Check email format
  if (!validateEmail(email)) {
    showError('error-message', 'Invalid email address!');
    return;
  }

  // Check password complexity
  if (!validatePassword(password)) {
    showError(
      'error-message',
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.'
    );
    return;
  }

  // Clear error messages if all validations pass
  hideError('error-message');

  // Perform form submission logic
  // (e.g., AJAX request or redirection to another page)
}

// Attach form submit event listener
const form = document.getElementById('my-form');
form.addEventListener('submit', validateForm);