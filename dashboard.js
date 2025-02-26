document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
          console.log("Logout button clicked."); // Debugging step

          // Clear session and local storage
          sessionStorage.clear();
          localStorage.clear();

          // Redirect to login page
          window.location.href = "index.html";
      });
  } else {
      console.error("Logout button not found.");
  }
});
