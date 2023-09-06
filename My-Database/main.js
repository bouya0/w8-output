(() => {
  const $doc = document;
  const $mail = $doc.getElementById("js-mail");
  const $pass = $doc.getElementById("js-pass");
  const $button = $doc.getElementById("js-button");

  $button.addEventListener("click", (e) => {
    e.preventDefault();

    const mailValue = $mail.value;
    const passValue = $pass.value;

    localStorage.setItem("email", mailValue);
    localStorage.setItem("password", passValue);
  });
})();
