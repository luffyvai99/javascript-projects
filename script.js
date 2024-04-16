console.log("Hiii");

let clickBtn = document.querySelector(".btn");

clickBtn.addEventListener("click", textFunction);

function textFunction() {
  let element = document.querySelector("h1");

  element.innerHTML = getRandomColor();
  let body = document.getElementsByTagName("body")[0];

  body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  let red = Math.ceil(Math.random() * 256);
  let green = Math.ceil(Math.random() * 256);
  let blue = Math.ceil(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}
