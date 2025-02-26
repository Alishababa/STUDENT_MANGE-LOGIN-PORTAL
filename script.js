// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Sample credentials (Replace with real authentication logic)
  const validUsername = "student123";
  const validPassword = "password123";

  if (username === validUsername && password === validPassword) {
    window.location.href = "dashboard.html"; // Redirect on successful login
  } else {
    errorMessage.style.display = "block"; // Show error message
  }
});
