console.log("Portfolio Home Loaded");

// =====================
// Smooth scroll for anchor links
// =====================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =====================
// Active link highlighting based on clean URLs
// =====================
const currentPath = window.location.pathname; // e.g., "/about", "/portfolio"
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname; // get path from full URL
    if (linkPath === currentPath || (linkPath === '/index.html' && currentPath === '/')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
const form = document.getElementById('serviceOrderForm');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    // Validate phone: must start with 07 or 01 + 8 digits
    if(phoneInput.value && !phoneInput.value.match(/^(07|01)\d{8}$/)) {
        phoneInput.classList.add('invalid');
        phoneInput.classList.remove('valid');
        valid = false;
    } else if(phoneInput.value) {
        phoneInput.classList.remove('invalid');
        phoneInput.classList.add('valid');
    } else {
        phoneInput.classList.remove('invalid', 'valid'); // optional, if empty
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        valid = false;
    } else {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    }

    if(!valid) return; // stop submission if invalid

    const name = document.getElementById('name').value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const serviceSelect = document.getElementById('service');
    const service = serviceSelect.value || 'General Enquiry';
    const details = document.getElementById('details').value.trim();
    const justQuestion = document.getElementById('justQuestion').checked;

    const typeText = justQuestion ? 'Enquiry' : 'Service Request';
    const message = `Hi Rioba, I have a ${typeText}.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService/Question: ${service}\nDetails: ${details}`;

    if(phone.match(/^(07|01)\d{8}$/)) {
        const waLink = `https://wa.me/254729709807?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank');
    } else {
        const mailtoLink = `mailto:riobaramadhan@gmail.com?subject=${encodeURIComponent(typeText)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }

    // Clear the form
    form.reset();
    phoneInput.classList.remove('invalid','valid');
    emailInput.classList.remove('invalid','valid');
});
