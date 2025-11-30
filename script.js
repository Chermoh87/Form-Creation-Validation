// Task 1
document.addEventListener('DOMContentLoaded', function() { // ⬅️ Correction 1: 'fucntion()' corrected to 'function()' and syntax fixed.

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Task 2
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Task 3
        // ⬅️ Correction 2: '.ariaValueMax' corrected to '.value'
        const username = document.getElementById('username').value.trim(); 
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();


        // task 4
        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must contain both '@' and '.' characters.");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Task 5
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.borderColor = "#28a745";

            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.borderColor = "#dc3545";
        }
    });
}); // ⬅️ Correction 3: Missing closing parenthesis for document.addEventListener