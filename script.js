// Get form and input elements
const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

// Validate the form
function validateForm() {
    // Using constraint API
    isValid = form.checkValidity();

    // Style main message for error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // Check to see if passwords match
    if (password1Element.value === password2Element.value) {
        passwordsMatch = true;
        password1Element.style.borderColor = 'green';
        password2Element.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1Element.style.borderColor = 'red';
        password2Element.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Registration Successful!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// Store form data
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value
    };
    // Do something with user data, like pass it to a server or database
    console.log('User data:', user);
    console.log('Password is hidden for security reasons.');
}

// Clear form fields
function clearFormFields() {
    form.reset();
    password1Element.style.borderColor = '';
    password2Element.style.borderColor = '';
}

// Process form data
function processFormData(e) {
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
        clearFormFields();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);
