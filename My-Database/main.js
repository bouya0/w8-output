(() => {
  const $doc = document;
  const $email = $doc.getElementById("js-email");
  const $password = $doc.getElementById("js-password");
  const $button = $doc.getElementById("js-button");

  $button.addEventListener("click", (e) => {
    e.preventDefault();

    const emailValue = $email.value;
    const passwordValue = $password.value;

    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);
  });

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (savedEmail && savedPassword) {
    $email.value = savedEmail;
    $password.value = savedPassword;
  }
})();
