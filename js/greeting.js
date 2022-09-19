const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);
const HIDDEN_CLASSNAME = "hidden";

function greetingFn(userName) {
    greeting.innerText = `Hi ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function submitListener(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    greetingFn(userName);
}

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitListener);
} else {
    greetingFn(savedUserName);
}
