document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.querySelector(".email-form");
  const promocodeForm = document.querySelector(".email-1");

  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document
      .querySelector('.email-form input[type="email"]')
      .value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput === "" || !emailPattern.test(emailInput)) {
      alert("Introduceți o adresă de email validă!");
    } else {
      alert("Mulțumim pentru abonare!");
    }
  });

  promocodeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const promocodeInput = document
      .querySelector('.email-1 input[type="text"]')
      .value.trim();

    const promocodePattern = /^[a-zA-Z0-9]+$/;

    if (promocodeInput === "" || !promocodePattern.test(promocodeInput)) {
      alert("Introduceți un promocode valid!");
    } else {
      alert("Promocode-ul a fost aplicat cu succes!");
    }
  });
});
