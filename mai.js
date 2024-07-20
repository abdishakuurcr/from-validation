document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fullNameInput = document.querySelector("#fullName");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");
    let h2 = document.querySelector("#h2");

    let fullNameValue = fullNameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();

    let valid = true;

    // Full Name validation
    if (fullNameValue === '') {
 document.querySelector("#fullNameError").classList.remove('hidden');
valid = false;
    } else {
 document.getElementById('fullNameError').classList.add('hidden');
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
 document.getElementById('emailError').classList.remove('hidden');
valid = false;
    } else {
 document.getElementById('emailError').classList.add('hidden');
    }

    // Password validation
    if (passwordValue === '') {
  document.getElementById('passwordError').classList.remove('hidden');
 valid = false;
 } else {
 document.getElementById('passwordError').classList.add('hidden');
    }

    if (valid) {
 h2.innerHTML="wellcom Eng-shakra"
 document.getElementById('From validation').classList.add('hidden');
// You can also send form data to the server here
}
});
