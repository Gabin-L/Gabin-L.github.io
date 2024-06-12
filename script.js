document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').split('.html')[0];
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Form submission logic
        alert('Form submitted successfully!');
        contactForm.reset();
    });
});
