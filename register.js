// register.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const studentId = document.getElementById('studentId').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  errorMessage.style.display = "none";
  successMessage.style.display = "none";

  // Basic Validation
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    errorMessage.style.display = "block";
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters.";
    errorMessage.style.display = "block";
    return;
  }

  // Simulating account creation (you would store this in a database in real projects)
  localStorage.setItem("studentId", studentId);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  successMessage.textContent = "Account created successfully!";
  successMessage.style.display = "block";

  // Redirect to login page after 2 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
