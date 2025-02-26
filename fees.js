document.getElementById("backBtn").addEventListener("click", function() {
  window.location.href = "dashboard.html";
});

document.querySelectorAll(".fee-btn").forEach(button => {
  button.addEventListener("click", function() {
    document.getElementById("fee-form-container").classList.remove("hidden");
    document.getElementById("fee-title").textContent = this.textContent;
  });
});

document.getElementById("payBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const department = document.getElementById("department").value;
  const semester = document.getElementById("semester").value;
  const amount = document.getElementById("amount").value;
  
  if (!name || !department || !semester || !amount) {
    alert("Please fill in all details.");
    return;
  }
  
  alert(`Payment of Rs. ${amount} successful for ${name} in ${department}, Semester ${semester}.`);
});
