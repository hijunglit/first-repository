const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function submitListener(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const userName = loginInput.value;
    localStorage.setItem('username', userName);
    greeting.innerText = `Hello ${userName}`;
    // h1.classList.remove(HIDDEN);
}

loginForm.addEventListener("submit", submitListener); 

