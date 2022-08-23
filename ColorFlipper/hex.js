const hex = [0, 1, 2, 3, 4, 5, 5, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', (e) => {
  let randomHex = '#';

  for (let i = 0; i < 6; i++) {
    const randomNumber = genNumber();
    const hexKey = hex[randomNumber];
    randomHex+= hexKey;
  }

  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

const genNumber = () => {
  return Math.floor(Math.random() * hex.length);
};