document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");

  backBtn.addEventListener("click", () => {
    // Navigate to the dashboard page
    window.location.href = "dashboard.html"; // Adjust the URL as needed
  });
});
