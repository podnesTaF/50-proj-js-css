const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let blur = 50;
let int = setInterval(blurring, 30);
let blurInt = setInterval(
  () => (blur > 0 ? blur-- : clearInterval(blurInt)),
  60
);
let opac = 1;
let opacInt = setInterval(
  () => (opac > 0 ? (opac -= 0.01) : clearInterval(opacInt)),
  30
);

function blurring() {
  load++;
  if (load > 100) {
    clearInterval(int);
  }
  loadText.style.opacity = `${opac}`;
  loadText.innerText = `${load}%`;
  if (load > 100) {
    loadText.innerText = "";
  }
  bg.style.filter = `blur(${blur}px)`;
}
