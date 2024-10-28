document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.querySelector(".sign-in-htm");
  const signUpForm = document.querySelector(".sign-up-htm");

  function signIn(username, password) {
    if (username === "admin" && password === "admin") {
      alert("Autentificare reușită!");
      window.location.href = "index.html";
    } else {
      alert("Autentificare eșuată! Verificați username-ul și parola.");
    }
    signInForm.reset();
  }

  function signUp(username, password, repeatPassword, email) {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username.match(usernameRegex)) {
      alert("Username-ul poate conține doar litere, cifre, - sau _.");
      return;
    }

    if (!password.match(passwordRegex)) {
      alert(
        "Parola trebuie să aibă cel puțin 6 caractere și să conțină cel puțin o literă și o cifră."
      );
      return;
    }

    if (password !== repeatPassword) {
      alert("Parolele nu se potrivesc.");
      return;
    }

    if (!email.match(emailRegex)) {
      alert("Vă rugăm să introduceți o adresă de email validă.");
      return;
    }

    alert("Înregistrare reușită!");

    signUpForm.reset();
    window.location.href = "index.html";
  }

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = signInForm.querySelector("#user").value;
    const password = signInForm.querySelector("#pass").value;

    signIn(username, password);
  });

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = signUpForm.querySelector("#new-user").value;
    const password = signUpForm.querySelector("#new-pass").value;
    const repeatPassword = signUpForm.querySelector("#repeat-pass").value;
    const email = signUpForm.querySelector("#email").value;

    signUp(username, password, repeatPassword, email);
  });
});
