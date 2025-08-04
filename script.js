document.querySelector("form").addEventListener("submit", function (e) {
e.preventDefault();
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const location = document.getElementById("location").value.trim();
const message = document.getElementById("message").value.trim();

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const phonePattern = /^[0-9]{10}$/;

let errors = [];

if (name === "") {
    errors.push("Name is required.");
}

if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
}

if (!phonePattern.test(phone)) {
    errors.push("Enter a valid 10-digit phone number.");
}

if (location === "") {
    errors.push("Location is required.");
}

if (message.length < 10) {
    errors.push("Message should be at least 10 characters.");
}

if (errors.length > 0) {
    alert(errors.join("\n"));
} else {
    alert("Form submitted successfully!");
    this.reset();
}
});

