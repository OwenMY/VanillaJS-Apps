let intervalID = null;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;
let INTERVAL_MS = 1000 / 60;

const startBtn = document.getElementById('start-button');
const stopBtn = document.getElementById('stop-button');
const resetBtn = document.getElementById('reset-button');
const timer = document.getElementById('timer');

startBtn.addEventListener('click', (e) => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;

  lastTimerStartTime = Date.now();

  intervalID = setInterval(startTimer, INTERVAL_MS);
});

stopBtn.addEventListener('click', () => {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  resetBtn.disabled = false;

  millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;

  clearInterval(intervalID);
});

resetBtn.addEventListener('click', () => {
  resetBtn.disabled = true;
  timer.textContent = '00:00:000';
});

const startTimer = () => {
  const millisElapsed = Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

  timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
};

const formatNumber = (number, maxLength) => {
  number = String(number);

  if (number.length > maxLength) {
    return number.slice(-maxLength);
  }

  return String(number).padStart(maxLength, '0');
}