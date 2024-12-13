// FAQs page form submission
document.getElementById('faq-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const email = document.getElementById('email').value;

    // For now, just log the details to the console (you can replace this with a server-side call)
    console.log('Question submitted:', question);
    console.log('User email:', email);

    // Display a confirmation or reset the form
    alert('Your question has been submitted! We will get back to you soon.');
    document.getElementById('faq-form').reset();
});

// Contact Us form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the details for now
    console.log('Contact form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Provide feedback to the user
    alert('Thank you for reaching out, ' + name + '! We will get back to you shortly.');
    document.getElementById('contact-form').reset();
});

// Add smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

