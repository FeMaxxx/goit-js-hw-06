// const formEl = document.querySelector(".login-form");
// const inputsEls = formEl.querySelectorAll("input");
// const buttonEl = formEl.lastElementChild;

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();

// if (inputsEls[0].value === "" && inputsEls[1].value === "") {
//   return alert("Введіть данні");
// } else if (inputsEls[0].value === "") {
//   return alert("Введіть email");
// } else if (inputsEls[1].value === "") {
//   return alert("Введіть password");
// }

//   console.log(`Email: ${inputsEls[0].value}, Password: ${inputsEls[1].value}`);
//   event.currentTarget.reset();
// });

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
