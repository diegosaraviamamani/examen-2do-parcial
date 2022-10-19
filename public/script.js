// login user
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = loginForm["login-user"].value;
  const userWelcome = document.querySelector("#user-welcome");
  userWelcome.innerHTML = `BIENVENID(@) ${user}`;
});
