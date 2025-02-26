document.getElementById("bankForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let holderName = document.getElementById("holderName").value;
    let bankName = document.getElementById("bankName").value;
    let accountNumber = document.getElementById("accountNumber").value;
    let ifscCode = document.getElementById("ifscCode").value;

    // Validate Account Number (Only digits)
    if (!/^\d+$/.test(accountNumber)) {
        alert("Account Number must contain only numbers!");
        return;
    }

    // Validate IFSC Code (Example: ABCD0123456)
    if (!/^[A-Z]{4}[0-9]{7}$/.test(ifscCode)) {
        alert("Invalid IFSC Code! Format: ABCD0123456");
        return;
    }

    // Display entered details
    document.getElementById("displayHolder").textContent = holderName;
    document.getElementById("displayBank").textContent = bankName;
    document.getElementById("displayAccount").textContent = accountNumber;
    document.getElementById("displayIfsc").textContent = ifscCode;

    document.getElementById("bankDetails").classList.remove("hidden");
});
