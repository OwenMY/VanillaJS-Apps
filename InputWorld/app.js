const input = document.querySelector('.name');
const normalDisplay = document.querySelector('.normal-output');
const debounceDisplay = document.querySelector('.debounce-output');
const throttleDisplay = document.querySelector('.throttle-output');

input.addEventListener('input', () => {
  normalDisplay.textContent = input.value;
  debounceInput(input.value, 1000);
  throttleInput(input.value, 1000);
});

const debounce = () => {
  let timeoutID;

  return (inp, delay) => {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = null;
      debounceDisplay.textContent = inp;
    }, delay);
  };
};

const throttle = () => {
  let timeoutID;
  let currentInp;

  return (inp, delay) => {
    currentInp = inp;
    if (timeoutID) return;

    timeoutID = setTimeout(() => {
      timeoutID = null;
      throttleDisplay.textContent = currentInp;
    }, delay);
  }
};

const debounceInput = debounce();
const throttleInput = throttle();