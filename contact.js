// ---------- Mobile menu ----------
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
    navLinks.classList.toggle("open");
}


// ---------- Contact form ----------
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

// Show or clear an error under a field
function showError(input, errorId, message) {
    document.getElementById(errorId).textContent = message;

    if (message === "") {
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
    }
}

// Check all fields. Returns true if everything is OK.
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    // Name
    if (name.value.trim() === "") {
        showError(name, "nameError", "Name is required");
        isValid = false;
    } else {
        showError(name, "nameError", "");
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "emailError", "Enter a valid email address");
        isValid = false;
    } else {
        showError(email, "emailError", "");
    }

    // Phone (optional, but must be 10 digits if typed)
    const phoneValue = phone.value.trim();
    if (phoneValue !== "" && !/^[6-9]\d{9}$/.test(phoneValue)) {
        showError(phone, "phoneError", "Enter a valid 10-digit number");
        isValid = false;
    } else {
        showError(phone, "phoneError", "");
    }

    // Subject
    if (subject.value === "") {
        showError(subject, "subjectError", "Please select a subject");
        isValid = false;
    } else {
        showError(subject, "subjectError", "");
    }

    // Message
    if (message.value.trim().length < 10) {
        showError(message, "messageError", "Message must be at least 10 characters");
        isValid = false;
    } else {
        showError(message, "messageError", "");
    }

    return isValid;
}

// When the form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();   // stop page reload
    successMsg.textContent = "";

    if (validateForm()) {
        const name = document.getElementById("name").value.trim();
        successMsg.textContent = `Thank you, ${name}! We'll get back to you soon.`;
        form.reset();
    }
});

// Allow only numbers in phone field
document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});
