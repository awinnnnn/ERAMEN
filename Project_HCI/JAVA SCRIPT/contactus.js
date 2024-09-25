// Toggle clas active
const navbarNav = document.querySelector('.navbar-nav');

// When menu clicked
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// When outside menu clicked
const menulist = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Validation
function validateForm(event) {
    event.preventDefault();
  
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const preferencesInput = document.getElementById('preferences');
    const newsletterCheckbox = document.getElementById('newsletter');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const preferencesError = document.getElementById('preferences-error');
    const newsletterError = document.getElementById('newsletter-error');
  
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const preferences = preferencesInput.value;
    const newsletter = newsletterCheckbox.checked;  
  
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    preferencesError.textContent = '';
  
    // Validate Full Name
    if (fullName.length < 5 || !/^[a-zA-Z]+$/.test(fullName)) {
        fullNameInput.classList.add('error');
        nameError.textContent = 'Full Name must be at least 5 characters long and contain only alphabet characters.';
    } else {
        fullNameInput.classList.remove('error');
    }
  
    // Validate Email Address
    if (!email.endsWith('@gmail.com')) {
        emailInput.classList.add('error');
        emailError.textContent = 'Email Address must end with "@gmail.com".';
    } else {
        emailInput.classList.remove('error');
    }
  
    // Validate Phone Number
    if (phone.length < 11 || !/^\d+$/.test(phone)) {
        phoneInput.classList.add('error');
        phoneError.textContent = 'Phone Number must be 11 characters long and contain only numeric characters.';
    } else {
        phoneInput.classList.remove('error');
    }

    // Validate Preferences
    if (preferences === '') {
        preferencesInput.classList.add('error');
        preferencesError.textContent = 'Please select a ramen.';
    } else {
        preferencesInput.classList.remove('error');
    }

    // Validate Newsletter Checkbox
    if (!newsletterCheckbox.checked) {
        newsletterError.textContent = 'You must agree to receive the newsletter.';
    } else {
        newsletterError.textContent = '';
    }
}
  
function displaySuccessMessage() {
    const form = document.getElementById('contact-form');
  
    form.style.display = 'none';
    successMessage.style.display = 'block';
}