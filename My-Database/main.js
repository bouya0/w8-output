(() => {
  const $doc = document;
  const $form = document.getElementById("js-form"); //新たなidを取得
  const $email = $doc.getElementById("js-email");
  const $password = $doc.getElementById("js-password");
  // const $button = $doc.getElementById("js-button"); ボタンいらない？

  $form.addEventListener("submit", () => {
    //$buttonに対してclickイベントだったものを、formに対してsubmitイベントに変更
    // e.preventDefault();いらない？

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
