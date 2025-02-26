document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.getElementById("editStudentBtn");
  const backButton = document.getElementById("backBtn");
  const tableCells = document.querySelectorAll("tbody td");

  let isEditing = false;

  // Edit Student Details
  editButton.addEventListener("click", function () {
      if (!isEditing) {
          tableCells.forEach(cell => {
              if (cell.cellIndex === 1) { // Only allow editing of details, not labels
                  const input = document.createElement("input");
                  input.type = "text";
                  input.value = cell.innerText;
                  cell.innerHTML = "";
                  cell.appendChild(input);
              }
          });
          editButton.innerText = "Save Changes";
          isEditing = true;
      } else {
          tableCells.forEach(cell => {
              if (cell.cellIndex === 1) {
                  const input = cell.querySelector("input");
                  if (input) {
                      cell.innerText = input.value;
                  }
              }
          });
          editButton.innerText = "Edit Student";
          isEditing = false;
      }
  });

  // Back to Dashboard Functionality
  backButton.addEventListener("click", function () {
      window.location.href = "dashboard.html"; // Change to the actual path of your dashboard
  });
});
