// const bg = ['bg1', 'bg2', 'bg3'];
// const bgCtn = document.querySelector(".bgCtn");

// function randomBg() {
//     const randomBg = Math.floor(Math.random()*bg.length);
//     bgCtn.innerHTML += `<img src= "/img/${bg[randomBg]}.jpg" alt="">`;
// }

// randomBg();

const img = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];

const chosenImage = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`; 

document.body.appendChild(bgImg);
