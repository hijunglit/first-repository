const firstRow = document.querySelector(".playBox > h1");

function clickListener() {
    firstRow.style.color = "red";
    firstRow.innerText = "you did!";
}

function resizeListener() {
    document.body.style.backgroundColor = "orange";
}

function copyListener() {
    alert("copier!");
}

function offlineListener() {
    alert("WTF your not connected on network!");
}

function onlineListener() {
    alert("good.. your on network");
}

// firstRow.addEventListener('click', clickListener);

firstRow.onclick = clickListener;

window.addEventListener('resize', resizeListener); 

window.addEventListener('copy', copyListener);

window.addEventListener('offline', offlineListener);

window.addEventListener('online', onlineListener)