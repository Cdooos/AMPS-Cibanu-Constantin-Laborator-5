document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".email-form-1");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    if (!name || !email || !message) {
      alert("Vă rugăm să completați toate câmpurile!");
      return;
    }

    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(name)) {
      alert("Numele și prenumele nu sunt valide!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Adresa de email nu este validă!");
      return;
    }

    alert("Datele au fost trimise cu succes!");
    form.reset();
  });
});
