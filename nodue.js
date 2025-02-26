// Handle updating the status for all dues
document.getElementById("updateStatus").addEventListener("click", function() {
    // Simulate clearing all dues
    document.getElementById("department-status").textContent = "Cleared";
    document.getElementById("department-status").style.color = "green";

    document.getElementById("library-status").textContent = "Cleared";
    document.getElementById("library-status").style.color = "green";

    document.getElementById("college-status").textContent = "Cleared";
    document.getElementById("college-status").style.color = "green";

    document.getElementById("hostel-status").textContent = "Cleared";
    document.getElementById("hostel-status").style.color = "green";

    // Show the No Due Form download section
    document.getElementById("noDueSection").style.display = "block";
});

// Function to download the No Due Form
document.getElementById("downloadForm").addEventListener("click", function() {
    let formContent = `No Due Certificate\n\nThis is to certify that all dues have been cleared.\n\nDate: ${new Date().toLocaleDateString()}`;
    
    let blob = new Blob([formContent], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "No_Due_Form.txt";
    link.click();
});

// Handle back to Dashboard action
document.getElementById("backToDashboard").addEventListener("click", function() {
    // Redirect to the dashboard (or you can change the href if it's a different page)
    window.location.href = "dashboard.html";
});
