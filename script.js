function generateReport() {
  const name = document.getElementById('name').value;
  const rate = parseFloat(document.getElementById('rate').value);
  const hours = parseFloat(document.getElementById('hours').value);

  // Validation check
  if (!name || isNaN(rate) || isNaN(hours)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Calculate salary and tax
  const salary = rate * hours;
  const tax = salary * 0.10;

  // Format and display the report
  const reportContent = `
    <h3>Salary Report</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Rate per Hour:</strong> ₱${rate.toFixed(2)}</p>
    <p><strong>Hours Worked:</strong> ${hours}</p>
    <p><strong>Total Salary:</strong> ₱${salary.toFixed(2)}</p>
    <p><strong>Tax (10%):</strong> ₱${tax.toFixed(2)}</p>
  `;

  document.getElementById('report').innerHTML = reportContent;
}