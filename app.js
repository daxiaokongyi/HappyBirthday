// const h1 = document.querySelector('h1');
const letters = document.querySelectorAll('.letter');
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// setInterval(function () {
//   h1.style.color = randomColor();
// }, 1000);

const intervalId = setInterval(function () {
  for (let letter of letters) {
    letter.style.color = randomColor();
  }
}, 1000);
