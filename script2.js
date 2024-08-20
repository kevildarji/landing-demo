document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // Get the form elements
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Username validation: required and must be at least 3 characters
    if (username === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters long.";
        isValid = false;
    }

    // Password validation: required and must be between 4 and 12 characters
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 4 || password.length > 12) {
        passwordError.textContent = "Password must be between 4 and 12 characters.";
        isValid = false;
    }

    // If the form is valid, submit it (for demonstration purposes, we'll just log a success message)
    if (isValid) {
        alert("Form submitted successfully!");
        // You can proceed with form submission, e.g., using form.submit() or making an AJAX request.
    }
});
