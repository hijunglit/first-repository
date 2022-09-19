const playBox = document.querySelector(".playBox h1");

const eventListener = document.querySelector(".playBox h1:nth-child(2)");

function clickHandler() {
    playBox.innerText = "click";
    playBox.style.color = "orange"
}

function eventHandler() {
    eventListener.innerText = "mouse enter";
    eventListener.style.color = "red";
}

function eventHandlerLeave() {
    eventListener.innerText = "mouse leave";
    eventListener.style.color = "blue";
}

function copyListenerFn() {
    copyListener.alter('copier!');
}

playBox.addEventListener("click", clickHandler);

eventListener.addEventListener("mouseenter", eventHandler);

eventListener.addEventListener("mouseleave", eventHandlerLeave);
