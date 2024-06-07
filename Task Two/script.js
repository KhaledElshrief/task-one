
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        alert(`Thank you for contacting us! We'll get back to you at ${email}.`);
        contactForm.reset();
    });
});
