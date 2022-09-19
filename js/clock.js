const clock = document.getElementById('clock');
const date = new Date();

function getClock() {
    const date = new Date();
    const h = String(date.getHours()).padStart(2,'0');
    const m = String(date.getMinutes()).padStart(2,'0');
    const s = String(date.getSeconds()).padStart(2,'0');

    clock.innerText = `${h}:${m}:${s}`;
}

getClock();
setInterval(getClock, 1000);

// function addZero(i) {
//     if(i < 10) {
//         i = '0' + i
//     }
//     return i;
// }

// function getClock() {
//     const date = new Date();
//     const h = addZero(date.getHours());
//     const m = addZero(date.getMinutes());
//     const s = addZero(date.getSeconds());

//     // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     clock.innerText = `${h}: ${m}: ${s}`;
// }