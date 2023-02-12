const formEl = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" && password.value === "") {
    return alert("Enter the data");
  } else if (email.value === "") {
    return alert("Enter the email");
  } else if (password.value === "") {
    return alert("Enter the password");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);
