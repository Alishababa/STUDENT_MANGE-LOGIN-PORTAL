document.addEventListener("DOMContentLoaded", function () {
  // Back to Dashboard Button
  document.getElementById("backBtn").addEventListener("click", function () {
      window.location.href = "dashboard.html"; // Redirect to Dashboard
  });

  // Attendance Data
  const studentName = "John Doe"; // Example Student Name
  const department = "Computer Science"; // Example Department
  const subjects = ["Math", "Science", "English", "DE", "SAM"];
  const attendancePercentages = [85, 90, 80, 25, 35];

  // Bar Chart (30 Days Attendance)
  const ctxBar = document.getElementById("attendanceBarChart").getContext("2d");
  const attendanceBarChart = new Chart(ctxBar, {
      type: "bar",
      data: {
          labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
          datasets: [{
              label: "Attendance (%)",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 70),
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: { beginAtZero: true, max: 100 }
          }
      }
  });

  // Pie Chart (Subject-wise Attendance)
  const ctxPie = document.getElementById("attendancePieChart").getContext("2d");
  const attendancePieChart = new Chart(ctxPie, {
      type: "pie",
      data: {
          labels: subjects,
          datasets: [{
              data: attendancePercentages,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
          }]
      },
      options: {
          responsive: true
      }
  });

  // Download Report as PDF
  document.getElementById("downloadReport").addEventListener("click", function () {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // University Name (Centered)
      doc.setFontSize(16);
      doc.text("CENTRAL UNIVERSITY OF TAMIL NADU", 50, 15);

      // Student Details
      doc.setFontSize(12);
      doc.text(`Student Name: ${studentName}`, 10, 30);
      doc.text(`Department: ${department}`, 10, 40);

      // Subject-wise Attendance Table
      doc.text("Subject-wise Attendance:", 10, 55);
      let y = 65;
      subjects.forEach((subject, index) => {
          doc.text(`${subject}: ${attendancePercentages[index]}%`, 10, y);
          y += 10;
      });

      // Add Line for HOD's Signature
      doc.line(140, 250, 190, 250);
      doc.text("HOD Signature", 150, 260);

      // Save PDF
      doc.save("Attendance_Report.pdf");
  });
});
