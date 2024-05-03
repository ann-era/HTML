function validityChecker(event) {
    if (!document.getElementById('PhoneNumber').checkValidity()) {
        alert('Invalid phone number format. Please enter a valid Malaysian phone number.');
        event.preventDefault();
    } else {
        event.preventDefault();
        window.location.href = "page3.html";
    }
}
