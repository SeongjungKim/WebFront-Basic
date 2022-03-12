const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function printGreeting(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogInSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;

  printGreeting(username);

  localStorage.setItem(USERNAME_KEY, username);
  console.log(localStorage.getItem(USERNAME_KEY));
  // localStorage.removeItem(USERNAME_KEY);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogInSubmit);
} else {
  printGreeting(savedUsername);
}
