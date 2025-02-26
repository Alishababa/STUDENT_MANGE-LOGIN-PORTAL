// library.js

document.getElementById('backBtn').addEventListener('click', () => {
  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});

// Example of dynamically updating library due details
const libraryDues = [
  { book: "Advanced Math", dueDate: "02/15/2025" },
  { book: "Physics Fundamentals", dueDate: "02/20/2025" }
];

document.addEventListener('DOMContentLoaded', () => {
  const libraryDetails = document.querySelector('.library-details');
  libraryDetails.innerHTML = ""; // Clear existing content

  libraryDues.forEach(item => {
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `Book: "${item.book}" - Due Date: ${item.dueDate}`;
    libraryDetails.appendChild(bookInfo);
  });
});
