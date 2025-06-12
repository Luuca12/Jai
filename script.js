document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = form.name.value;
        alert(`Thank you for your message, ${name}!`);
        form.reset();

        // Uncomment below for real backend integration
        /*
        const response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            })
        });
        */
    });
});
