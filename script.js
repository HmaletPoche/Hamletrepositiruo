document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '' || !emailPattern.test(email) || message === '') {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }

        form.reset();
        successModal.show();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});