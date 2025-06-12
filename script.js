// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop page reload

        alert("Thank you for your message, " + form.name.value + "!");
        form.reset();
    });
});

